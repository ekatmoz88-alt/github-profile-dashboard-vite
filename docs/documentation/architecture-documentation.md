# System Architecture Documentation

## Purpose

Architecture documentation communicates system boundaries, responsibilities, components, interfaces, dependencies, and runtime interactions. Each view should answer a defined architectural question.

## Establish scope

Identify the system purpose, documented boundary, external actors and neighboring systems, included and excluded components, operating context, interfaces, exchanged data, constraints, and assumptions.

Keep distinct systems and projects separate. A shared integration, database, or product family does not by itself make them one deployable system.

## Architecture views

| View | Question answered | Typical notation |
|---|---|---|
| System context | Who uses the system and what surrounds it? | C4 System Context |
| Container / application structure | What deployable applications or data stores exist? | C4 Container |
| Component structure | What responsibilities exist inside a container? | C4 Component, UML |
| Runtime interaction | How do components collaborate in a scenario? | UML Sequence |
| Static structure | What entities and relationships are defined? | UML Class, ERD |
| Deployment | Where do software elements run? | UML Deployment, infrastructure views |

## Diagram quality

- Give each diagram a clear title, scope, and level of detail.
- Define boundaries and distinguish internal from external elements.
- Label relationships with meaningful verbs or protocols where known.
- Keep names consistent with source code and specifications.
- Avoid implying direction, ownership, or runtime sequence without evidence.
- Provide a legend for non-obvious symbols and abbreviations.
- Link diagrams to explanatory text and relevant source artifacts.

## Evidence and review

Record the basis of each architecture view (for example, source code, deployment configuration, specifications, existing diagrams, interviews, or observed runtime behavior). Mark inferred or unresolved relationships explicitly.

For evidence levels and rules governing what a diagram can substantiate, see [Documentation Quality Assurance](documentation-quality-assurance.md).

A diagram is a model of selected aspects of a system, not proof of every runtime behavior.
