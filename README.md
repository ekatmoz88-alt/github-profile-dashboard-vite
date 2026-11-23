# Technical Documentation Portfolio

[English](README.md) | [Русский](README.ru.md)

A public portfolio of technical investigation, architecture reconstruction and evidence-based documentation.

> I investigate complex software systems, reconstruct their architecture, and turn technical sources into structured, reliable and maintainable documentation.

The focus is not limited to end-user instructions: it includes source analysis, system boundaries, data and interface models, architecture diagrams, technical specifications and documentation quality controls. The role presented here is **Technical Writer with an engineering and analytical specialization** — not software architect or software developer.

**Live dashboard:** https://github-profile-dashboard-vite.vercel.app/  
**GitHub profile:** https://github.com/ekatmoz88-alt  
**Bilingual repository registry and audit:** https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/portfolio-audit.html


## Repository consolidation

## Evidence-first editing

Resume and dashboard claims follow the [evidence-first policy](docs/documentation/resume-and-dashboard-evidence-policy.md): every material statement is linked to a supporting artifact, assigned an evidence marker, and kept within the limits of what the source proves. Metrics and achievements are not added without traceable evidence. Public materials require a PII and secrets review.

See the [canonical project and duplicate consolidation index](docs/portfolio-consolidation-index.md) for canonical document locations, merged project groups, retired duplicate repositories and evidence boundaries.

## Purpose

The dashboard presents selected documentation case studies across API documentation, enterprise information systems, desktop applications, database architecture and source-based technical analysis.

Related materials may be grouped under one project contour where they belong together. The documentation preserves the boundaries between systems, applications, subsystems and components; a shared project portfolio does not imply one runtime or deployment.

## Featured work

The dashboard presents **11 curated project cards**. The additional repository index excludes unfinished work, legacy copies, parallel variants and repositories already represented by featured case studies. Project cards use one primary documentation link where multiple labels previously pointed to the same page.

- [Orders API Documentation](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2) — REST API reference and OpenAPI 3.1, with Docs-as-Code validation.
- [SOIS Onboard Interface Architecture](https://github.com/ekatmoz88-alt/sois-onboard-interface-architecture) · [project documentation](https://ekatmoz88-alt.github.io/sois-onboard-interface-architecture/) — demonstration system-analysis study of CCSDS SOIS onboard interface services, architecture layers, subnetwork services, topologies and QoS. Normative definitions are explicitly marked for standards verification.
- [VIWI / VSM — Sanitized Architecture Documentation](https://ekatmoz88-alt.github.io/viwi-vsm-architecture/) — documentation of the real VIWI/VSM project, covering service mapping, validation and code-generation concepts. The public version is sanitized to protect restricted project details.
- [ППО «Территория» и «Дешифратор» — unified documentation project](https://github.com/ekatmoz88-alt/territory-descriptor-unified) · [published site](https://ekatmoz88-alt.github.io/territory-descriptor-unified/) — one repository containing the Territory system overview, database/API materials, Deshifrator workstation architecture (historical source label: ARM Descriptor), software-component reviews, selected C# source fragments, and UMMS SOAP documentation. The consolidated materials retain section-level boundaries; the mapping between ПОМС / ПОСС and ModuleMobile / ModuleStationary remains under verification. [Deshifrator workstation specification](https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/descriptor/) · [Interactive EN/RU architecture catalogue](https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/architecture/architecture.html) · [System context and scope — EN](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/system-context-and-scope.en.md) · [Контекст системы и границы — RU](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/system-context-and-scope.ru.md) · [Canonical Mermaid source](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/README.md) · [Detailed component maps](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/component-maps.md). The primary catalogue contains 10 Mermaid diagrams; the companion maps contain 7 additional component-level diagrams.
- [High-Security Work Patent — System Architecture](https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/docs/high-security-patent-architecture.html) — analytical case study of a proposed secure identity-card pilot, including the issuance workflow, personalization infrastructure, chip interfaces and security services. The source describes a proposal, not a confirmed production implementation.
- [Oracle Global11 — Data Model & OLAP Architecture](https://github.com/ekatmoz88-alt/global11-demo-data-platform) — Oracle Global 11g environment deployed and operated on an office server. Documentation covers relational schema changes, SQL Developer Data Modeler dimensional design, role-playing time dimensions, level-based and ragged hierarchies, cubes, measures, DMRS metadata, and the Oracle AW export workflow. [Published documentation](https://ekatmoz88-alt.github.io/global11-demo-data-platform/) · [Data Modeler design history](https://ekatmoz88-alt.github.io/global11-demo-data-platform/GLOBAL11-DATA-MODELER-DESIGN.html) · [DMRS metadata catalogue](https://github.com/ekatmoz88-alt/global11-demo-data-platform/blob/main/docs/dmrs-metadata-catalog.md) · [Claim-domain design drafts](https://github.com/ekatmoz88-alt/global11-demo-data-platform/tree/main/docs/claim-domain-draft) · [Cube_1111 specification](https://ekatmoz88-alt.github.io/global11-demo-data-platform/CUBE-1111-FINAL-SPECIFICATION.html).
- [Cobalt UI Navigation](https://github.com/ekatmoz88-alt/cobalt-ui-navigation-docs) — source-based C++ component documentation.
- [Fintech Operations Documentation](https://ekatmoz88-alt.github.io/fintech-docs-demo/) — anonymized documentation of a real crypto-onramp operator-console project, including workflows, data classification and audit logging.
- [Technical Writing Workflows](https://ekatmoz88-alt.github.io/technical-writing-workflows/) — automated OpenAPI, Markdown and link-quality checks.
- [SS-TMK — Technical Monitoring System](https://ekatmoz88-alt.github.io/ss-tmk-specification/) — system and integration specification covering monitoring workflows and the XML/WSDL interface; the MCP gateway adapter is documented as a separate integration component.
- [ADP201P4 Hardware Documentation](https://ekatmoz88-alt.github.io/adp201p4-hardware-spec/) — source-based signal-processing module architecture and interface documentation.

## Dashboard behavior

- Public GitHub profile information and repository activity are retrieved from the GitHub REST API.
- Featured project descriptions and their links are curated in the dashboard source.
- The additional repository index hides unfinished work and duplicate/legacy repositories; it is not a complete account inventory.
- The standalone C# / SQLite review documents the DbStationary data-access layer in the Deshifrator track. It is separate from PPO Territory's Oracle database and the Global11 demo data platform. Global11 contains Oracle relational and dimensional modelling materials only; SQLite findings must not be attributed to Global11.
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

The live dashboard is deployed to Vercel at the domain root: https://github-profile-dashboard-vite.vercel.app/. The repository includes a GitHub Actions workflow that builds and deploys the Vite application to GitHub Pages; the same dashboard is also deployed to Vercel. The other portfolio projects keep their own independent GitHub Pages sites.

## Featured architecture documentation

- [Data exchange and administration — EN](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/data-exchange-and-administration.en.md)
- [Обмен данными и администрирование — RU](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/data-exchange-and-administration.ru.md)

## Evidence and scope

All featured cards refer to real projects and workstreams; system projects were deployed in their respective server environments. The dashboard identifies the author's documentation, analysis and source-review contribution without implying authorship of the underlying software where that was not the role. Historical deployment facts are retained; public descriptions are anonymized where required, and technical findings are tied to project materials and inspected source evidence.


## Tags

`portfolio-dashboard` · `react` · `vite` · `github-api` · `technical-writing` · `repository-audit` · `en-ru`


## Enterprise documentation capability map

The featured Enterprise Systems Architecture card also links to the cross-repository [Enterprise Technical Documentation overview](https://ekatmoz88-alt.github.io/technical-writing-portfolio/enterprise-documentation/), including the C4, UML Sequence and BPMN 2.0 diagram module. The map distinguishes source-backed system documentation from design artefacts and analytical models.
