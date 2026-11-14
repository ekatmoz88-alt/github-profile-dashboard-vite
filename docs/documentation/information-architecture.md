# Information Architecture

## Purpose

Information architecture (IA) defines how documentation is grouped, labeled, connected, and navigated so each audience can find information and complete tasks.

## Design principles

- Organize content around audience needs and tasks.
- Separate conceptual explanations, procedures, reference information, and troubleshooting.
- Use stable names for systems, components, interfaces, and data entities.
- Keep navigation predictable and minimize overlapping pages.
- Make relationships between related documents explicit.
- Preserve project, product, and subsystem boundaries.
- Provide entry points for both task-oriented and system-oriented navigation.

## Audience model

| Audience | Typical information need |
|---|---|
| End user | Tasks, workflows, expected results, recovery steps |
| Operator | Routine operations, monitoring, operational procedures |
| Administrator | Configuration, access, maintenance, troubleshooting |
| Developer / integrator | API contracts, schemas, dependencies, integration behavior |
| Architect / analyst | System context, components, data flows, constraints |

Each document should identify its primary audience, even when it serves several groups.

## Content model

A documentation set may include overview and scope, concepts and terminology, architecture, procedures, API and data reference, configuration, troubleshooting, and maintenance information.

## Navigation

1. Provide a landing page with scope and clear entry points.
2. Group pages by stable subject areas.
3. Link concepts to procedures and reference pages.
4. Link interface descriptions to schemas and examples.
5. Keep navigation and cross-references current.
6. Mark deprecated and historical material explicitly.

## Traceability

Where practical, connect documentation pages to source artifacts, specification versions, diagrams, or review records. A link should clarify what the source supports without overstating its evidential value.

## Review checklist

- Can each audience identify its entry point?
- Are similarly named concepts clearly distinguished?
- Are procedures separated from reference material?
- Are duplicate descriptions minimized?
- Are links and navigation current?
- Are system boundaries clear?
