# Documentation Quality Assurance, Evidence & Traceability

## Purpose

This document is the canonical reference for evaluating documentation quality, substantiating technical claims, recording verification, and deciding whether content is ready for publication.

Quality assurance is continuous. It combines technical verification, editorial review, structural checks, and publication checks. No single automated tool can establish every dimension of documentation quality.

## Quality dimensions

| Dimension | Review question |
|---|---|
| Accuracy | Does the content match authoritative technical evidence? |
| Completeness | Are required functions, interfaces, and workflows covered? |
| Consistency | Are terms, names, and structures used uniformly? |
| Usability | Can the intended audience complete its task? |
| Traceability | Can important claims be connected to their sources? |
| Maintainability | Can the content be updated without avoidable duplication? |
| Accessibility | Is the content readable and navigable? |

## Evidence model

Classify evidence according to what it can actually demonstrate.

| Evidence | Can support | Does not prove by itself |
|---|---|---|
| Source code | Implemented code paths and declared logic | Successful production behavior |
| API contract (OpenAPI / WSDL / XSD) | Declared interface structure | Deployed service availability |
| Database DDL / metadata | Declared objects and constraints | Business meaning or data quality |
| Architecture diagram | The modeled view and its stated source | Every runtime interaction |
| UI screenshot | Visible interface and state | Hidden processing logic |
| CI workflow and run | Configured checks and recorded run result | Technical correctness of all content |
| Published documentation | Availability and rendered content | Accuracy without review |
| SME confirmation | Confirmed domain interpretation within its scope | Unrelated implementation details |

A source artifact does not automatically prove runtime behavior. A specification describes a contract; source code shows implementation artifacts; runtime behavior requires suitable execution evidence.

## Claim traceability

For each material technical claim, record the information needed to locate and assess its supporting evidence:

| Field | Purpose |
|---|---|
| Claim or topic ID | Identifies the documented statement or requirement |
| Source artifact | Identifies the file, specification, schema, or observation |
| Evidence location | Points to a section, symbol, operation, table, or line range |
| Interpretation | Records the conclusion drawn from the evidence |
| Verification method | States how the claim was checked |
| Status | Verified, partially verified, inferred, or unresolved |
| Document location | Identifies where the claim is published |

Separate directly observed facts from interpretation. Label assumptions and unresolved questions rather than presenting them as established facts.

## Verification layers

1. **Source verification:** compare statements with specifications, source code, metadata, configuration, or confirmed behavior.
2. **Technical review:** ask a subject matter expert to review domain-specific interpretation where available.
3. **Structural validation:** check headings, links, navigation, tables, code blocks, and metadata.
4. **Specification validation:** lint or parse OpenAPI, WSDL/XSD, YAML, and other machine-readable artifacts with suitable tools.
5. **Editorial review:** check terminology, grammar, clarity, and consistency.
6. **Publication review:** inspect the rendered output and verify that the intended version is published.

Record what was actually checked. A parser validates syntax; it does not confirm that an API endpoint exists in production. A source-code review can support statements about implementation paths but may not establish runtime behavior. A screenshot supports visible UI state, not hidden processing logic.

## Defect handling

Record the affected page or artifact, observed issue, source of truth, impact, proposed correction, owner, and status. Keep unresolved questions visible until confirmed.

## Release checklist

- Technical claims have authoritative support.
- Unverified interpretations are labeled.
- Examples and diagrams match the documented scope.
- Links and navigation work.
- Machine-readable specifications pass configured checks.
- Rendered pages are reviewed.
- Version and publication state are clear.
