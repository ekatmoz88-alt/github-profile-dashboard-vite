# Documentation Standards, Specifications & Selection Criteria

## Purpose

This document defines how standards, specifications, and editorial references are selected for a documentation project. Listing a reference does not imply certification or formal compliance.

## Reference framework

| Domain | Reference | Intended application |
|---|---|---|
| User documentation | ISO/IEC/IEEE 26514 | Planning and developing information for users |
| REST APIs | OpenAPI Specification | HTTP API contracts and reference |
| SOAP services | WSDL 1.1, SOAP 1.2, XML Schema | Service operations and XML messages |
| Architecture | C4 Model, UML | System context, structure, and interactions |
| Structured authoring | DITA XML | Topic-based authoring and reuse |
| Content organization | Diátaxis | Tutorials, how-to guides, reference, explanation |
| Editorial guidance | Microsoft Writing Style Guide | Clarity, terminology, consistency |
| Developer writing | Google Developer Documentation Style Guide | Developer-oriented content |
| Source formats | Markdown, AsciiDoc | Structured, version-controlled source |

## Selection criteria

Select references based on artifact type, audience, technical domain, authoritative source, tooling support, version compatibility, and project constraints.

## Application rules

- Use OpenAPI for HTTP APIs when it accurately represents the interface contract.
- Use WSDL and XML Schema for SOAP contracts and XML message structures.
- Do not treat OpenAPI as a replacement for WSDL or XSD.
- Choose C4 or UML views according to the architectural question being answered.
- Apply editorial guides as writing guidance, not as substitutes for technical specifications.
- Record specification versions when version differences affect interpretation.
- Distinguish guidance from requirements formally adopted by a project.

## Compliance language

Use **based on** when a reference informed the approach; **uses** when the artifact demonstrably uses it; **validated against** when a defined validation was performed; and **compliant with** only when scope and requirements have been assessed and evidence supports the claim.

## Project-level record

For each project, record the reference, version, scope, reason for selection, validation method, and known deviations. Never infer compliance from a file format or a standards name alone.
