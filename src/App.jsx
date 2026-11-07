import { useEffect, useMemo, useState } from 'react';

const USERNAME = 'ekatmoz88-alt';
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
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
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
    ["Connection lifecycle", "ConnectionFactory.cs:18–24 — the connection is created and opened in the factory constructor. GetConnection() reuses it; no close/dispose path is implemented in this class.", "Partially verified"],
    ["Resource disposal", "SQLiteCommandEx.cs:99–110, 130–141, 162–173, 235–239, 261–265 — several paths use using. Parameter-array overloads at 197–215, 248–252 and 275–279 do not dispose the command. The factory retains its connection.", "Inconsistent disposal"],
    ["DataReader lifecycle", "SQLiteCommandEx.cs:220–227 — AsDataReader() returns a reader from inside a using scope, so it is disposed before the caller can consume it.", "Defect confirmed"],
    ["Parameter handling", "SQLiteCommandEx_Params.cs:10–22, 25–36 — named parameters are created and added. SQLiteCommandEx.cs:299–302 maps null to DBNull.Value. ResetParams relies on Debug.Assert for count matching (286–293).", "Partially verified"],
    ["Type conversion", "SQLiteDataReaderEx.cs:28–30, 33–102, 104–121 — direct generic cast, typed getters and DBNull checks. SQLiteMaps.cs:24–91 uses these methods in model mapping; conversion behavior is not comprehensively tested.", "Partially verified"],
    ["GUID processing", "CaseProvider.cs:54 stores CaseGUID as a string; SQLiteMaps.cs:36–38 reads it with Guid.Parse. SQLiteCommandEx_Params.cs:140–155 defines GUID parameter helpers. No round-trip test evidence was supplied.", "Partially verified"],
    ["Error handling", "CaseProvider.cs:308–312 catches, logs and rethrows exceptions in LoadCases(). A consistent logging policy is not visible across the inspected providers.", "Partially verified"]
  ];

  const recommendations = [
    "Trace connection ownership from creation through disposal.",
    "Inspect concurrent execution paths and define thread-safety guarantees.",
    "Verify reader, command and connection disposal on success and failure paths.",
    "Test parameter binding, argument-count mismatches, nulls and unexpected values.",
    "Add type-conversion and GUID round-trip tests.",
    "Review exception handling and ensure diagnostic logs do not expose sensitive data."
  ];

  return (
    <section className="sqlite-review" id="sqlite-review">
      <div className="sqlite-review-heading">
        <p className="eyebrow">DESHIFRATOR · SOURCE-BASED COMPONENT REVIEW</p>
        <h2>C# / SQLite Data Access Layer</h2>
        <p>
          Source-based review of the DbStationary SQLite data-access components
          documented in the Deshifrator application-suite track. This is a
          component-level view, not a deployment topology.
        </p>
        <div className="featured-project-tags">
          <span>C#</span><span>SQLite</span><span>DbStationary</span>
          <span>Data Access Layer</span><span>Source Review</span>
        </div>
        <p className="sqlite-muted">
          <a href="https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/architecture/architecture.html" target="_blank" rel="noreferrer">Interactive EN/RU architecture catalogue ↗</a>
          {" · "}
          <a href="https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/component-maps.md" target="_blank" rel="noreferrer">Canonical component map ↗</a>
        </p>
      </div>

      <article className="panel sqlite-diagram-card" id="sqlite-component-architecture">
        <div className="panel-heading">
          <div><p className="eyebrow">01 · CANONICAL COMPONENT VIEW</p><h3>SQLite Data Access Architecture</h3></div>
        </div>
        <div className="sqlite-svg-wrap">
          <svg viewBox="0 0 1000 390" role="img" aria-label="Application code uses SQLiteCommandEx and parameter helpers. The command obtains a connection through ConnectionFactory and uses SQLiteDataReaderEx, SQLiteMaps and application models for result mapping.">
            <defs>
              <marker id="sqlite-canonical-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
                <path d="M0 0 L7 3 L0 6" fill="none" stroke="#397da9" strokeWidth="1.5"/>
              </marker>
            </defs>
            <g fontFamily="DM Sans, sans-serif" textAnchor="middle">
              <rect x="20" y="140" width="150" height="70" rx="8" fill="#eaf3fb" stroke="#8db7d7"/>
              <text x="95" y="170" fontSize="15" fontWeight="700" fill="#203b55">Application</text>
              <text x="95" y="190" fontSize="11" fill="#52677d">Code</text>

              <rect x="230" y="55" width="190" height="70" rx="8" fill="#f2f6fa" stroke="#9aabba"/>
              <text x="325" y="84" fontSize="14" fontWeight="700" fill="#203b55">SQLiteCommandEx&lt;T&gt;</text>
              <text x="325" y="105" fontSize="11" fill="#52677d">Command execution</text>

              <rect x="230" y="225" width="190" height="70" rx="8" fill="#f2f6fa" stroke="#9aabba"/>
              <text x="325" y="254" fontSize="13" fontWeight="700" fill="#203b55">SQLiteCommandEx_Params</text>
              <text x="325" y="275" fontSize="11" fill="#52677d">Typed parameter helpers</text>

              <rect x="480" y="55" width="180" height="70" rx="8" fill="#f2f6fa" stroke="#9aabba"/>
              <text x="570" y="84" fontSize="14" fontWeight="700" fill="#203b55">ConnectionFactory</text>
              <text x="570" y="105" fontSize="11" fill="#52677d">Shared connection</text>

              <rect x="770" y="55" width="190" height="70" rx="8" fill="#edf6f1" stroke="#91bda6"/>
              <ellipse cx="865" cy="72" rx="45" ry="10" fill="#d8eee2" stroke="#72a98b"/>
              <path d="M820 72 V107 C820 120 910 120 910 107 V72" fill="#edf6f1" stroke="#72a98b"/>
              <ellipse cx="865" cy="107" rx="45" ry="10" fill="#d8eee2" stroke="#72a98b"/>
              <text x="865" y="94" fontSize="14" fontWeight="700" fill="#285b42">MainDB.db3</text>

              <rect x="480" y="205" width="180" height="70" rx="8" fill="#f2f6fa" stroke="#9aabba"/>
              <text x="570" y="234" fontSize="14" fontWeight="700" fill="#203b55">SQLiteDataReaderEx</text>
              <text x="570" y="255" fontSize="11" fill="#52677d">Typed reader access</text>

              <rect x="710" y="205" width="130" height="70" rx="8" fill="#f2f6fa" stroke="#9aabba"/>
              <text x="775" y="234" fontSize="14" fontWeight="700" fill="#203b55">SQLiteMaps</text>
              <text x="775" y="255" fontSize="11" fill="#52677d">Row mapping</text>

              <rect x="860" y="290" width="120" height="65" rx="8" fill="#eaf3fb" stroke="#8db7d7"/>
              <text x="920" y="316" fontSize="12" fontWeight="700" fill="#203b55">Application</text>
              <text x="920" y="336" fontSize="12" fontWeight="700" fill="#203b55">Models</text>
            </g>
            <g fill="none" stroke="#397da9" strokeWidth="2" markerEnd="url(#sqlite-canonical-arrow)">
              <path d="M170 155 L225 100"/>
              <path d="M170 195 L225 260"/>
              <path d="M420 90 H475"/>
              <path d="M660 90 H765"/>
              <path d="M325 125 V170 H570 V200"/>
              <path d="M660 240 H705"/>
              <path d="M840 240 L855 310"/>
            </g>
          </svg>
        </div>
        <p className="sqlite-diagram-note">
          Logical dependency view mirrored from the canonical component map. It is not
          a complete runtime call graph; connection lifetime and reader disposal are
          assessed separately in the source review below.
        </p>
      </article>

      <div className="sqlite-review-columns">
        <article className="panel">
          <p className="eyebrow">02 · COMPONENT RESPONSIBILITIES</p>
          <h3>Component Responsibilities</h3>
          <div className="sqlite-table-wrap">
            <table className="sqlite-table">
              <thead><tr><th>Component</th><th>Responsibility</th></tr></thead>
              <tbody>{components.map(([name, description]) => (
                <tr key={name}><th scope="row">{name}</th><td>{description}</td></tr>
              ))}</tbody>
            </table>
          </div>
        </article>

        <article className="panel sqlite-review-audit">
          <p className="eyebrow">03 · SOURCE REVIEW</p>
          <h3>Architecture Verification Checklist</h3>
          <p className="sqlite-muted">
            Findings are limited to the inspected DbStationary C# source excerpts.
            They do not imply complete runtime, concurrency or test-suite verification.
          </p>
          <div className="sqlite-table-wrap">
            <table className="sqlite-table">
              <thead><tr><th>Area</th><th>Source evidence</th><th>Review status</th></tr></thead>
              <tbody>{reviewAreas.map(([name, evidence, status]) => (
                <tr key={name}><th scope="row">{name}</th><td>{evidence}</td><td><span className="sqlite-review-pending">{status}</span></td></tr>
              ))}</tbody>
            </table>
          </div>
        </article>
      </div>

      <article className="panel sqlite-recommendations">
        <p className="eyebrow">04 · FOLLOW-UP</p>
        <h3>Recommended Verification Steps</h3>
        <ol>{recommendations.map(item => <li key={item}>{item}</li>)}</ol>
      </article>

      <div className="sqlite-review-links">
        <a href="https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/docs/sqlite-data-access-review.html" target="_blank" rel="noreferrer">Open standalone review ↗</a>
        <a href="https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/component-maps.md" target="_blank" rel="noreferrer">Open canonical component maps ↗</a>
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
      setRepositories(repoData);
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
    const total = Object.values(counts).reduce((sum, count) => sum + count, 0) || 1;
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count, percent: Math.round((count / total) * 100) }))
      .sort((a, b) => b.count - a.count);
  }, [repositories]);

  const visibleRepos = useMemo(() => {
    const filtered = repositories.filter((repo) =>
      `${repo.name} ${repo.description || ''} ${repo.language || ''}`.toLowerCase().includes(query.toLowerCase())
    );
    return [...filtered].sort((a, b) => {
      if (sort === 'stars') return b.stargazers_count - a.stargazers_count;
      if (sort === 'name') return a.name.localeCompare(b.name);
      return new Date(b.updated_at) - new Date(a.updated_at);
    });
  }, [repositories, query, sort]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="https://github.com" target="_blank" rel="noreferrer">
          <span className="brand-mark">⌘</span> GitHub Insights
        </a>
        <div className="topbar-right">
          <span className="live-dot" /> Live public data
          <button className="refresh-button" onClick={() => {
            const controller = new AbortController();
            loadDashboard(controller.signal);
          }}>↻ Refresh</button>
        </div>
      </header>

      <main className="dashboard">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">TECHNICAL WRITING · API DOCUMENTATION · DOCS-AS-CODE</p>
            <h1>Technical Documentation Portfolio</h1>
            <p className="hero-subtitle">Selected enterprise documentation projects, API references, architecture reviews and public GitHub work.</p>
          </div>
          <a className="github-link" href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer">
            View GitHub profile ↗
          </a>
        </section>

        {error && <div className="error-banner" role="alert">{error}</div>}
        {loading && !profile && <div className="loading-panel"><span className="spinner" /> Loading GitHub profile…</div>}

        {profile && (
          <>
            <section className="profile-panel">
              <img className="avatar" src={profile.avatar_url} alt={`${profile.login} avatar`} />
              <div className="profile-details">
                <h2>{profile.name || profile.login}</h2>
                <a href={profile.html_url} target="_blank" rel="noreferrer">@{profile.login}</a>
                <p>{profile.bio || 'No public bio has been added yet.'}</p>
                <div className="profile-meta">
                  {profile.company && <span>▣ {profile.company}</span>}
                  {profile.location && <span>⌖ {profile.location}</span>}
                  {profile.blog && <a href={websiteUrl(profile.blog)} target="_blank" rel="noreferrer">↗ Website</a>}
                  <span>Joined {new Date(profile.created_at).toLocaleDateString('en', { month: 'short', year: 'numeric' })}</span>
                </div>
              </div>
              <div className="follow-stats">
                <strong>{formatNumber(profile.followers)}</strong><span>Followers</span>
                <strong>{formatNumber(profile.following)}</strong><span>Following</span>
              </div>
            </section>

            <section className="featured-projects" aria-label="Featured portfolio projects">
              <div className="featured-projects-heading">
                <p className="eyebrow">SELECTED WORK</p>
                <h2>Featured technical documentation projects</h2>
                <p>6 curated technical writing case studies covering API documentation, enterprise systems, desktop software, database architecture and source-based analysis. The live repository index is a separate list of all public repositories. Each case study links to its public documentation repository or published reference.</p>
                <p className="panel-note"><a href="https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/portfolio-audit.html" target="_blank" rel="noreferrer">Bilingual repository registry &amp; audit · snapshot 07 Nov 2026 · 24 public / 2 private / Двуязычный реестр и аудит · срез 07.11.2026 · 24 публичных / 2 приватных ↗</a> · 6 curated case-study cards; the live index below lists all public repositories returned by GitHub.</p>
              </div>
              <div className="featured-project-grid">
                <article className="featured-project panel">
                  <div className="featured-project-copy">
                    <p className="eyebrow">REST API · OPENAPI 3.1</p>
                    <h3>Orders API Documentation</h3>
                    <p>Docs-as-Code portfolio example for a REST API, with OpenAPI 3.1 specification, endpoint descriptions, request and response schemas, and error responses.</p>
                    <div className="featured-project-tags">
                      <span>REST API</span>
                      <span>OpenAPI 3.1</span>
                      <span>API Reference</span>
                    </div>
                  </div>
                  <a className="featured-project-link" href="https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/openapi/" target="_blank" rel="noreferrer">Published documentation ↗</a>
                  <a className="featured-project-link" href="https://github.com/ekatmoz88-alt/api-docs-portfolio-v2" target="_blank" rel="noreferrer">GitHub repository ↗</a>
                </article>

                <article className="featured-project panel">
                  <div className="featured-project-copy">
                    <p className="eyebrow">ENTERPRISE SYSTEMS · ARCHITECTURE DOCUMENTATION</p>
                    <h3>Enterprise Systems Architecture — Territory, Descriptor, Deshifrator &amp; UMMS</h3>
                    <ul className="featured-project-bullets">
                      <li>Maintained four separate system boundaries: PPO Territory, ARM Descriptor, Deshifrator, and UMMS. No shared runtime or integration is inferred without evidence.</li>
                      <li>Aligned 10 primary Mermaid diagrams across the system landscape, PPO Territory functional domains and Oracle data model, deployment and external exchanges, ARM Descriptor workstation, Deshifrator components and SQLite data access, and the UMMS SOAP boundary; the companion component maps add 7 detailed diagrams.</li>
                      <li>Separated documented facts, logical reconstructions and unverified details; the catalogue records evidence gaps instead of inventing modules, topology or interface contracts.</li>
                    </ul>
                    <p className="project-note">The 401-table Oracle inventory and seven exchange directions are source-reported. The conceptual ER model, physical schema, live endpoints and site-specific deployment remain subject to verification; conceptual diagrams are not as-built production configurations.</p>
                    <div className="featured-project-tags">
                      <span>Enterprise Architecture</span>
                      <span>Data Architecture</span>
                      <span>Oracle / SQLite</span>
                      <span>SOAP / XML / API</span>
                      <span>Evidence &amp; Governance</span>
                      <span>Mermaid / Docs-as-Code</span>
                    </div>
                  </div>
                  <div className="featured-project-actions">
                    <a className="featured-project-link" href="https://ekatmoz88-alt.github.io/territory-descriptor-unified/" target="_blank" rel="noreferrer">Unified documentation hub ↗</a>
                    <a className="featured-project-secondary" href="https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/architecture/architecture.html" target="_blank" rel="noreferrer">Interactive architecture catalogue · 10 diagrams ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/README.md" target="_blank" rel="noreferrer">Canonical Mermaid source (Markdown) ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/system-context-and-scope.en.md" target="_blank" rel="noreferrer">System context and scope · English ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/system-context-and-scope.ru.md" target="_blank" rel="noreferrer">Контекст системы и границы · Русский ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/data-exchange-and-administration.en.md" target="_blank" rel="noreferrer">Data exchange and administration · English ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/data-exchange-and-administration.ru.md" target="_blank" rel="noreferrer">Обмен данными и администрирование · Русский ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/access-control.en.md" target="_blank" rel="noreferrer">Access control · English ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/access-control.ru.md" target="_blank" rel="noreferrer">Права доступа · Русский ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/component-maps.md" target="_blank" rel="noreferrer">Detailed component maps ↗</a>
                    <p className="featured-project-secondary"><strong>Original diagrams · WMF source files</strong></p>
                    <a className="featured-project-secondary" href="/original-diagrams/territory/%D0%B4%D0%BB%D0%BE.wmf" download>Original diagram: дло.wmf ↓</a>
                    <a className="featured-project-secondary" href="/original-diagrams/territory/%D0%B4%D0%BE%D1%81%D1%8C%D0%B5.wmf" download>Original diagram: досье.wmf ↓</a>
                    <a className="featured-project-secondary" href="/original-diagrams/territory/%D1%80%D0%B0.wmf" download>Original diagram: ра.wmf ↓</a>
                    <a className="featured-project-secondary" href="https://ekatmoz88-alt.github.io/ppo-territory-archive/" target="_blank" rel="noreferrer">PPO Territory technical archive ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/reference-systems/README.md" target="_blank" rel="noreferrer">Supplementary source systems ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/territory-descriptor-unified" target="_blank" rel="noreferrer">Unified GitHub repository ↗</a>
                  </div>
                </article>







                <article className="featured-project panel">
                  <div className="featured-project-copy">
                    <p className="eyebrow">C++ · UI NAVIGATION COMPONENT</p>
                    <h3>Cobalt UI Navigation</h3>
                    <p>Source-based technical documentation for a C++ UI navigation component, covering architecture, native interface abstraction, NavItem lifecycle, focus management, callbacks, queued updates, and compatibility fallback behavior.</p>
                    <div className="featured-project-tags">
                      <span>C++</span>
                      <span>UI Architecture</span>
                      <span>API Reference</span>
                      <span>Source-based Documentation</span>
                    </div>
                  </div>
                  <div className="featured-project-actions">
                    <a className="featured-project-link" href="https://ekatmoz88-alt.github.io/cobalt-ui-navigation-docs/" target="_blank" rel="noreferrer">Published documentation ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/cobalt-ui-navigation-docs" target="_blank" rel="noreferrer">GitHub repository ↗</a>
                  </div>
                </article>

                <article className="featured-project panel">
                  <div className="featured-project-copy">
                    <p className="eyebrow">FINTECH · OPERATIONAL WORKFLOWS &amp; SECURITY</p>
                    <h3>Fintech Documentation Demo</h3>
                    <p>Documentation for a fictional crypto-onramp operator console, covering KYC and onboarding journeys, operator workflows, PII classification, and audit logging.</p>
                    <div className="featured-project-tags">
                      <span>Operational Workflows</span>
                      <span>Data Classification</span>
                      <span>Audit Logging</span>
                      <span>Demo Case</span>
                    </div>
                  </div>
                  <div className="featured-project-actions">
                    <a className="featured-project-link" href="https://ekatmoz88-alt.github.io/fintech-docs-demo/" target="_blank" rel="noreferrer">Published documentation ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/fintech-docs-demo" target="_blank" rel="noreferrer">GitHub repository ↗</a>
                  </div>
                </article>

                <article className="featured-project panel">
                  <div className="featured-project-copy">
                    <p className="eyebrow">DOCS-AS-CODE · CI QUALITY AUTOMATION</p>
                    <h3>Technical Writing Workflows</h3>
                    <p>A documentation pipeline demonstrating automated OpenAPI validation with Spectral, Markdown linting, and link checking with Lychee in GitHub Actions.</p>
                    <div className="featured-project-tags">
                      <span>Spectral</span>
                      <span>markdownlint</span>
                      <span>Lychee</span>
                      <span>GitHub Actions</span>
                    </div>
                  </div>
                  <div className="featured-project-actions">
                    <a className="featured-project-link" href="https://ekatmoz88-alt.github.io/technical-writing-workflows/" target="_blank" rel="noreferrer">Published documentation ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/technical-writing-workflows" target="_blank" rel="noreferrer">GitHub repository ↗</a>
                  </div>
                </article>

                <article className="featured-project panel">
                  <div className="featured-project-copy">
                    <p className="eyebrow">ENGINEERING DOCUMENTATION · SIGNAL PROCESSING HARDWARE</p>
                    <h3>ADP201P4 Signal Processing Module</h3>
                    <p>Source-based technical documentation for a PCI signal-processing module built around four ADSP-TS201S processors, including system architecture, ADM interface, and external connectors.</p>
                    <div className="featured-project-tags">
                      <span>Hardware Architecture</span>
                      <span>DSP</span>
                      <span>PCI</span>
                      <span>Technical Manual</span>
                    </div>
                  </div>
                  <div className="featured-project-actions">
                    <a className="featured-project-link" href="https://ekatmoz88-alt.github.io/adp201p4-hardware-spec/" target="_blank" rel="noreferrer">Published documentation ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/adp201p4-hardware-spec" target="_blank" rel="noreferrer">GitHub repository ↗</a>
                  </div>
                </article>
              </div>
            </section>

            <SqliteArchitectureReview />

            <section className="stats-grid" aria-label="GitHub statistics">
              <article className="stat-card"><span className="stat-icon">▤</span><span className="stat-label">Public repositories</span><strong>{formatNumber(profile.public_repos)}</strong><small>{repositories.length === profile.public_repos ? 'Matches live repository index' : `Index loaded ${repositories.length} of ${profile.public_repos}`}</small></article>
              <article className="stat-card"><span className="stat-icon">★</span><span className="stat-label">Total stars</span><strong>{formatNumber(totalStars)}</strong><small>Across loaded repositories</small></article>
              <article className="stat-card"><span className="stat-icon">⑂</span><span className="stat-label">Total forks</span><strong>{formatNumber(totalForks)}</strong><small>Across loaded repositories</small></article>
              <article className="stat-card"><span className="stat-icon">◷</span><span className="stat-label">Public events</span><strong>{formatNumber(events.length)}</strong><small>Recent events returned by GitHub</small></article>
            </section>

            <section className="content-grid">
              <div className="panel repositories-panel">
                <div className="panel-heading">
                  <div><p className="eyebrow">FULL ACCOUNT INDEX</p><h2>All public repositories <span>{repositories.length}</span></h2></div>
                </div>
                <p className="panel-note">Live index of the account repositories. Curated portfolio case studies are presented separately above.</p>
                <div className="repo-controls">
                  <input aria-label="Search repositories" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search repositories…" />
                  <select aria-label="Sort repositories" value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="updated">Recently updated</option>
                    <option value="stars">Most stars</option>
                    <option value="name">Name A–Z</option>
                  </select>
                </div>
                <div className="repo-list">
                  {visibleRepos.map((repo) => (
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
                      <span className={repo.private ? 'visibility private' : 'visibility'}>{repo.private ? 'Private' : 'Public'}</span>
                    </article>
                  ))}
                  {!visibleRepos.length && <p className="empty-state">No repositories match that search.</p>}
                </div>
              </div>

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
                    ))}
                    {!events.length && <p className="empty-state">No recent public events found.</p>}
                  </div>
                  <a className="all-activity" href={`https://github.com/${USERNAME}?tab=activity`} target="_blank" rel="noreferrer">View full activity ↗</a>
                </section>
              </aside>
            </section>
          </>
        )}
        <footer className="footer">
          <span>Data provided by the GitHub REST API</span>
          <span>Public data · Refresh to update</span>
        </footer>
      </main>
    </div>
  );
}
