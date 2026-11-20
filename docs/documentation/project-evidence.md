# Project Evidence & Case-Study Structure

## Purpose

This document defines how portfolio case studies connect methodology, project claims, and published artifacts. It complements the [Documentation Quality Assurance](documentation-quality-assurance.md) model for evidence classification, claim traceability, and verification.

A case study must make it possible to answer three questions:

1. **What work was performed?**
2. **Which artifact supports each material statement?**
3. **What does that artifact establish—and what does it not establish?**

The existence of a repository or published page is not, by itself, proof that every described feature was implemented, deployed, tested, or used in production.

## Source classification

Classify each source by its origin and evidentiary role before using it in a case study.

| Source class | Examples | Appropriate use | Limitation |
|---|---|---|---|
| Primary implementation artifact | Source code, SQL, DDL, configuration, API definition, WSDL/XSD | Establish declared structures, implementation paths, configuration, and authored contracts | Does not automatically establish deployed or successful runtime behavior |
| Project documentation | Requirements, specifications, architecture descriptions, operating instructions | Establish documented intent, scope, terminology, and historical project context | May describe intended or historical behavior; verify against implementation where possible |
| Derived analysis | Source review, data dictionary, ER model, architecture diagram, mapping table | Explain relationships and conclusions derived from identified sources | Must identify source basis and distinguish direct facts from interpretation |
| Validation evidence | Test output, linter report, CI run, execution log, review record | Establish the specific check performed and its recorded result | Proves only the tested scope, version, and conditions |
| Publication artifact | GitHub Pages site, rendered API reference, Markdown page | Establish published content and its availability at the observed version | Publication does not independently prove technical accuracy |
| External reference | Standards, vendor documentation, professional guidance | Support terminology, normative requirements, and design rationale | Does not prove that a project implemented or adopted the referenced guidance |

When several source classes are used together, keep their roles explicit. For example, an OpenAPI file describes a declared API contract; a CI workflow describes configured validation; a successful workflow run records execution of those checks; a live request/response test is separate runtime evidence.

## Case-study structure

1. **Project context** — system purpose, audience, scope, and technical environment.
2. **Documentation challenge** — the information or documentation problem addressed.
3. **Reference basis** — applicable standards, specifications, and professional references; distinguish references consulted from requirements formally adopted.
4. **Applied methodology** — analysis, information architecture, authoring, and verification activities.
5. **Documentation artifacts** — actual documents, source files, specifications, diagrams, and published materials.
6. **Verification** — checks performed and evidence available; state the exact scope, version, and result.
7. **Outcome** — completed deliverables and demonstrable improvements. Quantified impact requires measurements.

## Evidence map across published projects

The following map connects the methodology to concrete materials in the public portfolio. PPO Territory, Deshifrator and UMMS are presented as one connected project contour, while their system and runtime boundaries remain explicit. Links point to project artifacts; the descriptions state the claims those artifacts can support, not broader claims about unobserved runtime behavior.

### 1. Global11 — Oracle relational model and OLAP documentation

**Methodology emphasis:** Analyze → Architect → Document. This evidence track complements the Oracle and enterprise-system documentation above; it is not a separate project.

| Methodology activity | Published evidence | What it supports | Boundary |
|---|---|---|---|
| Analyze source package and project inputs | [Oracle Global11 source inventory](https://github.com/ekatmoz88-alt/global11-demo-data-platform/blob/main/docs/sources/ORACLE-GLOBAL11-SOURCES.md) | Inventory of named archive files, sample-schema tables, installation scripts, and reviewed text materials | The DMP archive is listed but its internal contents are not represented as separately analyzed |
| Describe relational and analytical structures | [Global11 OLAP documentation](https://github.com/ekatmoz88-alt/global11-demo-data-platform/blob/main/docs/GLOBAL11-OLAP-DOCUMENTATION.md) | Documented relational source layer, dimensional modeling concepts, and analytical design patterns | The document distinguishes the real relational platform from conceptual OLAP design artifacts |
| Specify the target cube | [Cube_1111 final specification](https://github.com/ekatmoz88-alt/global11-demo-data-platform/blob/main/docs/model/CUBE-1111-FINAL-SPECIFICATION.md) | Consolidated design, submitted SQL/DDL, measure definitions, hierarchy patterns, and validation plan | Technical validation is explicitly pending; the document does not certify successful Oracle Analytic Workspace deployment |
| Publish data-model views | [Relational model](https://github.com/ekatmoz88-alt/global11-demo-data-platform/blob/main/docs/model/GLOBAL11-RELATIONAL-MODEL.md) · [ER diagram source](https://github.com/ekatmoz88-alt/global11-demo-data-platform/blob/main/docs/model/er-diagram.mmd) · [OLAP diagram source](https://github.com/ekatmoz88-alt/global11-demo-data-platform/blob/main/docs/model/olap-diagram.mmd) | The documented model and its visual representation | A diagram is a modeled view; physical constraints and runtime relationships require source DDL or database metadata |

**Case-study wording:** describe the work as analysis and documentation of the Global11 relational model and the design/specification of the Cube_1111 OLAP model. Do not describe Cube_1111 as deployed or technically validated.

### 2. PPO Territory / Deshifrator / UMMS — connected project contour, Oracle information base, and documented operations

**Methodology emphasis:** Analyze → Architect → Document.

| Methodology activity | Published evidence | What it supports | Boundary |
|---|---|---|---|
| Establish project and documentation scope | [Repository overview](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/README.md) | Scope of the public documentation set and its technical domains | The public repository is a documentation package, not the complete historical production environment |
| Classify the information base | [Database overview](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/territory-database/database/index.md) | Document-based inventory of 401 tables, grouping arithmetic, and distinction from a separate physical-structure document listing 381 entries | The 401-table distribution is not represented as a fresh query of the live Oracle catalog |
| Describe logical and physical data structures | [Logical structure model](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/territory-database/database/logical-structure-model.md) · [Physical structure specification](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/territory-database/database/physical-structure-specification.md) | Published descriptions of functional data areas, tables, fields, and indexes within the source-document scope | Do not infer unlisted constraints or runtime data quality |
| Relate source models and providers to database objects | [Source-code and models overview](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/territory-database/source-code/index.md) | Documented mappings between selected application models/providers and Oracle tables | Each mapping is limited to the analyzed code and documented examples |
| Describe API operations and data exchange | [API and operations](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/territory-database/api/index.md) | Known operation names, JSON/SQL/Oracle interaction context, and evidence gaps | This is not a complete external API contract; operation names must not be promoted to exact routes or schemas without source evidence |
| Connect architectural views | [Architecture overview](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/README.md) · [Architecture diagrams](https://github.com/ekatmoz88-alt/territory-descriptor-unified/tree/main/materials/architecture) | Documented system context, component views, and relationships between architecture, code, API, and database pages | Relationships marked as logical or inferred must retain those labels |

**Case-study wording:** present this as documentation and analysis of a real enterprise software system and its Oracle information base, based on available project documentation and source materials. Keep documented operations distinct from a fully reconstructed or independently exercised API contract.

### 3. Deshifrator workstation — source-based component and integration evidence (same project contour)

**Methodology emphasis:** Analyze → Architect → Document → Verify (within the scope of available source artifacts).

| Methodology activity | Published evidence | What it supports | Boundary |
|---|---|---|---|
| Define application-suite boundaries | [Repository overview and architecture boundary](https://github.com/ekatmoz88-alt/deshifrator-docs/blob/main/README.md) | Scope covering ModuleMobile, ModuleStationary, and Printer / PassportPaint | ПОСС, ПОМС, ПОШ ВБД, and Oracle GLOBAL11 are explicitly outside this repository's application boundary |
| Review components and dependencies | [Application-suite review](https://github.com/ekatmoz88-alt/deshifrator-docs/blob/main/docs/application-suite-review.md) · [Architecture](https://github.com/ekatmoz88-alt/deshifrator-docs/blob/main/docs/architecture.md) · [Dependencies and runtime](https://github.com/ekatmoz88-alt/deshifrator-docs/blob/main/docs/dependencies-and-runtime.md) | Selected component responsibilities, dependencies, workflows, and integration context described from available materials | The public source-review repository does not contain the complete original WPF source tree |
| Analyze the local data-access layer | [SQLite data-access review](https://github.com/ekatmoz88-alt/deshifrator-docs/blob/main/docs/data-access-review.md) · [Selected source files](https://github.com/ekatmoz88-alt/deshifrator-docs/tree/main/sources) | Source-based findings for the selected C# SQLite components | Five selected source files are review artifacts, not the full application source |
| Describe file exchange and MRZ | [File exchange and MRZ](https://github.com/ekatmoz88-alt/deshifrator-docs/blob/main/docs/data-exchange-and-mrz.md) | Documented file identifiers, transfer models, processing states, encryption component references, and MRZ-related code scope | Do not publish real exchange files or secrets; do not claim complete ICAO conformance without independent test evidence |
| Record evidence gaps and technical risks | [Repository completeness](https://github.com/ekatmoz88-alt/deshifrator-docs/blob/main/docs/repository-completeness.md) · [Risks and decisions](https://github.com/ekatmoz88-alt/deshifrator-docs/blob/main/docs/risks-and-decisions.md) | Explicit inventory of available and unavailable artifacts and unresolved verification work | Source review is not equivalent to full-system execution or hardware validation |

**Case-study wording:** describe the work as source-based analysis and documentation of selected desktop application components, data access, file exchange, and printing/MRZ functionality. Do not imply that the full original solution, physical printer driver, or complete runtime environment is present in the public repository.

### 4. Orders API — specification-driven REST API documentation and Docs-as-Code

**Methodology emphasis:** Architect → Document → Verify.

| Methodology activity | Published evidence | What it supports | Boundary |
|---|---|---|---|
| Define the API contract | [OpenAPI 3.1 specification](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/blob/main/openapi/openapi.yaml) | Declared endpoints, operations, schemas, security schemes, parameters, and response structures for Orders API | The specification is the documented contract; it does not independently prove current service behavior |
| Configure contract quality checks | [CI workflow](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/blob/main/.github/workflows/ci.yml) · [Spectral ruleset](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/blob/main/.spectral.yaml) · [Redocly configuration](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/blob/main/redocly.yaml) | Configured dependency installation, audit, Spectral and Redocly validation steps, and documentation build/deployment workflow | A workflow file proves configuration, not that a particular run passed |
| Publish rendered documentation | [API documentation portfolio](https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/) · [OpenAPI reference](https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/openapi/) | Public availability and rendered presentation of the documentation at the observed publication version | Publication does not establish endpoint availability or successful authenticated requests |
| Document related SOAP analysis separately | [Legacy SOAP API review](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/blob/main/legacy-soap-api-review.md) | A separately authored comparative review and migration recommendations | Do not treat recommendations as an implemented migration or as the SOAP contract for another project |

**Case-study wording:** describe the Orders API as an OpenAPI 3.1 documentation and Docs-as-Code portfolio project with configured contract-quality gates. State live-service behavior or successful request testing only when supported by a dated test record.

## Mapping evidence to the engineering lifecycle

| Stage | Typical evidence to show in a case study | Review criterion |
|---|---|---|
| **Analyze** | Source inventory, requirements, code review, schema inspection, API contract review, dependency analysis | The source and scope of each finding are identifiable |
| **Architect** | System context, component diagrams, ER models, navigation structure, content model, API information architecture | Boundaries and relationships are explicit; inferred links are labeled |
| **Document** | Architecture pages, data dictionaries, OpenAPI/WSDL descriptions, user guides, SQL examples, diagrams | The published content matches the relevant project and audience |
| **Verify** | Source-to-claim review, parser/linter output, test records, CI run, link checks, rendered-page inspection | The exact version, method, result, and limitations are recorded |

A single artifact may support more than one stage, but do not imply that the presence of an artifact proves the whole lifecycle was completed.

## Claim traceability record

For each material claim in a portfolio case study, retain a compact traceability record:

| Field | Required content |
|---|---|
| Claim | One factual statement about the project or work performed |
| Project boundary | Exact project, product, module, or subsystem |
| Source | Repository path or authoritative project source |
| Evidence location | Heading, symbol, operation, table, field, or line range |
| Evidence class | Primary, project documentation, derived analysis, validation, publication, or external reference |
| Interpretation | What conclusion is drawn from the source |
| Status | Verified, partially verified, inferred, or unresolved |
| Limitation | What the evidence does not establish |
| Portfolio location | Case study section or published page where the claim appears |

Example:

| Claim | Evidence | Status | Limitation |
|---|---|---|---|
| The OpenAPI file declares authenticated GET and POST operations for `/orders` | `openapi/openapi.yaml`, paths `/orders` | Verified as a specification statement | Does not establish successful execution against the live service |
| The Global11 OLAP cube design is documented | `docs/model/CUBE-1111-FINAL-SPECIFICATION.md` | Verified as documentation deliverable | Oracle Analytic Workspace validation remains pending |
| The desktop-suite documentation includes selected SQLite data-access source review | `docs/data-access-review.md` and selected files under `sources/` | Verified for the published selection | Does not establish completeness of the original application source |

## Portfolio evidence practices

- Link to the actual artifact whenever it can be published.
- Identify repository, path, version, and extraction context where relevant.
- Keep evidence attached to the project, product, and subsystem it actually describes.
- Distinguish implementation facts, documented design, derived interpretation, recommendations, and validation results.
- State limitations and unavailable verification next to the relevant claim, not only in a general disclaimer.
- Do not publish confidential documents, personal data, credentials, cryptographic key material, production records, or internal service addresses.
- Do not claim quantified business impact without supporting measurements.
- Do not describe a configured check as a passed check unless a corresponding run result is available.
- Do not describe a published specification as a tested runtime contract without execution evidence.

Similar technologies, shared integration points, or overlapping terminology do not justify merging separate project contexts. Preserve actual project and subsystem boundaries. In particular, keep the Global11 data model separate from the desktop application suite, and do not transfer UMMS/API claims between repositories unless a specific artifact establishes the relationship.

## Outcome claims

Describe completed work and deliverables directly. Claims about performance improvements, reduced support workload, adoption, operational reliability, or business impact require supporting measurements or other project evidence. Do not infer outcomes from the existence of documentation alone.
