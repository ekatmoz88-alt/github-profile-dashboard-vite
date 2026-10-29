import { useEffect, useMemo, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'

const USERNAME = 'ekatmoz88-alt'

const skills = [
  'Docs-as-Code',
  'API Architecture',
  'REST API Reference',
  'SOAP API & Client Docs',
  'Crypto/Fintech Specs',
  'CI/CD Pipelines'
]

const repoColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Shell: '#89e051',
  Markdown: '#083fa1',
  Rust: '#dea584',
  Go: '#00ADD8',
  Java: '#b07219',
  Vue: '#41b883',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Default: '#8b949e'
}

function formatNumber(value) {
  if (value === null || value === undefined) return '0'
  return new Intl.NumberFormat('ru-RU', {
    notation: value >= 1000 ? 'compact' : 'standard',
    maximumFractionDigits: 1
  }).format(value)
}

function formatDate(value) {
  if (!value) return '—'
  return new Date(value).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

async function getJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json'
    }
  })
  if (!response.ok) throw new Error(`GitHub API error: ${response.status}`)
  return response.json()
}

function aggregateContributionData(events = []) {
  const map = {}
  events.forEach((event) => {
    const date = new Date(event.created_at).toISOString().slice(0, 10)
    map[date] = (map[date] || 0) + 1
  })

  return Object.entries(map).slice(-7).map(([date, count]) => ({
    date: new Date(date).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: 'short'
    }),
    count
  }))
}

function useGithubData() {
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError(null)

        const [userData, reposData, eventsData] = await Promise.all([
          getJson(`https://api.github.com/users/${USERNAME}`),
          getJson(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
          getJson(`https://api.github.com/users/${USERNAME}/events/public?per_page=30`)
        ])

        setProfile(userData)
        setRepos(
          (reposData || [])
            .filter((repo) => !repo.fork)
            .sort((a, b) => Number(b.stargazers_count) - Number(a.stargazers_count))
        )
        setEvents(eventsData || [])
      } catch (err) {
        setError(err.message || 'Ошибка загрузки GitHub')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return { profile, repos, events, loading, error }
}

function RepoCard({ repo }) {
  return (
    <article className="repo-card">
      <div className="repo-top">
        <div className="repo-name-wrap">
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8A1 1 0 0 0 5 11.7a.75.75 0 0 1-1.07 1.05A2.5 2.5 0 0 1 2 11.5V2.5Zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8Z" />
          </svg>
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
        </div>

        <Link to={`/repo/${repo.name}`} className="repo-link-btn">
          Details
        </Link>
      </div>

      <p className="repo-description">
        {repo.description || 'Описание отсутствует, но репозиторий активно развивается.'}
      </p>

      <div className="repo-meta">
        {repo.language && (
          <span className="lang">
            <i style={{ background: repoColors[repo.language] || repoColors.Default }} />
            {repo.language}
          </span>
        )}
        <span>⭐ {formatNumber(repo.stargazers_count)}</span>
        <span>🍴 {formatNumber(repo.forks_count)}</span>
      </div>
    </article>
  )
}

function OverviewPage() {
  const { profile, repos, events, loading, error } = useGithubData()
  const [languageFilter, setLanguageFilter] = useState('all')
  const [sortBy, setSortBy] = useState('updated')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const languageOptions = useMemo(() => {
    const set = new Set(repos.map((repo) => repo.language).filter(Boolean))
    return ['all', ...Array.from(set)]
  }, [repos])

  const filteredRepos = useMemo(() => {
    let list = [...repos]

    if (languageFilter !== 'all') {
      list = list.filter((repo) => repo.language === languageFilter)
    }

    if (sortBy === 'stars') {
      list.sort((a, b) => Number(b.stargazers_count) - Number(a.stargazers_count))
    } else if (sortBy === 'forks') {
      list.sort((a, b) => Number(b.forks_count) - Number(a.forks_count))
    } else {
      list.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    }

    return list
  }, [repos, languageFilter, sortBy])

  const contributionData = useMemo(() => aggregateContributionData(events), [events])

  if (loading) return <div className="loading-state">Загрузка данных GitHub...</div>
  if (error) return <div className="error-state">{error}</div>
  if (!profile) return null

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container nav">
          <div className="brand">
            <span className="brand-mark">{profile.login.slice(0, 2).toUpperCase()}</span>
            <span>{profile.login}</span>
          </div>

          <nav className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </nav>
        </div>
      </header>

      <main className="container dashboard">
        <section className="profile-grid">
          <aside className="card profile-card">
            <div className="avatar-wrap">
              <img src={profile.avatar_url} alt={profile.name || profile.login} className="avatar" />
            </div>

            <h1>{profile.name || profile.login}</h1>
            <p className="username">@{profile.login}</p>

            <div className="profile-bio">
              {profile.bio || 'Documentation Engineer focused on API architecture and developer experience.'}
            </div>

            <div className="stats-grid">
              <div className="stat-box">
                <strong>{formatNumber(profile.public_repos)}</strong>
                <span>Repos</span>
              </div>
              <div className="stat-box">
                <strong>{formatNumber(profile.followers)}</strong>
                <span>Followers</span>
              </div>
              <div className="stat-box">
                <strong>{formatNumber(profile.following)}</strong>
                <span>Following</span>
              </div>
            </div>
          </aside>

          <div className="content-stack">
            <section className="card skills-card">
              <h2>🛠️ Технологический стек & Экспертиза</h2>
              <div className="skills-wrap">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </section>

            <section className="card activity-card">
              <h2>📈 Contribution Activity</h2>
              <div className="mini-bars">
                {contributionData.length > 0 ? (
                  contributionData.map((item) => (
                    <div key={item.date} className="bar-wrap">
                      <div
                        className="bar"
                        style={{ height: `${Math.max(18, item.count * 22)}px` }}
                        title={`${item.date}: ${item.count} public events`}
                      />
                      <span>{item.date}</span>
                    </div>
                  ))
                ) : (
                  <p className="empty-note">Нет публичных событий.</p>
                )}
              </div>
            </section>

            <section className="card repos-card">
              <div className="section-header">
                <h2>📁 Репозитории</h2>
              </div>

              <div className="repo-controls">
                <label>
                  Language
                  <select value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)}>
                    {languageOptions.map((option) => (
                      <option key={option} value={option}>
                        {option === 'all' ? 'All languages' : option}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Sort
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="updated">Updated</option>
                    <option value="stars">Stars</option>
                    <option value="forks">Forks</option>
                  </select>
                </label>
              </div>

              <div className="repo-grid">
                {filteredRepos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  )
}

function RepoDetailPage() {
  const { repoName } = useParams()
  const [repo, setRepo] = useState(null)
  const [commits, setCommits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError(null)

        const [repoData, commitData] = await Promise.all([
          getJson(`https://api.github.com/repos/${USERNAME}/${repoName}`),
          getJson(`https://api.github.com/repos/${USERNAME}/${repoName}/commits?per_page=5`)
        ])

        setRepo(repoData)
        setCommits(commitData)
      } catch (err) {
        setError(err.message || 'Ошибка загрузки репозитория')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [repoName])

  if (loading) return <div className="loading-state">Загрузка репозитория...</div>
  if (error) return <div className="error-state">{error}</div>
  if (!repo) return null

  return (
    <main className="container detail-page">
      <div className="detail-header">
        <Link to="/" className="back-link">← Назад</Link>
      </div>

      <section className="card detail-card">
        <div className="detail-top">
          <div>
            <p className="detail-label">Repository</p>
            <h1>{repo.full_name}</h1>
          </div>

          <a href={repo.html_url} target="_blank" rel="noreferrer" className="primary-btn">
            Open on GitHub
          </a>
        </div>

        <p className="detail-description">
          {repo.description || 'Описание отсутствует.'}
        </p>

        <div className="detail-meta">
          {repo.language && <span>{repo.language}</span>}
          <span>⭐ {formatNumber(repo.stargazers_count)}</span>
          <span>🍴 {formatNumber(repo.forks_count)}</span>
          <span>👁 {formatNumber(repo.watchers_count)}</span>
          <span>🗓 {formatDate(repo.updated_at)}</span>
        </div>

        <div className="commits-box">
          <h3>Recent commits</h3>
          <ul className="commit-list">
            {commits.map((commit) => (
              <li key={commit.sha}>
                <div className="commit-message">
                  <strong>{commit.commit.message.split('\n')[0]}</strong>
                  <span>{commit.author?.login || 'GitHub user'}</span>
                </div>
                <time>{formatDate(commit.commit.committer.date)}</time>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OverviewPage />} />
      <Route path="/repo/:repoName" element={<RepoDetailPage />} />
    </Routes>
  )
}
