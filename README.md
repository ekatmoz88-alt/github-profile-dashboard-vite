# Technical Documentation Portfolio

A public portfolio dashboard for selected technical writing and documentation engineering work.

**Live dashboard:** https://github-profile-dashboard-vite.vercel.app/  
**GitHub profile:** https://github.com/ekatmoz88-alt

## Purpose

The dashboard presents selected documentation case studies across API documentation, enterprise information systems, desktop applications, database architecture and source-based technical analysis.

Each project remains an independent workstream. The dashboard links to the corresponding public documentation site, repository or review artifact; it does not combine the underlying systems into one architecture.

## Featured work

- [Orders API Documentation](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2) — REST API reference and OpenAPI 3.1, with Docs-as-Code validation.
- [ARM Descriptor](https://github.com/ekatmoz88-alt/descriptor-arm-spec) — independent document-processing workstation architecture and requirements.
- [FMS Territory](https://github.com/ekatmoz88-alt/ppo-territory-archive) — enterprise information system archive, functional modules and integrations.
- [Deshifrator](https://github.com/ekatmoz88-alt/deshifrator-docs) — historical desktop application suite documentation and source-based review.
- [UMMS](https://github.com/ekatmoz88-alt/umms-docs) — public SOAP integration and local case/dossier storage documentation.
- [GLOBAL11 Demo Data Platform](https://github.com/ekatmoz88-alt/global11-demo-data-platform) — Oracle relational model, data dictionary and SQL documentation.
- [Passport Account System](https://github.com/ekatmoz88-alt/territory-docs) — separate passport-accounting system documentation.
- [Cobalt UI Navigation](https://github.com/ekatmoz88-alt/cobalt-ui-navigation-docs) — source-based C++ component documentation.
- [Fintech Documentation Demo](https://ekatmoz88-alt.github.io/fintech-docs-demo/) — fictional operator-console workflows, data classification and audit logging.
- [Technical Writing Workflows](https://ekatmoz88-alt.github.io/technical-writing-workflows/) — automated OpenAPI, Markdown and link-quality checks.
- [ADP201P4 Hardware Documentation](https://ekatmoz88-alt.github.io/adp201p4-hardware-spec/) — source-based signal-processing module architecture and interface documentation.

## Dashboard behavior

- Public GitHub profile information and repository activity are retrieved from the GitHub REST API.
- Featured project descriptions and their links are curated in the dashboard source.
- The standalone C# / SQLite review is included as a separate technical review page.
- Public API rate limits may temporarily affect live profile and activity data.

## Technology

- React 18
- Vite 6
- JavaScript
- GitHub REST API
- GitHub Actions
- Vercel and GitHub Pages

## Run locally

Requirements: Node.js 24 and npm.

```bash
npm ci
npm run dev
```

Create a production build and preview it locally:

```bash
npm run build
npm run preview
```

## Deployment

The project is configured for deployment to Vercel at the domain root and to GitHub Pages under the repository subpath. The GitHub Actions workflow builds the Vite application and copies the standalone HTML review pages into the Pages artifact.

## Evidence and scope

The dashboard is a portfolio index, not a claim that all listed systems were developed by the author. Each project description identifies its documentation, source-review or demonstration scope. Historical system facts are kept separate from modern portfolio examples, and technical findings are limited to the available project documents and inspected source evidence.
