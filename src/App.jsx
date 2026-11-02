import React from 'react';

const repositories = [
  {
    name: 'technical-writing-portfolio',
    description: 'REST API documentation portfolio with an OpenAPI 3.1 contract, API reference, developer guide, error handling and webhook documentation.',
    tags: ['OpenAPI 3.1', 'REST API', 'Markdown'],
    url: 'https://github.com/ekatmoz88-alt/technical-writing-portfolio',
    site: 'https://ekatmoz88-alt.github.io/technical-writing-portfolio/',
  },
  {
    name: 'technical-writing-workflows',
    description: 'Docs-as-Code example with automated OpenAPI validation, Markdown linting and link checking through GitHub Actions.',
    tags: ['Docs-as-Code', 'GitHub Actions', 'Spectral'],
    url: 'https://github.com/ekatmoz88-alt/technical-writing-workflows',
    site: 'https://ekatmoz88-alt.github.io/technical-writing-workflows/',
  },
  {
    name: 'fintech-docs-demo',
    description: 'Fictional FinTech case study covering an onboarding flow, KYC operations, data classification and audit-log requirements.',
    tags: ['FinTech', 'KYC', 'Security'],
    url: 'https://github.com/ekatmoz88-alt/fintech-docs-demo',
  },
  {
    name: 'api-docs-portfolio-v2',
    description: 'Advanced API documentation examples covering REST, OpenAPI, SOAP integration analysis and a documentation portal.',
    tags: ['REST', 'SOAP', 'WSDL'],
    url: 'https://github.com/ekatmoz88-alt/api-docs-portfolio-v2',
    site: 'https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/',
  },
  {
    name: 'github-profile-dashboard-vite',
    description: 'A static React dashboard bringing the technical writing repositories and published portfolio pages together.',
    tags: ['React', 'Vite', 'GitHub Pages'],
    url: 'https://github.com/ekatmoz88-alt/github-profile-dashboard-vite',
    site: 'https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/',
  },
];

export default function App() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-layout">
        <aside className="profile-sidebar">
          <div className="avatar-circle">KM</div>
          <h1 className="profile-name">Kate Motsar</h1>
          <p className="profile-username">@ekatmoz88-alt</p>
          <p className="profile-bio">
            Technical Writer focused on API documentation, developer experience,
            Docs-as-Code and clear documentation for complex systems.
          </p>
          <div className="profile-contacts">
            <h3>Links</h3>
            <a href="https://github.com/ekatmoz88-alt" target="_blank" rel="noreferrer">GitHub profile ↗</a>
            <a href="https://www.linkedin.com/in/kate-motsar-b56974267/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://ekatmoz88-alt.github.io/" target="_blank" rel="noreferrer">Main portfolio website ↗</a>
          </div>
        </aside>

        <main className="dashboard-main">
          <div className="manifesto-box">
            <h2>Technical writing portfolio</h2>
            <p>
              Documentation is part of the product: structured, version-controlled,
              validated and designed around the needs of developers and users.
            </p>
          </div>

          <div className="repos-section">
            <h2 className="section-title">Featured repositories · {repositories.length}</h2>
            <div className="repo-grid">
              {repositories.map((repo) => (
                <article key={repo.name} className="repo-card">
                  <div className="repo-header">
                    <a href={repo.url} target="_blank" rel="noreferrer" className="repo-link">
                      {repo.name}
                    </a>
                    <span className="repo-badge">Public</span>
                  </div>
                  <p className="repo-description">{repo.description}</p>
                  <div className="chips">
                    {repo.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}
                  </div>
                  <div className="repo-footer">
                    <a href={repo.url} target="_blank" rel="noreferrer">Source ↗</a>
                    {repo.site && <a href={repo.site} target="_blank" rel="noreferrer">Live site ↗</a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
