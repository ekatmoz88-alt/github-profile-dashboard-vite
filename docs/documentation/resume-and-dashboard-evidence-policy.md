# Evidence-First Resume and Portfolio Policy

## Purpose

Apply the principle **evidence and wording together** to both the resume and the GitHub portfolio dashboard. Every material claim must be traceable to a concrete artifact at the time the claim is written.

The dashboard is an index of evidence, not a substitute for the evidence itself. A project card should lead to the artifact that supports its description.

## Evidence markers

| Marker | Meaning | Publication rule |
|---|---|---|
| `Verified` | The cited artifact directly supports the stated claim, within its scope | May be stated as a fact; retain the evidence link |
| `Source-based` | The conclusion was derived from inspected source code, schema, configuration, or metadata | Name the inspected source and state the scope of analysis |
| `Conceptual` | A model or diagram expresses an interpretation, target design, or explanation rather than verified implementation | Label it as conceptual, proposed, or analytical |
| `Evidence required` | A plausible claim has been drafted but its supporting artifact has not yet been located or checked | Do not present it as an established fact |
| `Not verified` | No verification has been performed | Do not upgrade the status without a recorded check |

Markers describe the **claim-to-evidence relationship**, not the overall quality of a person or project. A single project may contain claims with different statuses.

## Single source of truth and cross-references

Avoid repeating the same project facts, repository descriptions, functional summaries, and technical explanations across multiple pages.

- Keep each reusable fact or description in one **master section** (the canonical source).
- In other documents, use a short cross-reference instead of copying the full explanation, for example: `See Criteria 3D` or `See Criteria 4C`.
- Use descriptive links that identify the destination section; preserve the exact criterion IDs when they are defined by the project or review framework.
- Update the master section first. Then check that dependent pages still link to the correct section and do not retain outdated duplicated wording.
- Keep genuinely different project-specific details in their own project sections; cross-reference shared material without flattening distinct system or repository boundaries.
- Do not create a cross-reference to an undefined criterion. If the target section does not exist yet, mark the reference as pending or define the criterion before publication.

The goal is one authoritative explanation per fact, with lightweight navigation from every place where readers need it.

## Claim-to-evidence workflow

1. Write one specific claim about work performed.
2. Identify the project and the author's actual contribution.
3. Link the primary artifact: source, specification, OpenAPI/WSDL file, SQL/DDL, diagram source, test output, CI run, or published document.
4. Record what the artifact proves and what it does not prove.
5. Assign an evidence marker.
6. Remove or qualify claims that lack adequate support.
7. Review the public artifact for personal data, credentials, secrets, and confidential project information before publication.

## Resume evidence matrix

Use one row per material resume claim. The following are evidence types to attach, not assertions that every example has already been verified.

| Resume claim | Suitable evidence | Required boundary |
|---|---|---|
| REST API documentation | OpenAPI YAML, endpoint reference, request/response examples, API review history | An API definition supports the documented contract; it does not by itself prove live API behavior |
| SOAP/WSDL documentation | WSDL/XSD files, operation descriptions, SOAP examples | Do not infer undocumented operations or runtime availability |
| Oracle database documentation | SQL/DDL, data dictionary, table inventory, ER model, source-to-table mapping | Distinguish document-derived inventories from a fresh query of a live database |
| C# source analysis | Inspected source files, symbol references, dependency map, review notes | State which files/components were examined; do not generalize to the entire application without coverage |
| Docs-as-Code | Markdown sources, Git history, build configuration, CI workflow and run | A workflow file proves configuration; a successful run proves only that run and its checks |
| Architecture diagrams | Editable Mermaid/C4/Data Flow source and linked source basis | Mark inferred relationships and conceptual views; do not imply runtime validation |
| Measurable achievement | Original measurement, report, issue history, test result, or attributable review record | Never invent percentages, volumes, time savings, acceptance rates, or business impact |

## Dashboard project-card requirements

Each featured project should provide:

- **Project / scope** — the correct project name and system boundaries.
- **Contribution** — documentation, analysis, source review, modeling, or implementation; do not imply software authorship where it was not the user's role.
- **Claim** — a concise statement of work performed.
- **Evidence link** — direct link to the relevant source or published artifact.
- **Marker** — one of the evidence markers above, applied to the individual claim or artifact.
- **Limitations** — what the evidence does not establish.
- **PII review** — pending or verified for the public materials in scope.

Do not assign one status to an entire repository if its contents have different evidence levels.

## Existing portfolio evidence entry points

These are known public evidence locations. The status of each individual claim must still be checked against the linked artifact before it is used in a resume.

| Project | Evidence entry point | Scope note |
|---|---|---|
| Orders API | [API documentation portfolio](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2) | Inspect the OpenAPI definition and validation artifacts before claiming endpoint counts or runtime tests |
| Oracle Global11 | [Global11 data platform](https://github.com/ekatmoz88-alt/global11-demo-data-platform) | Keep relational model evidence distinct from OLAP design drafts and runtime deployment claims |
| PPO Territory / Deshifrator / UMMS | [Unified project documentation](https://github.com/ekatmoz88-alt/territory-descriptor-unified) | Preserve the unified project contour while retaining subsystem and component boundaries |
| C# / SQLite DbStationary | [Deshifrator source-review materials](https://github.com/ekatmoz88-alt/territory-descriptor-unified) | Keep SQLite findings in the Deshifrator track; do not attribute them to Oracle Global11 |
| Dashboard | [Dashboard source repository](https://github.com/ekatmoz88-alt/github-profile-dashboard-vite) | Curated project descriptions must link to the evidence that supports each statement |

## Privacy and publication gate

Before publishing a resume attachment, screenshot, source excerpt, or project artifact:

- Remove personal data (PII) belonging to the user or third parties where it is not necessary and authorized for publication.
- Remove credentials, access tokens, private keys, passwords, connection strings, and other secrets.
- Remove or anonymize confidential customer, employee, and internal project information where publication is not authorized.
- Inspect images, PDFs, document metadata, embedded screenshots, and code samples—not only visible Markdown text.
- Preserve technical meaning while anonymizing identifiers and sensitive values.

Use `PII Review: Pending` until the complete publication scope has been checked. Use `PII Review: Verified` only for the exact files and versions inspected.

## Non-negotiable rules

- Evidence and wording are created together, not retrofitted after publication.
- Every technology is tied to the project where it was actually used.
- Every achievement and metric requires a traceable source.
- A published page proves publication, not technical correctness.
- Source code proves only what the inspected code shows; runtime behavior requires runtime evidence.
- Conceptual diagrams must remain labeled as conceptual or analytical.
- Unsupported claims are removed or explicitly marked as requiring evidence.
