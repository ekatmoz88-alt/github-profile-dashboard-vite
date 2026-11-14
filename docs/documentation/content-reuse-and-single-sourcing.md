# Content Reuse & Single-Sourcing

## Purpose

Content reuse reduces unnecessary duplication and helps maintain consistency across related documents. Reuse should be deliberate: shared content is valuable only when its meaning remains valid for every audience and context.

## Reuse candidates

Good candidates include stable terminology, repeated prerequisites, common configuration explanations, shared warnings, reusable API schema definitions, and standard procedure fragments.

Avoid reusing content when the audience, context, version, or behavior differs materially.

## Reuse patterns

- **Reusable topic:** a self-contained explanation or procedure linked from multiple places.
- **Shared reference data:** a canonical glossary, schema, or parameter definition.
- **Template:** a consistent structure for recurring document types.
- **Single-sourced value:** one maintained definition rendered in multiple outputs by supported tooling.
- **Cross-reference:** a link to the authoritative page instead of copying its content.

## Governance

- Assign one authoritative location to shared content.
- Define ownership and review responsibility.
- Keep reusable units small enough to maintain independently.
- Avoid excessive conditional text and complex variants.
- Track version and applicability where content differs by product release.
- Check links and generated outputs after changes.

## Tooling considerations

Single-sourcing requires compatible authoring and publishing tooling. Markdown links and shared snippets can support basic reuse, while DITA and other structured authoring systems provide more formal mechanisms. Do not claim automated single-sourcing unless the repository implements it.

## Quality checks

Confirm that reused content remains accurate in every context, has no conflicting local copies, and can be traced to its canonical source.
