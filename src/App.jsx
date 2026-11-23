import { useEffect, useMemo, useState } from 'react';

const USERNAME = 'ekatmoz88-alt';

const HIDDEN_REPOSITORIES = new Set([
  'adp201p4-hardware-spec-editable',
  'api-docs-portfolio',
  'descriptor-arm-spec',
  'deshifrator',
  'deshifrator-docs',
  'deshifrator-docs-public',
  'github-profile-dashboard-vite-public',
  'technical-docs-library',
  'github-profile-dashboard-vite',
  'ppo-territory-archive',
  'territory-docs',
  'DMRS-Global',
  'desktop',
  'interference-coatings-analysis-synthesis',
  'js.org',
  'orders-api-mcp',
  'umms-docs',
  'url-dashboard',
]);

const FEATURED_REPOSITORIES = new Set([
  'quietgridlabs-c4-editor',
  'adp201p4-hardware-spec',
  'api-docs-portfolio-v2',
  'cobalt-ui-navigation-docs',
  'fintech-docs-demo',
  'global11-demo-data-platform',
  'territory-descriptor-unified',
  'technical-writing-workflows',
  'ss-tmk-specification',
  'sois-onboard-interface-architecture',
  'viwi-vsm-architecture',
  'technical-writing-portfolio',
  'icao-mrtd-documentation',
  'dbstationary-architecture-docs',
  'network-schedule-docs',
]);

const REPOSITORY_ORDER = [
  'quietgridlabs-c4-editor',
  'adp201p4-hardware-spec',
  'api-docs-portfolio-v2',
  'cobalt-ui-navigation-docs',
  'fintech-docs-demo',
  'global11-demo-data-platform',
  'territory-descriptor-unified',
  'technical-writing-workflows',
  'ss-tmk-specification',
  'sois-onboard-interface-architecture',
  'viwi-vsm-architecture',
  'technical-writing-portfolio',
  'icao-mrtd-documentation',
  'dbstationary-architecture-docs',
  'network-schedule-docs',
];

const API = 'https://api.github.com';

async function githubGet(path, signal) {
  const response = await fetch(`${API}${path}`, {
    headers: { Accept: 'application/vnd.github+json' },
    signal,
  });

  if (!response.ok) {
    const message = response.status === 403
      ? 'GitHub API rate limit reached. Please try again later.'
      : `GitHub API request failed (${response.status}).`;
    throw new Error(message);
  }

  return response.json();
}

function formatNumber(value = 0) {
  return new Intl.NumberFormat('en', {
    notation: value > 9999 ? 'compact' : 'standard',
  }).format(value);
}

function timeAgo(date) {
  const timestamp = new Date(date).getTime();
  if (!Number.isFinite(timestamp)) return 'date unavailable';

  const days = Math.max(0, Math.floor((Date.now() - timestamp) / 86400000));
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days} days ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  return `${Math.floor(days / 365)} years ago`;
}

function eventDescription(event) {
  const repo = event.repo?.name?.replace(`${USERNAME}/`, '') || 'a repository';

  switch (event.type) {
    case 'PushEvent': return `Pushed ${event.payload?.commits?.length || 1} commit(s) to ${repo}`;
    case 'CreateEvent': return `Created ${event.payload?.ref_type || 'a resource'} in ${repo}`;
    case 'PullRequestEvent': return `${event.payload?.action || 'Updated'} a pull request in ${repo}`;
    case 'IssuesEvent': return `${event.payload?.action || 'Updated'} an issue in ${repo}`;
    case 'WatchEvent': return `Starred ${repo}`;
    case 'ForkEvent': return `Forked ${repo}`;
    case 'ReleaseEvent': return `Published a release in ${repo}`;
    default: return `${event.type?.replace('Event', '') || 'Activity'} in ${repo}`;
  }
}

function websiteUrl(value) {
  if (!value) return '';
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

function getLiveSiteUrl(homepage) {
  if (!homepage) return null;

  const normalized = websiteUrl(homepage);
  try {
    const url = new URL(normalized);
    if (url.hostname === 'github.com' || url.hostname === 'www.github.com') return null;
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null;
  } catch {
    return null;
  }
}

const LIVE_SITE_URLS = {
  'quietgridlabs-c4-editor': 'https://ekatmoz88-alt.github.io/quietgridlabs-c4-editor/',
  'adp201p4-hardware-spec': 'https://ekatmoz88-alt.github.io/adp201p4-hardware-spec/',
  'api-docs-portfolio-v2': 'https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/',
  'cobalt-ui-navigation-docs': 'https://ekatmoz88-alt.github.io/cobalt-ui-navigation-docs/',
  'fintech-docs-demo': 'https://ekatmoz88-alt.github.io/fintech-docs-demo/',
  'global11-demo-data-platform': 'https://ekatmoz88-alt.github.io/global11-demo-data-platform/',
  'territory-descriptor-unified': 'https://ekatmoz88-alt.github.io/territory-descriptor-unified/',
  'technical-writing-workflows': 'https://ekatmoz88-alt.github.io/technical-writing-workflows/',
  'ss-tmk-specification': 'https://ekatmoz88-alt.github.io/ss-tmk-specification/',
  'sois-onboard-interface-architecture': 'https://ekatmoz88-alt.github.io/sois-onboard-interface-architecture/',
  'viwi-vsm-architecture': 'https://ekatmoz88-alt.github.io/viwi-vsm-architecture/',
  'technical-writing-portfolio': 'https://ekatmoz88-alt.github.io/technical-writing-portfolio/',
  'icao-mrtd-documentation': 'https://ekatmoz88-alt.github.io/icao-mrtd-documentation/',
  'network-schedule-docs': 'https://ekatmoz88-alt.github.io/network-schedule-docs/',
};

const PROJECT_DESCRIPTIONS = {
  'api-docs-portfolio-v2': 'REST API and legacy SOAP/WSDL documentation with OpenAPI 3.1, Postman, Redoc and Docs-as-Code (EN/RU).',
  'global11-demo-data-platform': 'Oracle Global 11g relational data model, data dictionary, OLAP concepts and SQL analysis.',
  'network-schedule-docs': 'Evidence-based documentation of a network scheduling simulator: topology, packet transfer, time-slot scheduling and physical test-bench boundaries.',
};

function getProjectDescription(repo) {
  return PROJECT_DESCRIPTIONS[repo.name] || repo.description || 'Description is not set in GitHub repository metadata.';
}

function getProjectUrl(repo) {
  return repo.customLiveUrl || repo.html_url;
}

function App() {
  const [repositories, setRepositories] = useState([]);
  const [events, setEvents] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchData() {
      const [reposResult, eventsResult] = await Promise.allSettled([
        githubGet(`/users/${USERNAME}/repos?per_page=100&sort=updated`, signal),
        githubGet(`/users/${USERNAME}/events/public?per_page=100`, signal),
      ]);

      if (signal.aborted) return;

      if (reposResult.status === 'fulfilled') {
        const repos = reposResult.value;
        const featured = repos
          .filter((repo) => FEATURED_REPOSITORIES.has(repo.name) && !HIDDEN_REPOSITORIES.has(repo.name))
          .map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage,
            customLiveUrl: LIVE_SITE_URLS[repo.name] || getLiveSiteUrl(repo.homepage),
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            updated_at: repo.updated_at,
            private: repo.private,
          }));

        setRepositories(featured);

        const languageCounts = repos.reduce((counts, repo) => {
          if (repo.language) {
            counts[repo.language] = (counts[repo.language] || 0) + 1;
          }
          return counts;
        }, {});

        const totalLanguageRepositories = Object.values(languageCounts)
          .reduce((sum, count) => sum + count, 0);

        const languagesArray = Object.entries(languageCounts)
          .map(([name, count]) => ({
            name,
            percent: totalLanguageRepositories
              ? Math.round((count / totalLanguageRepositories) * 100)
              : 0,
          }))
          .sort((a, b) => b.percent - a.percent);

        setLanguages(languagesArray);
      } else if (reposResult.reason?.name !== 'AbortError') {
        console.error('Failed to fetch repositories:', reposResult.reason);
      }

      if (eventsResult.status === 'fulfilled') {
        setEvents(eventsResult.value);
      } else if (eventsResult.reason?.name !== 'AbortError') {
        console.error('Failed to fetch recent activity:', eventsResult.reason);
      }
    }

    fetchData();

    return () => controller.abort();
  }, []);

  const visibleRepositories = useMemo(() => {
    const order = new Map(REPOSITORY_ORDER.map((name, index) => [name, index]));

    return repositories
      .filter((repo) => !HIDDEN_REPOSITORIES.has(repo.name))
      .sort((a, b) => (order.get(a.name) ?? Number.MAX_SAFE_INTEGER)
        - (order.get(b.name) ?? Number.MAX_SAFE_INTEGER));
  }, [repositories]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span>Portfolio</span>
        </div>
        <div className="topbar-right">
          <button className="refresh-button" onClick={() => window.location.reload()}>Обновить</button>
        </div>
      </header>

      <main>
        <section className="dashboard">
          <div className="hero">
            <div>
              <h1>Technical Documentation Portfolio</h1>
              <p className="hero-subtitle">Исследую сложные программные системы, восстанавливаю их архитектуру и превращаю технические источники в структурированную, достоверную и поддерживаемую документацию.</p>
            </div>
            <a href="https://github.com/ekatmoz88-alt" className="github-link" target="_blank" rel="noopener noreferrer">
              GitHub профиль ↗
            </a>
          </div>

          <section className="featured-projects">
            <h2 className="featured-projects-heading">Featured Projects</h2>
            <div className="featured-project-grid">
              {visibleRepositories.map((repo) => (
                <article className="repo-item" key={repo.id}>
                  <div className="repo-main">
                    <a href={getProjectUrl(repo)} target="_blank" rel="noopener noreferrer">
                      {repo.name} ↗
                    </a>
                    <p>{getProjectDescription(repo)}</p>
                    <div className="repo-meta">
                      {repo.language && (
                        <>
                          <span className="language-dot" aria-hidden="true" />
                          <span className="language-name">{repo.language}</span>
                        </>
                      )}
                      <span>★ {formatNumber(repo.stargazers_count)}</span>
                      <span>⑂ {formatNumber(repo.forks_count)}</span>
                      <span>Updated {timeAgo(repo.updated_at)}</span>
                      {repo.customLiveUrl && (
                        <a className="repo-website" href={getProjectUrl(repo)} target="_blank" rel="noopener noreferrer">
                          Live site ↗
                        </a>
                      )}
                    </div>
                  </div>
                  <span className={repo.private ? 'visibility private' : 'visibility'}>
                    {repo.private ? 'Private' : 'Public'}
                  </span>
                </article>
              ))}
              {!visibleRepositories.length && <p className="empty-state">No repositories match that search.</p>}
            </div>
          </section>

          <aside className="side-column">
            <section className="panel language-panel">
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">TECH STACK</p>
                  <h2>Languages</h2>
                </div>
              </div>
              <p className="panel-note">Primary language by repository count</p>
              {languages.length ? languages.map((language) => (
                <div className="language-row" key={language.name}>
                  <div>
                    <span>{language.name}</span>
                    <strong>{language.percent}%</strong>
                  </div>
                  <div className="bar-track">
                    <span style={{ width: `${language.percent}%` }} />
                  </div>
                </div>
              )) : <p className="empty-state">No language data available.</p>}
            </section>

            <section className="panel activity-panel">
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">WHAT'S HAPPENING</p>
                  <h2>Recent activity</h2>
                </div>
              </div>
              <div className="activity-list">
                {events.slice(0, 8).map((event) => (
                  <div className="activity-item" key={event.id}>
                    <span className="activity-marker" />
                    <div>
                      <p>{eventDescription(event)}</p>
                      <time>{timeAgo(event.created_at)}</time>
                    </div>
                  </div>
                ))}
                {!events.length && <p className="empty-state">No recent public events found.</p>}
              </div>
              <a className="all-activity" href={`https://github.com/${USERNAME}?tab=activity`} target="_blank" rel="noopener noreferrer">
                View full activity ↗
              </a>
            </section>
          </aside>
        </section>

        <footer className="footer">
          <span>Data provided by the GitHub REST API</span>
          <span>Public data · Refresh to update</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
