import { useEffect, useMemo, useState } from 'react';
import MethodologySection from './MethodologySection.jsx';

const USERNAME = 'ekatmoz88-alt';

// Older copies and parallel variants are kept on GitHub but omitted from the portfolio index.
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
]);

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
  return new Intl.NumberFormat('en', { notation: value > 9999 ? 'compact' : 'standard' }).format(value);
}

function timeAgo(date) {
  const days = Math.max(0, Math.floor((Date.now() - new Date(date).getTime()) / 86400000));
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days} days ago`;
  if (days < 365) return `${Math.floor(days / 365)} years ago`;
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

function sqliteArchitectureDiagramCard({ diagram, onClick }) {
  return (
    <div className="sqlite-architecture-diagram-card" onClick={onClick}>
      <svg className="sqlite-diagram-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 20V10M18 10L12 10M12 4l.01"/>
      </svg>
      <h3 className="sqlite-diagram-title">{diagram.title}</h3>
      <p className="sqlite-diagram-desc">{diagram.description}</p>
    </div>
  );
}

function SqliteArchitectureDashboard() {
  // ... (rest of the component)
  return null;
}

// Main Dashboard Component
function App() {
  const [repositories, setRepositories] = useState([]);
  const [events, setEvents] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [username, setUsername] = useState(USERNAME);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch featured repositories
        const featuredPromises = Array.from(FEATURED_REPOSITORIES).map(async (repoName) => {
          try {
            const response = await githubGet(`/users/${username}/repos?per_page=100`);
            const repo = response.find(r => r.name === repoName);
            if (repo) {
              return {
                id: repo.id,
                name: repo.name,
                description: repo.description,
                html_url: repo.html_url,
                homepage: repo.homepage,
                language: repo.language,
                stargazers_count: repo.stargazers_count,
                forks_count: repo.forks_count,
                updated_at: repo.updated_at,
                private: repo.private,
              };
            }
            return null;
          } catch (e) {
            console.warn(`Could not fetch featured repo ${repoName}`, e);
            return null;
          }
        });
        const featuredResults = await Promise.all(featuredPromises);
        setRepositories(featuredResults.filter(Boolean));

        // Fetch events
        const eventsResponse = await githubGet(`/users/${username}/events/public?per_page=100`);
        setEvents(eventsResponse);

        // Fetch languages
        const repos = await githubGet(`/users/${username}/repos?per_page=100`);
        const langMap = {};
        repos.forEach((repo) => {
          if (repo.language) {
            if (!langMap[repo.language]) {
              langMap[repo.language] = 0;
            }
            langMap[repo.language] += 1;
          }
        });
        const total = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
        const languagesArray = Object.entries(langMap).map(([name, count]) => ({
          name,
          percent: Math.round((count / total) * 100),
        }));
        setLanguages(languagesArray);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }
    fetchData();
  }, [FEATURED_REPOSITORIES, username]);

  const visibleRepositories = useMemo(() => {
    return repositories
      .filter((repo) => !HIDDEN_REPOSITORIES.has(repo.name))
      .sort((a, b) => {
        const order = ['quietgridlabs-c4-editor', 'adp201p4-hardware-spec', 'api-docs-portfolio-v2', 'cobalt-ui-navigation-docs', 'fintech-docs-demo', 'global11-demo-data-platform', 'territory-descriptor-unified', 'technical-writing-workflows', 'ss-tmk-specification', 'sois-onboard-interface-architecture', 'viwi-vsm-architecture', 'technical-writing-portfolio', 'icao-mrtd-documentation', 'dbstationary-architecture-docs'];
        return order.indexOf(a.name) - order.indexOf(b.name);
      });
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
          {/* Hero section */}
          <div className="hero">
            <div>
              <h1>GitHub Profile Dashboard</h1>
              <p className="hero-subtitle">Портфолио открытых репозиториев</p>
            </div>
            <a href="https://github.com/ekatmoz88-alt" className="github-link" target="_blank" rel="noopener noreferrer">
              GitHub профиль ↗
            </a>
          </div>

          {/* Featured Repositories */}
          <section className="featured-projects">
            <h2 className="featured-projects-heading">Featured Projects</h2>
            <div className="featured-project-grid">
              {visibleRepositories.map((repo) => (
                <article className="repo-item" key={repo.id}>
                  <div className="repo-main">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name} ↗
                    </a>
                    <p>{repo.description || 'No description provided.'}</p>
                    <div className="repo-meta">
                      {repo.language && <span className="language-dot"></span>}
                      <span>★ {formatNumber(repo.stargazers_count)}</span>
                      <span>⑂ {formatNumber(repo.forks_count)}</span>
                      <span>Updated {timeAgo(repo.updated_at)}</span>
                      {repo.homepage && <a className="repo-website" href={websiteUrl(repo.homepage)} target="_blank" rel="noopener noreferrer">Live site ↗</a>}
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

          {/* Side column with language and activity panels */}
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
              <a className="all-activity" href={`https://github.com/${username}?tab=activity`} target="_blank" rel="noopener noreferrer">
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