# Database & OLAP Documentation

## Purpose

Database documentation explains data structures, relationships, constraints, metadata, and analytical semantics. It distinguishes physical database facts from logical interpretation and business meaning.

## Relational database documentation

Document, where supported by evidence:

- Schemas, tables, views, and sequences.
- Columns, data types, defaults, and nullability.
- Primary keys, unique constraints, and foreign keys.
- Indexes and their declared columns.
- Relationships and dependency paths.
- Procedures, functions, triggers, and scheduled jobs.

Do not infer a foreign-key constraint from an index name or column naming pattern. Distinguish declared constraints from relationships inferred during analysis.

## Data models

- **Conceptual model:** domain entities and relationships.
- **Logical model:** attributes, keys, and normalized relationships.
- **Physical model:** database objects and implementation-specific details.

State the model's source, scope, and extraction or reverse-engineering method.

## OLAP documentation

Describe cubes, measure groups, dimensions, dimension usage, measures, aggregation functions, attributes, levels, hierarchies, role-playing dimensions, time semantics, and processing dependencies where applicable.

Explain analytical meaning only when supported by metadata, design artifacts, SQL, or confirmed business rules.

## Metadata

Record object names, descriptions, data types, identifiers, flags, and relationships as represented in the source. Explain vendor-specific flags only when a legend or authoritative reference supports the interpretation.

## Database-specific review

- Compare documented objects with DDL, data dictionary views, model files, or exported metadata.
- Check declared keys and relationships; do not treat indexes as declared foreign-key constraints.
- Validate object counts against a stated extraction scope.
- Separate observed metadata from inferred semantics.
- Record extraction date, source environment, and tool version when relevant.
- Exclude credentials, sensitive records, and restricted production data.

For general evidence classification, verification records, and release checks, see [Documentation Quality Assurance](documentation-quality-assurance.md).

A schema export demonstrates declared structure, not necessarily data quality, runtime performance, or business meaning.
