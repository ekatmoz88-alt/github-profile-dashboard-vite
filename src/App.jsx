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
    ["ConnectionFactory", "Creates, opens and provides SQLite connections."],
    ["SQLiteCommandEx<T>", "Wraps command execution and result handling."],
    ["SQLiteCommandEx_Params", "Creates and binds SQLite parameters, including GUID helpers."],
    ["SQLiteDataReaderEx", "Provides typed access to values returned by a reader."],
    ["SQLiteMaps", "Maps database values to application models."],
    ["Providers", "Execute application-level data operations."]
  ];

  const reviewAreas = [
    ["Thread safety", "Check concurrent access to shared connections and commands."],
    ["Connection lifecycle", "Verify connection creation, reuse, ownership and closure."],
    ["Resource disposal", "Check deterministic disposal of connections, commands and readers."],
    ["DataReader lifecycle", "Verify reader lifetime and behavior while a connection is in use."],
    ["Parameter handling", "Review parameter binding, types and protection against unsafe SQL construction."],
    ["Type conversion", "Check null handling, SQLite type affinity and conversion boundaries."],
    ["GUID processing", "Verify GUID serialization, storage format and round-trip conversion."],
    ["Error handling", "Review exception propagation, diagnostics and logging."]
  ];

  const recommendations = [
    "Trace connection ownership from creation through disposal.",
    "Inspect concurrent execution paths and define thread-safety guarantees.",
    "Verify that readers, commands and connections are disposed on success and failure paths.",
    "Review parameter binding and test edge cases for null and unexpected values.",
    "Add tests for type conversion and GUID round-trip behavior.",
    "Check exception handling and ensure diagnostic logs do not expose sensitive data."
  ];

  return (
    <section className="sqlite-review" id="sqlite-review">
      <div className="sqlite-review-heading">
        <p className="eyebrow">SOURCE-BASED ARCHITECTURE REVIEW</p>
        <h2>C# / SQLite Data Access Layer</h2>
        <p>
          A separate technical case examining the responsibilities, data flow
          and review areas of a C# data access layer using SQLite.
        </p>
        <div className="featured-project-tags">
          <span>C#</span><span>SQLite</span><span>Data Access Layer</span>
          <span>Architecture Review</span>
        </div>
      </div>

      <div className="sqlite-diagram-grid">
        <article className="panel sqlite-diagram-card">
          <div className="panel-heading">
            <div><p className="eyebrow">01 · SYSTEM CONTEXT</p><h3>Architecture Overview</h3></div>
          </div>
          <div className="sqlite-svg-wrap">
            <svg viewBox="0 0 760 250" role="img" aria-label="Application interacts with the data access layer, which communicates with SQLite">
              <defs>
                <marker id="sqlite-arrow-context" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0 0 L6 3 L0 6" fill="none" stroke="#397da9" strokeWidth="1.3"/>
                </marker>
              </defs>
              <rect x="18" y="70" width="190" height="100" rx="10" fill="#eaf3fb" stroke="#8db7d7"/>
              <text x="113" y="112" textAnchor="middle" fontSize="17" fontWeight="700" fill="#203b55">Application</text>
              <text x="113" y="137" textAnchor="middle" fontSize="12" fill="#52677d">Application code</text>
              <path d="M208 120 H285" stroke="#397da9" strokeWidth="2" markerEnd="url(#sqlite-arrow-context)"/>
              <rect x="292" y="45" width="190" height="150" rx="10" fill="#f2f6fa" stroke="#9aabba"/>
              <text x="387" y="83" textAnchor="middle" fontSize="16" fontWeight="700" fill="#203b55">Data Access Layer</text>
              <text x="387" y="111" textAnchor="middle" fontSize="12" fill="#52677d">ConnectionFactory</text>
              <text x="387" y="132" textAnchor="middle" fontSize="12" fill="#52677d">SQLiteCommandEx</text>
              <text x="387" y="153" textAnchor="middle" fontSize="12" fill="#52677d">Reader · Mapping</text>
              <path d="M482 120 H559" stroke="#397da9" strokeWidth="2" markerEnd="url(#sqlite-arrow-context)"/>
              <rect x="566" y="70" width="175" height="100" rx="10" fill="#edf6f1" stroke="#91bda6"/>
              <ellipse cx="653" cy="94" rx="48" ry="12" fill="#d8eee2" stroke="#72a98b"/>
              <path d="M605 94 V145 C605 160 701 160 701 145 V94" fill="#edf6f1" stroke="#72a98b"/>
              <ellipse cx="653" cy="145" rx="48" ry="12" fill="#d8eee2" stroke="#72a98b"/>
              <text x="653" y="121" textAnchor="middle" fontSize="15" fontWeight="700" fill="#285b42">SQLite</text>
              <text x="380" y="225" textAnchor="middle" fontSize="12" fill="#718096">Logical context — exact deployment boundaries are not asserted</text>
            </svg>
          </div>
          <p className="sqlite-diagram-note">The application uses the data access layer to communicate with the SQLite database.</p>
        </article>

        <article className="panel sqlite-diagram-card">
          <div className="panel-heading">
            <div><p className="eyebrow">02 · DATA FLOW</p><h3>Request and Result Flow</h3></div>
          </div>
          <div className="sqlite-svg-wrap">
            <svg viewBox="0 0 760 310" role="img" aria-label="Data access request and result flow through the SQLite components">
              <defs>
                <marker id="sqlite-arrow-flow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0 0 L6 3 L0 6" fill="none" stroke="#397da9" strokeWidth="1.3"/>
                </marker>
              </defs>
              <g fontSize="13" textAnchor="middle" fill="#203b55">
                <rect x="15" y="18" width="210" height="48" rx="7" fill="#eaf3fb" stroke="#8db7d7"/>
                <text x="120" y="47" fontWeight="700">Application Code</text>
                <path d="M120 66 V91" stroke="#397da9" strokeWidth="2" markerEnd="url(#sqlite-arrow-flow)"/>
                <rect x="15" y="96" width="210" height="48" rx="7" fill="#f2f6fa" stroke="#9aabba"/>
                <text x="120" y="125" fontWeight="700">ConnectionFactory</text>
                <path d="M120 144 V169" stroke="#397da9" strokeWidth="2" markerEnd="url(#sqlite-arrow-flow)"/>
                <rect x="15" y="174" width="210" height="48" rx="7" fill="#f2f6fa" stroke="#9aabba"/>
                <text x="120" y="203" fontWeight="700">SQLiteCommandEx&lt;T&gt;</text>
                <path d="M225 198 H290" stroke="#397da9" strokeWidth="2" markerEnd="url(#sqlite-arrow-flow)"/>
                <rect x="296" y="174" width="165" height="48" rx="7" fill="#edf6f1" stroke="#91bda6"/>
                <text x="378" y="203" fontWeight="700">SQLite Database</text>
                <path d="M378 174 V144" stroke="#397da9" strokeWidth="2" markerEnd="url(#sqlite-arrow-flow)"/>
                <rect x="296" y="96" width="165" height="48" rx="7" fill="#f2f6fa" stroke="#9aabba"/>
                <text x="378" y="125" fontWeight="700">SQLiteDataReaderEx</text>
                <path d="M461 120 H520" stroke="#397da9" strokeWidth="2" markerEnd="url(#sqlite-arrow-flow)"/>
                <rect x="526" y="96" width="215" height="48" rx="7" fill="#f2f6fa" stroke="#9aabba"/>
                <text x="633" y="125" fontWeight="700">SQLiteMaps</text>
                <path d="M633 144 V169" stroke="#397da9" strokeWidth="2" markerEnd="url(#sqlite-arrow-flow)"/>
                <rect x="526" y="174" width="215" height="48" rx="7" fill="#eaf3fb" stroke="#8db7d7"/>
                <text x="633" y="203" fontWeight="700">Application Models</text>
                <path d="M741 198 H750 V285 H8 V42 H15" stroke="#397da9" strokeWidth="1.6" strokeDasharray="5 4" markerEnd="url(#sqlite-arrow-flow)" fill="none"/>
                <text x="375" y="270" fontSize="11" fill="#718096">Mapped result returned to Application Code</text>
              </g>
            </svg>
          </div>
          <p className="sqlite-diagram-note">Conceptual flow based on the component names and responsibilities described in the review.</p>
        </article>
      </div>


      <div className="sqlite-diagram-grid sqlite-additional-diagrams">

        <article className="panel sqlite-diagram-card" id="sqlite-component-architecture">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">03 · COMPONENT ARCHITECTURE</p>
              <h3>Data Access Layer Components</h3>
            </div>
          </div>
          <div className="sqlite-svg-wrap">
            <svg viewBox="0 0 760 300" role="img"
              aria-label="Conceptual component architecture of the C Sharp SQLite data access layer">
              <defs>
                <marker id="sqlite-arrow-components" markerWidth="8" markerHeight="8"
                  refX="6" refY="3" orient="auto">
                  <path d="M0 0 L6 3 L0 6" fill="none"
                    stroke="#397da9" strokeWidth="1.3"/>
                </marker>
              </defs>

              <rect x="18" y="24" width="724" height="250" rx="12"
                fill="#f8fafc" stroke="#b9c8d6" strokeDasharray="5 4"/>
              <text x="38" y="49" fontSize="12" fontWeight="700"
                fill="#52677d">DATA ACCESS LAYER</text>

              <g textAnchor="middle" fill="#203b55">
                <rect x="42" y="85" width="190" height="58" rx="8"
                  fill="#f2f6fa" stroke="#9aabba"/>
                <text x="137" y="109" fontSize="14" fontWeight="700">ConnectionFactory</text>
                <text x="137" y="128" fontSize="11" fill="#52677d">Connection access</text>

                <rect x="285" y="85" width="190" height="58" rx="8"
                  fill="#f2f6fa" stroke="#9aabba"/>
                <text x="380" y="109" fontSize="14" fontWeight="700">SQLiteCommandEx&lt;T&gt;</text>
                <text x="380" y="128" fontSize="11" fill="#52677d">Command execution</text>

                <rect x="528" y="85" width="190" height="58" rx="8"
                  fill="#f2f6fa" stroke="#9aabba"/>
                <text x="623" y="109" fontSize="14" fontWeight="700">SQLiteDataReaderEx</text>
                <text x="623" y="128" fontSize="11" fill="#52677d">Result reading</text>

                <rect x="285" y="190" width="190" height="58" rx="8"
                  fill="#eaf3fb" stroke="#8db7d7"/>
                <text x="380" y="214" fontSize="14" fontWeight="700">SQLiteMaps</text>
                <text x="380" y="233" fontSize="11" fill="#52677d">Data mapping</text>
              </g>

              <path d="M232 114 H278" stroke="#397da9" strokeWidth="2"
                markerEnd="url(#sqlite-arrow-components)"/>
              <path d="M475 114 H521" stroke="#397da9" strokeWidth="2"
                markerEnd="url(#sqlite-arrow-components)"/>
              <path d="M623 143 V160 H380 V183" fill="none"
                stroke="#397da9" strokeWidth="2"
                markerEnd="url(#sqlite-arrow-components)"/>

              <text x="380" y="290" textAnchor="middle" fontSize="11"
                fill="#718096">Conceptual grouping — internal dependencies require source verification</text>
            </svg>
          </div>
          <p className="sqlite-diagram-note">
            The diagram groups the identified components by their described responsibilities.
            It does not assert a complete dependency graph.
          </p>
        </article>

        <article className="panel sqlite-diagram-card" id="sqlite-interaction-sequence">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">04 · INTERACTION SEQUENCE</p>
              <h3>Conceptual Request Lifecycle</h3>
            </div>
          </div>
          <div className="sqlite-svg-wrap">
            <svg viewBox="0 0 760 390" role="img"
              aria-label="Conceptual sequence of a request through SQLite data access components">
              <defs>
                <marker id="sqlite-arrow-sequence" markerWidth="8" markerHeight="8"
                  refX="6" refY="3" orient="auto">
                  <path d="M0 0 L6 3 L0 6" fill="none"
                    stroke="#397da9" strokeWidth="1.3"/>
                </marker>
              </defs>

              <g textAnchor="middle" fontSize="11" fontWeight="700" fill="#203b55">
                <rect x="8" y="18" width="112" height="42" rx="6" fill="#eaf3fb" stroke="#8db7d7"/>
                <text x="64" y="43">Application</text>

                <rect x="133" y="18" width="112" height="42" rx="6" fill="#f2f6fa" stroke="#9aabba"/>
                <text x="189" y="43">ConnectionFactory</text>

                <rect x="258" y="18" width="112" height="42" rx="6" fill="#f2f6fa" stroke="#9aabba"/>
                <text x="314" y="43">Command</text>

                <rect x="383" y="18" width="112" height="42" rx="6" fill="#edf6f1" stroke="#91bda6"/>
                <text x="439" y="43">SQLite</text>

                <rect x="508" y="18" width="112" height="42" rx="6" fill="#f2f6fa" stroke="#9aabba"/>
                <text x="564" y="43">Data Reader</text>

                <rect x="633" y="18" width="112" height="42" rx="6" fill="#eaf3fb" stroke="#8db7d7"/>
                <text x="689" y="43">SQLiteMaps</text>
              </g>

              <g stroke="#b6c2ce" strokeDasharray="4 4" strokeWidth="1.2">
                <path d="M64 60 V340"/>
                <path d="M189 60 V340"/>
                <path d="M314 60 V340"/>
                <path d="M439 60 V340"/>
                <path d="M564 60 V340"/>
                <path d="M689 60 V340"/>
              </g>

              <g fill="none" stroke="#397da9" strokeWidth="1.8"
                markerEnd="url(#sqlite-arrow-sequence)">
                <path d="M64 91 H189"/>
                <path d="M189 131 H314"/>
                <path d="M314 171 H439"/>
                <path d="M439 211 H564"/>
                <path d="M564 251 H689"/>
              </g>

              <g fontSize="11" fill="#52677d">
                <text x="126" y="83" textAnchor="middle">1 · Request</text>
                <text x="251" y="123" textAnchor="middle">2 · Connection</text>
                <text x="376" y="163" textAnchor="middle">3 · Execute</text>
                <text x="501" y="203" textAnchor="middle">4 · Read</text>
                <text x="626" y="243" textAnchor="middle">5 · Map</text>
              </g>

              <path d="M689 291 H64" fill="none" stroke="#397da9"
                strokeWidth="1.8" strokeDasharray="5 4"
                markerEnd="url(#sqlite-arrow-sequence)"/>
              <text x="376" y="280" textAnchor="middle" fontSize="11"
                fill="#52677d">6 · Mapped result returned to application</text>

              <text x="380" y="375" textAnchor="middle" fontSize="11"
                fill="#718096">Illustrative sequence — exact call order and ownership require source verification</text>
            </svg>
          </div>
          <p className="sqlite-diagram-note">
            A conceptual lifecycle view, not a verified runtime trace or timing diagram.
          </p>
        </article>

      <article className="panel sqlite-diagram-card sqlite-review-map"
        id="sqlite-architecture-review-map">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">05 · ARCHITECTURE REVIEW MAP</p>
            <h3>Areas to Validate</h3>
          </div>
        </div>
        <div className="sqlite-review-map-grid">
          {reviewAreas.map(([name, description], index) => (
            <div className="sqlite-review-map-item" key={name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{name}</strong>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="sqlite-diagram-note">
          Review areas derived from the available source-based review material.
          These are verification points, not confirmed defects.
        </p>
      </article>
      </div>

      <div className="sqlite-review-columns">
        <article className="panel">
          <p className="eyebrow">06 · COMPONENT RESPONSIBILITIES</p>
          <h3>Component Responsibilities</h3>
          <div className="sqlite-table-wrap">
            <table className="sqlite-table">
              <thead><tr><th>Component</th><th>Responsibility</th></tr></thead>
              <tbody>
                {components.map(([name, description]) => (
                  <tr key={name}><th scope="row">{name}</th><td>{description}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="panel sqlite-review-audit">
          <p className="eyebrow">07 · REVIEW AREAS</p>
          <h3>Architecture Verification Checklist</h3>
          <p className="sqlite-muted">
            Reviewed against the available DbStationary C# source files. Statuses describe
            what the inspected implementation demonstrates; they do not imply a complete
            runtime, concurrency or test-suite verification.
          </p>
          <div className="sqlite-table-wrap">
            <table className="sqlite-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>What to inspect</th>
                  <th>Source evidence</th>
                  <th>Review status</th>
                </tr>
              </thead>
              <tbody>
                {reviewAreas.map(([name, description], index) => {
                  const evidence = [
                    "ConnectionFactory.cs:11, 27–33 — one static singleton is initialized without locking and returns the same connection. CaseProvider.cs:43–45 — callers begin transactions on that shared connection.",
                    "ConnectionFactory.cs:18–24 — connection is created and opened in the factory constructor. GetConnection() reuses it; no close/dispose path is implemented in this class.",
                    "SQLiteCommandEx.cs:99–110, 130–141, 162–173, 235–239, 261–265 — several execution paths use using. Params overloads at 197–215, 248–252 and 275–279 do not dispose the command. ConnectionFactory retains its connection.",
                    "SQLiteCommandEx.cs:220–227 — AsDataReader() returns reader from inside using, so it is disposed before the caller can consume it. Other reader paths use using around execution and mapping.",
                    "SQLiteCommandEx_Params.cs:10–22, 25–36 — named SQLite parameters are created and added. SQLiteCommandEx.cs:299–302 maps null to DBNull.Value. ResetParams relies on Debug.Assert for count matching (286–293). CaseProvider.cs and SecurityProvider.cs show parameterized call sites.",
                    "SQLiteDataReaderEx.cs:28–30, 33–102, 104–121 — direct generic cast, typed getters and DBNull checks are implemented. SQLiteMaps.cs:24–91 shows their use in model mapping; conversion behavior is not comprehensively tested here.",
                    "CaseProvider.cs:54 stores CaseGUID as a string; SQLiteMaps.cs:36–38 reads it with Guid.Parse. SQLiteCommandEx_Params.cs:140–155 defines Guid parameter helpers. No round-trip test evidence was supplied.",
                    "CaseProvider.cs:308–312 catches, logs and rethrows exceptions in LoadCases(). The inspected command execution methods generally let exceptions propagate; no consistent logging policy is visible across providers."
                  ][index];
                  const status = [
                    "Risk identified",
                    "Partially verified",
                    "Inconsistent disposal",
                    "Defect confirmed",
                    "Partially verified",
                    "Partially verified",
                    "Partially verified",
                    "Partially verified"
                  ][index];

                  return (
                    <tr key={name}>
                      <th scope="row">{name}</th>
                      <td>{description}</td>
                      <td>{evidence}</td>
                      <td><span className="sqlite-review-pending">{status}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </article>
      </div>

      <article className="panel sqlite-recommendations">
        <p className="eyebrow">08 · RECOMMENDATIONS</p>
        <h3>Recommended Verification Steps</h3>
        <ol>
          {recommendations.map((item) => <li key={item}>{item}</li>)}
        </ol>
      </article>

      <div className="sqlite-review-links">
        <a href="https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/docs/sqlite-data-access-review.html" target="_blank" rel="noreferrer">Open standalone HTML review ↗</a>
        <a href="https://github.com/ekatmoz88-alt/github-profile-dashboard-vite" target="_blank" rel="noreferrer">Dashboard repository ↗</a>
      </div>
      <p className="sqlite-disclaimer">
        This is a separate C# / SQLite review case. It is not represented as part of the Oracle Global11 architecture.
        The diagrams are conceptual and should be checked against the source code before being treated as implementation-level documentation.
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
                <p>Selected technical writing case studies covering API documentation, enterprise systems, desktop software, database architecture and source-based analysis. Each project links to its public documentation repository or published reference.</p>
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
                    <p className="eyebrow">DESKTOP WORKSTATION · SYSTEM ARCHITECTURE &amp; SOFTWARE COMPONENTS</p>
                    <h3>АРМ «Дискриптор» — архитектура и программные модули</h3>
                    <p>Unified documentation case bringing together the АРМ «Дискриптор» system design and related source-based analysis of the mobile and stationary software components, dossier exchange, UMMS SOAP workflows, local SQLite storage, and passport-layout / MRZ processing. The technical-project materials describe the workstation context and its interaction with ППО «Территория» through ПОШ ВБД. The exact mapping between the project labels ПОМС / ПОСС and the examined ModuleMobile / ModuleStationary codebase remains subject to primary-source verification; the card therefore groups the documentation, not an unverified claim that every component is identical.</p>
                    <div className="featured-project-tags">
                      <span>System Architecture</span>
                      <span>WPF / .NET Framework</span>
                      <span>SOAP / XML / SQLite</span>
                      <span>Requirements &amp; Source Review</span>
                    </div>
                  </div>
                  <div className="featured-project-actions">
                    <a className="featured-project-link" href="https://ekatmoz88-alt.github.io/descriptor-arm-spec/" target="_blank" rel="noreferrer">АРМ «Дискриптор» — published specification ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/descriptor-arm-spec" target="_blank" rel="noreferrer">Architecture repository ↗</a>
                    <a className="featured-project-secondary" href="https://ekatmoz88-alt.github.io/deshifrator-docs/" target="_blank" rel="noreferrer">Mobile / stationary software documentation ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/deshifrator-docs/blob/main/docs/application-suite-review.md" target="_blank" rel="noreferrer">Application suite and source review ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/deshifrator-docs/blob/main/docs/dependencies-and-runtime.md" target="_blank" rel="noreferrer">Dependencies &amp; runtime ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/deshifrator-docs" target="_blank" rel="noreferrer">Software documentation repository ↗</a>
                  </div>
                </article>

                <article className="featured-project panel">
                  <div className="featured-project-copy">
                    <p className="eyebrow">ENTERPRISE INFORMATION SYSTEM · ARCHITECTURE &amp; INTEGRATIONS</p>
                    <h3>FMS Territory — Enterprise Information System</h3>
                    <p>Technical archive documenting the FMS Territory application: functional modules, deployment models, external data exchanges, system requirements and development lifecycle. The companion `territory-docs` repository provides deeper database, API and source-code documentation for the same PПО «Территория» system. The Descriptor workstation is documented separately.</p>
                    <div className="featured-project-tags">
                      <span>Enterprise Architecture</span>
                      <span>System Integrations</span>
                      <span>Deployment Models</span>
                      <span>Technical Analysis</span>
                    </div>
                  </div>
                  <div className="featured-project-actions">
                    <a className="featured-project-link" href="https://ekatmoz88-alt.github.io/ppo-territory-archive/" target="_blank" rel="noreferrer">Published documentation ↗</a>
                    <a className="featured-project-link" href="https://github.com/ekatmoz88-alt/ppo-territory-archive" target="_blank" rel="noreferrer">Public documentation repository ↗</a>
                  </div>
                </article>

                <article className="featured-project panel">
                  <div className="featured-project-copy">
                    <p className="eyebrow">ENTERPRISE SOAP · WPF / LEGACY CLIENT</p>
                    <h3>UMMS SOAP API &amp; Client — Integration Case Study</h3>
                    <p>Historical integration case study describing SOAP operations for authentication, reference-data synchronization and transaction submission, with XSD-based data structures and search workflows for WPF operator and mobile clients. The linked case study is Russian-language and does not describe a .NET 8 implementation.</p>
                    <div className="featured-project-tags">
                      <span>SOAP / WSDL / XSD</span>
                      <span>WPF Client</span>
                      <span>Legacy Integration</span>
                    </div>
                  </div>
                  <a className="featured-project-link" href="https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/umms-enterprise-soap-client.html" target="_blank" rel="noreferrer">Published case study (RU) ↗</a>
                  <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/umms-docs" target="_blank" rel="noreferrer">Related source-based UMMS documentation ↗</a>
                </article>

                <article className="featured-project panel">
                  <div className="featured-project-copy">
                    <p className="eyebrow">UMMS · C# · SQLITE · SOURCE REVIEW</p>
                    <h3>UMMS — Local Case &amp; Dossier Storage</h3>
                    <p>Source-based review of the Stationary Station data-access component: case and dossier relationships, SQLite persistence, XML-backed person documents, addresses and case records, scenario storage, and loading workflows. Findings are limited to the inspected CaseProvider implementation.</p>
                    <div className="featured-project-tags">
                      <span>C#</span><span>SQLite</span><span>XML Serialization</span><span>Data Access</span>
                    </div>
                  </div>
                  <div className="featured-project-actions">
                    <a className="featured-project-link" href="https://github.com/ekatmoz88-alt/umms-docs/blob/main/05_%D0%9B%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B4%D0%BE%D1%81%D1%8C%D0%B5_%D0%9F%D0%A3%D0%91%D0%9B%D0%98%D0%A7%D0%9D%D0%90%D0%AF.md" target="_blank" rel="noreferrer">Source-based review ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/umms-docs" target="_blank" rel="noreferrer">UMMS documentation repository ↗</a>
                  </div>
                </article>

                <article className="featured-project panel">
                  <div className="featured-project-copy">
                    <p className="eyebrow">UMMS · WPF · SOAP/XML · SYSTEM OVERVIEW</p>
                    <h3>UMMS — Document Processing Workstation &amp; SOAP Integration</h3>
                    <p>Public, source-based overview connecting the documented Mobile and Stationary workstation roles with the generated UMMS NP SOAP client, local dossier storage, and observed 2014 runtime diagnostics. The integration path is explicitly marked as provisional where caller and transfer code are not yet available.</p>
                    <div className="featured-project-tags">
                      <span>WPF / .NET</span><span>SOAP / XML</span><span>WSDL</span><span>Technical Analysis</span>
                    </div>
                  </div>
                  <div className="featured-project-actions">
                    <a className="featured-project-link" href="https://github.com/ekatmoz88-alt/umms-docs/blob/main/06_%D0%90%D0%A0%D0%9C_%D0%B8_SOAP_%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%9F%D0%A3%D0%91%D0%9B%D0%98%D0%A7%D0%9D%D0%90%D0%AF.md" target="_blank" rel="noreferrer">Architecture review ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/umms-docs" target="_blank" rel="noreferrer">UMMS documentation repository ↗</a>
                  </div>
                </article>

                <article className="featured-project panel">
                  <div className="featured-project-copy">
                    <p className="eyebrow">C# · SQLITE · SOURCE-BASED REVIEW</p>
                    <h3>C# / SQLite Data Access Layer Review</h3>
                    <p>Independent architecture review of a data access layer, covering component responsibilities, request and result flow, resource lifecycle, data mapping, and verification areas.</p>
                    <div className="featured-project-tags">
                      <span>C#</span><span>SQLite</span><span>Architecture Review</span>
                    </div>
                  </div>
                  <div className="featured-project-actions">
                    <a className="featured-project-link" href="#sqlite-review">View architecture review ↓</a>
                    <a className="featured-project-secondary" href="https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/docs/sqlite-data-access-review.html" target="_blank" rel="noreferrer">Source review (Markdown) ↗</a>
                  </div>
                </article>

                <article className="featured-project panel">
                  <div className="featured-project-copy">
                    <p className="eyebrow">ORACLE · DATA PLATFORM DOCUMENTATION</p>
                    <h3>Global11 Demo Data Platform</h3>
                    <p>Documentation for Oracle Global 11g, including the relational data model, OLAP patterns, and SQL scripts and scenarios.</p>
                    <div className="featured-project-tags">
                      <span>Oracle 11g</span>
                      <span>Relational Model</span>
                      <span>OLAP</span>
                    </div>
                  </div>
                  <div className="featured-project-actions">
                    <a className="featured-project-link" href="https://ekatmoz88-alt.github.io/global11-demo-data-platform/" target="_blank" rel="noreferrer">Published documentation ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/global11-demo-data-platform" target="_blank" rel="noreferrer">GitHub repository ↗</a>
                  </div>
                </article>

                <article className="featured-project panel">
                  <div className="featured-project-copy">
                    <p className="eyebrow">ENTERPRISE SYSTEM DOCUMENTATION</p>
                    <h3>PПО «Территория» — Database, API &amp; Source Documentation</h3>
                    <p>Companion technical documentation for the FMS PПО «Территория» information system. This repository focuses on the Oracle data model, core entities, passport and migration-related modules, business records and operation lifecycles, API operations, source-code models, reference data, access roles, signals, audit and biometrics. It complements the broader system archive and is not a separate passport-accounting product. АРМ «Дискриптор» remains a separately documented workstation.</p>
                    <div className="featured-project-tags">
                      <span>Technical Documentation</span>
                      <span>Database Documentation</span>
                      <span>RU / EN</span>
                    </div>
                  </div>
                  <div className="featured-project-actions">
                    <a className="featured-project-link" href="https://ekatmoz88-alt.github.io/territory-docs/" target="_blank" rel="noreferrer">Published documentation ↗</a>
                    <a className="featured-project-secondary" href="https://ekatmoz88-alt.github.io/territory-docs/database/physical-structure-specification" target="_blank" rel="noreferrer">Physical DB structure (2014) ↗</a>
                    <a className="featured-project-secondary" href="https://github.com/ekatmoz88-alt/territory-docs" target="_blank" rel="noreferrer">GitHub repository ↗</a>
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
              <article className="stat-card"><span className="stat-icon">▤</span><span className="stat-label">Public repositories</span><strong>{formatNumber(profile.public_repos)}</strong><small>On this account</small></article>
              <article className="stat-card"><span className="stat-icon">★</span><span className="stat-label">Total stars</span><strong>{formatNumber(totalStars)}</strong><small>Across loaded repositories</small></article>
              <article className="stat-card"><span className="stat-icon">⑂</span><span className="stat-label">Total forks</span><strong>{formatNumber(totalForks)}</strong><small>Across loaded repositories</small></article>
              <article className="stat-card"><span className="stat-icon">◷</span><span className="stat-label">Public events</span><strong>{formatNumber(events.length)}</strong><small>Recent events returned by GitHub</small></article>
            </section>

            <section className="content-grid">
              <div className="panel repositories-panel">
                <div className="panel-heading">
                  <div><p className="eyebrow">PROJECTS</p><h2>Repositories <span>{repositories.length}</span></h2></div>
                </div>
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
