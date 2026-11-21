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
  return /^https?:\\/\\//i.test(value) ? value : `https://${value}`;
}

function SqliteArchitectureReview() {
  const components = [
    ["ConnectionFactory", "Provides the shared SQLite connection."],
    ["SQLiteCommandEx<T>", "Executes commands and coordinates result handling."],
    ["SQLiteCommandEx_Params", "Creates and binds typed SQLite parameters, including GUID helpers."],
    ["SQLiteDataReaderEx", "Provides typed access to values returned by a reader."],
    ["SQLiteMaps", "Maps database values to application models."],
    ["Providers", "Execute application-level data operations."]
  ];

  const reviewAreas = [
    ["Thread safety", "ConnectionFactory.cs:11, 27–33 — a static singleton returns the same connection without visible locking. CaseProvider.cs:43–45 starts transactions on that shared connection.", "Risk identified"],
    ["Connection lifecycle", "..."]
  ];

  const recommendations = [...];

  return (
    <div>
      <article className="panel sqlite-review-intro">
        <p className="eyebrow">01 · GENERAL</p>
        <h3>Architecture Review</h3>
        <p>This review covers the overall architecture of the Deshifrator project.</p>
      </article>

      <article className="panel sqlite-review-audit">
        <p className="eyebrow">02 · CODE REVIEW</p>
        <h3>Code Audit Checklist</h3>
        <div className="sqlite-table-wrap">
          <table className="sqlite-table">
            <thead>
              <tr><th>Area</th><th>Source evidence</th><th>Review status</th></tr>
            </thead>
            <tbody>{reviewAreas.map(([name, evidence, status]) => (
              <tr key={name}><th scope="row">{name}</th><td>{evidence}</td><td><span className="sqlite-review-pending">{status}</span></td></tr>
            ))}</tbody>
          </table>
        </div>
        <p className="sqlite-muted">Findings are limited to the inspected DbStationary C# source excerpts. They do not imply complete runtime, concurrency or test-suite verification.</p>
      </article>

      <article className="panel sqlite-recommendations">
        <p className="eyebrow">04 · FOLLOW-UP</p>
        <h3>Recommended Verification Steps</h3>
        <ol>{recommendations.map(item => <li key={item}>{item}</li>)}</ol>
      </article>

      <div className="sqlite-review-links">
        <a href="https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/deshifrator/data-access-review.html" target="_blank" rel="noreferrer">Open standalone review ↗</a>
        <a href="https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/descriptor/index.html" target="_blank" rel="noreferrer">Deshifrator · English workstation documentation ↗</a>
      </div>
      <p className="sqlite-disclaimer">
        This review covers the SQLite data-access layer in the Deshifrator documentation track.
        It is separate from PPO Territory's Oracle database and from the Global11 demo data platform.
        Findings are based on selected source excerpts; the original application source is not published here.
      </p>
    </section>
  );
}

export default function App() {
  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('updated');

  async function loadDashboard(signal) {
    setLoading(true);
    setError('');
    try {
      const [userData, repoData, eventData] = await Promise.all([
        githubGet(`/users/${USERNAME}`, signal),
        githubGet(`/users/${USERNAME}/repos?sort=updated&per_page=100&type=owner`, signal),
        githubGet(`/users/${USERNAME}/events/public?per_page=30`, signal),
      ]);
      setProfile(userData);
      setRepositories(repoData.filter((repo) => !HIDDEN_REPOSITORIES.has(repo.name) && !FEATURED_REPOSITORIES.has(repo.name)));
      setEvents(eventData);
    } catch (err) {
      if (err.name !== 'AbortError') setError(err.message || 'Unable to load GitHub data.');
    } finally {
      if (!signal.aborted) setLoading(false);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    loadDashboard(controller.signal);
    return () => controller.abort();
  }, []);

  const totalStars = repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = repositories.reduce((sum, repo) => sum + repo.forks_count, 0);

  const languages = useMemo(() => {
    const counts = {};
    repositories.forEach((repo) => {
      if (repo.language) counts[repo.language] = (counts[repo.language] || 0) + 1;
    });
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    return Object.entries(counts).map(([name, percent]) => ({ name, percent: Math.round(percent / total * 100) }));
  }, [repositories]);

  const visibleRepositories = repositories.filter((repo) => !FEATURED_REPOSITORIES.has(repo.name));

  return (
    <div>
      <header className="header">
        <nav>
          <input aria-label="Search repositories" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search repositories…" />
          <select aria-label="Sort repositories" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="updated">Recently updated</option>
            <option value="stars">Most stars</option>
            <option value="name">Name A–Z</option>
          </select>
        </nav>
      </header>

      <main>
        <section className="dashboard">
          <div className="featured-section">
            <h2>Featured Projects</h2>
            <div className="repo-list">
              {FEATURED_REPOSITORIES.intersection(new Set(repositories.map(r => r.name))).map((repo) => {
                return null; // Simplified - actual rendering uses predefined cards
              })}
            </div>
          </div>

          <section className="repositories-panel">
            <div className="panel-heading">
              <div><p className="eyebrow">FULL ACCOUNT INDEX</p><h2>Additional repositories <span>{repositories.length}</span></h2></div>
            </div>
            <p className="panel-note">Additional public repositories only. Featured projects, legacy copies and unfinished work are excluded from this index.</p>
            <div className="repo-controls">
              <input aria-label="Search repositories" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search repositories…" />
              <select aria-label="Sort repositories" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="updated">Recently updated</option>
                <option value="stars">Most stars</option>
                <option value="name">Name A–Z</option>
              </select>
            </div>
            <div className="repo-list">
              {visibleRepositories.map((repo) => (
                <article className="repo-item" key={repo.id}>
                  <div className="repo-main">
                    <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name} ↗</a>
                    <p>{repo.description || 'No description provided.'}</p>
                    <div className="repo-meta">
                      {repo.language && <span className="language-dot">{repo.language}</span>}
                      <span>★ {formatNumber(repo.stargazers_count)}</span>
                      <span>⑂ {formatNumber(repo.forks_count)}</span>
                      <span>Updated {timeAgo(repo.updated_at)}</span>
                      {repo.homepage && <a className="repo-website" href={websiteUrl(repo.homepage)} target="_blank" rel="noreferrer">Live site ↗</a>}
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
              <div className="panel-heading"><div><p className="eyebrow">TECH STACK</p><h2>Languages</h2></div></div>
              <p className="panel-note">Primary language by repository count</p>
              {languages.length ? languages.map((language) => (
                <div className="language-row" key={language.name}>
                  <div><span>{language.name}</span><strong>{language.percent}%</strong></div>
                  <div className="bar-track"><span style={{ width: `${language.percent}%` }} /></div>
                </div>
              )) : <p className="empty-state">No language data available.</p>}
            </section>

            <section className="panel activity-panel">
              <div className="panel-heading"><div><p className="eyebrow">WHAT'S HAPPENING</p><h2>Recent activity</h2></div></div>
              <div className="activity-list">
                {events.slice(0, 8).map((event) => (
                  <div className="activity-item" key={event.id}>
                    <span className="activity-marker" />
                    <div><p>{eventDescription(event)}</p><time>{timeAgo(event.created_at)}</time></div>
                  </div>
                ))
                {!events.length && <p className="empty-state">No recent public events found.</p>}
              </div>
              <a className="all-activity" href={`https://github.com/${USERNAME}?tab=activity`} target="_blank" rel="noreferrer">View full activity ↗</a>
            </section>
          </aside>
        </section>
      </main>

      <footer className="footer">
        <span>Data provided by the GitHub REST API</span>
        <span>Public data · Refresh to update</span>
      </footer>
    </div>
  );
}