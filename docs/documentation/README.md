# Documentation Architecture & Engineering

## Engineering Methodology for Complex Software Systems

Technical documentation is an engineering discipline connecting system analysis, information architecture, technical content development, and quality assurance.

The methodology follows four iterative stages:

**Analyze → Architect → Document → Verify**

It is intended to make complex software systems understandable, navigable, verifiable, and maintainable through structured technical information.

## Methodology

| Stage | Focus | Typical outputs |
|---|---|---|
| **Analyze** | Investigate system functionality, source artifacts, data structures, API contracts, dependencies, and information gaps. | Technical findings, source inventory, contract and data analysis |
| **Architect** | Define audiences, information structure, document types, terminology, navigation, and content relationships. | Information architecture, content model, navigation, templates |
| **Document** | Develop accurate, task-oriented architecture, API, database, integration, user, and administrator documentation. | Structured documentation, specifications, diagrams, guides |
| **Verify** | Review technical accuracy, completeness, consistency, usability, and publication quality. | Review findings, validation records, approved content |

The stages are iterative. Verification findings may require further analysis or changes to the documentation architecture.

## Core principles

- **Evidence-based:** distinguish source facts, observed behavior, interpretation, and unresolved assumptions.
- **Audience-oriented:** organize information around the tasks and knowledge needs of its readers.
- **Consistent:** use stable terminology and preserve system, product, and subsystem boundaries.
- **Modular:** reuse content only where its meaning remains valid across contexts.
- **Specification-driven:** document each interface according to its actual contract; OpenAPI does not replace WSDL or XML Schema.
- **Continuously verified:** combine technical review, appropriate automated checks, and rendered-output inspection.

Detailed rules are maintained in the relevant topic documents:
- [Documentation standards and selection criteria](documentation-standards.md)
- [Information architecture](information-architecture.md)
- [API documentation design](api-documentation-design.md)
- [Database and OLAP documentation](database-documentation.md)
- [System architecture documentation](architecture-documentation.md)
- [User and administrator documentation](user-documentation.md)
- [Docs-as-Code workflow](docs-as-code-workflow.md)
- [Content reuse and single-sourcing](content-reuse-and-single-sourcing.md)
- [Quality assurance, evidence, and traceability](documentation-quality-assurance.md)
- [Project evidence and case-study structure](project-evidence.md)
- [References and professional resources](references.md)

## Application across project domains

| Domain | Documentation focus | Portfolio evidence |
|---|---|---|
| Enterprise software | Functionality, components, dependencies, workflows, configuration | ППО «Территория» |
| Database and OLAP | Relational structures, facts, dimensions, measures, hierarchies, metadata | Global11; Cube_1111 metadata analysis |
| APIs and integration | REST and SOAP contracts, operations, messages, schemas, authentication, data exchange | UMMS SOAP/WSDL/XML Schema analysis; REST API documentation portfolio |
| System architecture | Boundaries, components, dependencies, data and integration flows | Enterprise software architecture materials |
| Docs-as-Code | Version-controlled sources, validation, review, publication, maintenance | GitHub documentation repositories and dashboard |

Project-specific tools, implementation details, validation results, and outcomes are described only where supported by the corresponding project artifacts.

## Visual methodology diagrams

The diagrams provide complementary views of the process and its supporting structures. Each page contains editable Mermaid source.

| Diagram | Purpose |
|---|---|
| [Documentation Engineering Lifecycle](diagrams/01-documentation-engineering-lifecycle.md) | Stages and feedback loops |
| [Documentation Architecture](diagrams/02-documentation-architecture.md) | Flow from source material to maintained documentation |
| [Evidence & Traceability](diagrams/03-evidence-and-traceability.md) | Relationship between source artifacts, claims, and verification |
| [Docs-as-Code Workflow](diagrams/04-docs-as-code-workflow.md) | Git-based authoring, review, checks, and publication |

## Professional objective

The objective is to transform complex technical knowledge into structured, reliable, and maintainable documentation that connects system implementation, architecture, interfaces, and the people who use and maintain them.
