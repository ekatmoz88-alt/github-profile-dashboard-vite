# Technical Documentation Portfolio

[English](README.md) | [Русский](README.ru.md)

**Portfolio dashboard:** https://github-profile-dashboard-vite.vercel.app/  
**GitHub Pages:** https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/  
**GitHub profile:** https://github.com/ekatmoz88-alt

A focused portfolio for Senior Technical Writer, API Documentation and Developer Documentation roles. It presents six selected case studies, with additional work available separately.

## Selected case studies

The main portfolio is intentionally limited to six examples. Each case provides direct access to published documentation and its source repository.

1. **[Orders API Documentation](https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/openapi/)** — developer-facing REST API reference, OpenAPI 3.1 schemas, request/response models and validation.
2. **[UMMS — SOAP Integration Documentation](https://ekatmoz88-alt.github.io/umms-docs/)** — an independent historical project covering SOAP operations, client workflows, local dossier storage and integration boundaries.
3. **[ППО «Территория» — System & Data Architecture](https://ekatmoz88-alt.github.io/territory-docs/)** — enterprise system documentation covering Oracle structures, functional domains, API operations and source-to-database mapping.
4. **[Deshifrator — Application & Component Documentation](https://ekatmoz88-alt.github.io/deshifrator-docs/)** — source-based documentation of desktop application components, file exchange, MRZ workflows, dependencies and selected C# / SQLite analysis.
5. **[Oracle Global11 — Data Model & OLAP Architecture](https://ekatmoz88-alt.github.io/global11-demo-data-platform/)** — a separate Oracle Global 11g workstream covering relational and dimensional models, hierarchies, cubes, measures and DMRS metadata.
6. **[ADP201P4 — Signal Processing Module](https://ekatmoz88-alt.github.io/adp201p4-hardware-spec/)** — hardware documentation based on the technical description and operating manual, including DSP architecture, ADM interface and connectors.

For every case, the portfolio identifies the intended audience, problem, available source materials, verification approach and resulting documentation artefacts. See the [case-study template](CASE-STUDY-TEMPLATE.md).

## Additional work

The following projects remain accessible without expanding the primary showcase:

- [SS-TMK — monitoring system and integration API](https://ekatmoz88-alt.github.io/ss-tmk-specification/)
- [VIWI / VSM — sanitized architecture documentation for a real project](https://ekatmoz88-alt.github.io/viwi-vsm-architecture/)
- [Cobalt UI — C++ component documentation](https://ekatmoz88-alt.github.io/cobalt-ui-navigation-docs/)
- [Fintech Operations — anonymized operational workflows](https://ekatmoz88-alt.github.io/fintech-docs-demo/)
- [Technical Writing Workflows — documentation QA automation](https://ekatmoz88-alt.github.io/technical-writing-workflows/)
- [Interference Coatings — scientific and engineering documentation](https://ekatmoz88-alt.github.io/interference-coatings-analysis-synthesis/)

The embedded C# / SQLite review belongs to the Deshifrator documentation track. It is not a separate product or part of the Territory Oracle database project.

## Documentation engineering

The portfolio demonstrates documentation as an engineered, maintainable product:

- **Version control:** Git history, focused commits and reviewable pull requests.
- **Authoring:** Markdown, YAML, XML and OpenAPI.
- **Information architecture:** audience-oriented navigation, clear system boundaries and links between overview, architecture, procedures and reference material.
- **Technical review:** comparison with available project records, specifications and inspected source code.
- **Quality checks:** OpenAPI validation, Spectral rules, Markdown linting, link checks and documentation builds where configured.
- **Diagrams:** editable source where available, with rendered diagrams kept aligned with canonical descriptions.
- **Publishing:** GitHub Actions, GitHub Pages, VitePress and Vercel, depending on the repository.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the authoring, review, change-management and publishing workflow.

## Case-study context and professional contribution

Each case should explain:

- **Audience:** who uses the documentation.
- **Problem:** what information or workflow needed clarification.
- **Inputs:** source code, specifications, project records, database metadata or manuals.
- **Verification:** how technical claims and examples were checked, and what remains unverified.
- **Deliverables:** guides, API references, architecture documents, diagrams, data models, specifications or documentation sites.
- **Outcome:** the concrete documentation result and its practical use, where supported by evidence.

Engineering collaboration is described only when project records support it. The portfolio distinguishes direct consultation or review from source-based technical verification. It does not invent stakeholder interviews, approval cycles or engineering sign-off.

Quantitative business outcomes—such as fewer support requests, faster onboarding or higher content comprehension—are included only when reliable measurements exist. Otherwise, the portfolio reports verifiable deliverables and process improvements without fabricating percentages or causal claims.

## Project boundaries and evidence

The featured projects represent real historical or current workstreams, but they are not one combined software system:

- UMMS is an independent project.
- ППО «Территория» and Deshifrator retain separate system and application boundaries.
- Oracle Global11 is separate from the Territory Oracle database.
- VIWI / VSM is a real project described in a sanitized logical architecture.
- ADP201P4 documentation is based on the supplied hardware manual; configuration-dependent details are identified for confirmation.

Public materials are sanitized where necessary. Confidential source code, credentials, personal data, production secrets and restricted documents are not published. Documented facts, analytical reconstructions and unresolved questions are labelled separately.

## Run locally

Requirements: Node.js 24 and npm.

```bash
npm ci
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Deployment

The dashboard is deployed to [Vercel](https://github-profile-dashboard-vite.vercel.app/) and GitHub Pages. The repository's GitHub Actions workflow builds and publishes the GitHub Pages version. Each featured project maintains its own documentation repository and publication target.

## Technology

React 18 · Vite 6 · JavaScript · GitHub REST API · Git · GitHub Actions · GitHub Pages · Vercel · Markdown · OpenAPI · Mermaid

## Tags

`technical-writing` · `api-documentation` · `developer-documentation` · `docs-as-code` · `information-architecture` · `enterprise-documentation` · `en-ru`
