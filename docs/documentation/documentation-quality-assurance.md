# Documentation Quality Assurance

## Purpose

Quality assurance is continuous and combines technical verification, editorial review, structural checks, and publication checks. No single automated tool can establish all dimensions of documentation quality.

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

## Verification layers

1. **Source verification:** compare statements with specifications, source code, metadata, configuration, or confirmed behavior.
2. **Technical review:** ask a subject matter expert to review domain-specific interpretation where available.
3. **Structural validation:** check headings, links, navigation, tables, code blocks, and metadata.
4. **Specification validation:** lint or parse OpenAPI, WSDL/XSD, YAML, and other machine-readable artifacts with suitable tools.
5. **Editorial review:** check terminology, grammar, clarity, and consistency.
6. **Publication review:** inspect the rendered output and verify that the intended version is published.

## Evidence levels

Record what was actually checked. For example, a parser validates syntax; it does not confirm that an API endpoint exists in production. A source-code review can support statements about implementation paths but may not establish runtime behavior. A screenshot supports visible UI state, not hidden processing logic.

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
