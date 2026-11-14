# Project Evidence

## Purpose

This document defines how portfolio case studies connect project claims to real artifacts. It is an evidence framework, not a substitute for the source materials of each case.

## Case-study structure

1. **Project context** — system purpose, audience, scope, and technical environment.
2. **Documentation challenge** — the information or documentation problem addressed.
3. **Reference basis** — applicable standards, specifications, and professional references.
4. **Applied methodology** — analysis, information architecture, authoring, and verification activities.
5. **Documentation artifacts** — actual documents, source files, specifications, diagrams, and published materials.
6. **Verification** — checks performed and evidence available.
7. **Outcome** — completed deliverables and demonstrable improvements.

## Evidence categories

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

## Evidence discipline

- Link to the actual artifact whenever it can be published.
- Identify source version or extraction context when relevant.
- Separate directly observed facts from interpretation.
- State limitations and unavailable verification.
- Do not publish confidential documents, personal data, credentials, or production records.
- Do not claim quantified business impact without supporting measurements.

## Portfolio project boundaries

Keep evidence attached to the project and subsystem it actually describes. Similar technologies or shared integration points do not justify merging separate project contexts.

## Verification record

For each material claim, record the supporting artifact, what it demonstrates, what it does not demonstrate, and the review status.
