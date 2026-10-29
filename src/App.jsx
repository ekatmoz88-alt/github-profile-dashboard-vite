import React, { useEffect, useState } from 'react';

async function getRepositories() {
  const response = await fetch('/api/get-repos');

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export default function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getRepositories()
      .then(data => { if (active && data) setRepos(data); })
      .catch(err => console.error(err))
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  return (
    <div className="portfolio-container">
      <div className="portfolio-layout">
        
        {/* Левая панель: Профиль */}
        <aside className="profile-sidebar">
          <div className="avatar-circle">EM</div>
          <h1 className="profile-name">Екатерина Моцарь</h1>
          <p className="profile-username">@ekatmoz88-alt</p>
          <p className="profile-bio">
            Senior Technical Writer | API / OpenAPI / Docs-as-Code (Git, Markdown, C# context).
          </p>
          <div className="profile-contacts">
            <h3>Контакты</h3>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn Профиль</a>
            <p className="email-text">ekatmoz88@gmail.com</p>
          </div>
        </aside>

        {/* Правая панель: Дашборд */}
        <main className="dashboard-main">
          
          {/* ИИ-Манифест */}
          <div className="manifesto-box">
            <h2>🧠 Методология ИИ-Инжиниринга (AI Workflows)</h2>
            <p>
              "Я не просто генерирую код, а выступаю в роли архитектора процесса: сначала проектирую логику, декомпозирую задачи и полностью контролирую качество на выходе, исключая галлюцинации нейросетей."
            </p>
          </div>

          {/* Репозитории */}
          <div className="repos-section">
            <h2 className="section-title">■ Ключевые репозитории (Core Repositories)</h2>
            
            {loading ? (
              <div className="loading-text">Синхронизация с сервером Linux...</div>
            ) : (
              <div className="repo-grid">
                {repos.map((repo) => (
                  <div key={repo.name} className="repo-card">
                    <div className="repo-header">
                      <a href={repo.url} target="_blank" rel="noreferrer" className="repo-link">
                        {repo.name}
                      </a>
                      <span className="repo-badge">Public</span>
                    </div>
                    
                    <p className="repo-description">
                      {repo.description || 'Описание отсутствует, но репозиторий активно развивается.'}
                    </p>

                    <div className="repo-footer">
                      {repo.primaryLanguage && (
                        <div className="repo-language">
                          <span className="lang-color" style={{ backgroundColor: repo.primaryLanguage.color || '#f1e05a' }} />
                          <span>{repo.primaryLanguage.name}</span>
                        </div>
                      )}
                      {repo.stargazerCount > 0 && <span className="repo-stars">⭐ {repo.stargazerCount}</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>

      </div>
    </div>
  );
}

