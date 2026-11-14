# API Documentation Design

## Purpose

API documentation describes REST and SOAP interfaces according to their actual contracts. Contract-level facts must be distinguished from runtime behavior and implementation details.

## REST APIs

Document, where applicable:

- Base URLs and environments.
- Resources, paths, and HTTP methods.
- Path, query, and header parameters.
- Request bodies and response schemas.
- Status codes and error structures.
- Authentication and authorization.
- Pagination, filtering, sorting, and idempotency.
- Examples consistent with the declared schemas.

### OpenAPI

Use the OpenAPI Specification to describe supported HTTP API contracts. Keep YAML or JSON source version-controlled and validate it with an appropriate parser, linter, or validator.

A useful description includes metadata, servers, paths, operations, parameters, request bodies, responses, reusable schemas, security schemes, and examples.

Do not invent endpoints, fields, status codes, or authentication flows to make a specification appear complete. Record unknowns for confirmation.

## SOAP APIs

Use the applicable WSDL and XML Schema definitions as primary contract artifacts. Document service and port definitions, bindings, operations, SOAP version, message structures, namespaces, schema imports, faults, transport behavior, and security mechanisms where evidenced.

WSDL, XSD, and representative SOAP messages are related but distinct artifacts. Prose does not replace the service contract.

## REST and SOAP are not interchangeable

OpenAPI describes HTTP APIs and can represent many REST-style interfaces. SOAP contracts are typically described through WSDL and XML Schema. Do not translate one format into another without preserving semantics and recording limitations.

## API-specific review

- Check operation identifiers, paths, methods, parameters, schemas, and references.
- Validate examples against schemas where tooling permits.
- Compare descriptions with authoritative service contracts.
- Record unresolved contract questions.
- Verify runtime behavior separately when a test environment is available.

For general evidence levels, validation boundaries, review records, and release checks, use [Documentation Quality Assurance](documentation-quality-assurance.md).

A valid specification proves the structure of that artifact; it does not alone prove deployed service behavior.
