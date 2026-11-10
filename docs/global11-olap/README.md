# GLOBAL11 — Oracle Data Architecture & OLAP

**Status:** architecture draft; not an as-built database specification.

This documentation consolidates the Oracle data-model and OLAP design material discussed for the Global11 portfolio project. It deliberately distinguishes conceptual proposals from verified database objects.

## Documents

- [Database architecture review](database-architecture-review.md) — entity model, index strategy, partitioning, materialized view, OLAP grain and outstanding decisions.
- [Administrator guide](administrator-guide.md) — safe operational procedures for partition inspection, archival, MV refresh and statistics.
- [REST API specification](rest-api-specification.md) — known fields, conceptual mappings and missing contract decisions.
- [OpenAPI 3.1 draft](openapi-draft.yaml) — reusable request/response schemas only. Operation paths and HTTP methods are intentionally not invented because the supplied excerpt did not include them.
- [SOAP/XML integration specification](soap-integration-specification.md) — request example, field mapping and WSDL prerequisites.
- [SOAP CreateClaim request XSD](soap-create-claim-request.xsd) — request payload structure only; this is not a complete WSDL contract.
- [SQL design notes](sql-design-notes.sql) — reviewed illustrative SQL fragments. Not a migration script.

## Scope and evidence

The supplied materials describe a conceptual Oracle schema containing claim, person, branch, employee, document, insurance and reference-data entities. The proposed analytics view joins claims, persons, branches and claim details.

The following have **not** been confirmed against a live Oracle instance:

- Oracle version, edition, installed options and licensing;
- actual table/column names, keys, constraints and data types;
- production query workload and execution plans;
- successful creation and FAST refresh of `ARF_CASE_VIEW`;
- actual REST routes, HTTP methods, authentication and error payloads;
- SOAP namespace, binding, service address, response and fault definitions.

## Release gate

Do not run the SQL fragments as a production migration. Before implementation, confirm the target Oracle version and compare the design with the data dictionary. Oracle 11g does not support identity columns; use sequences and triggers or application-generated keys if 11g is the target.

The dashboard links to this documentation as a portfolio design study, not as proof of a deployed production system.
