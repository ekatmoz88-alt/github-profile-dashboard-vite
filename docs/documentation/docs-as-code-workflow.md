# Docs-as-Code Workflow

## Purpose

Docs-as-Code applies software engineering practices to documentation source: version control, review, validation, and repeatable publication. The workflow should match the actual repository and CI configuration.

## Source organization

- Store editable documentation in text-based formats such as Markdown, YAML, and diagram source.
- Keep navigation and project boundaries explicit.
- Use descriptive filenames and stable relative links.
- Store generated output separately from source where appropriate.
- Exclude secrets, credentials, and restricted materials.

## Git workflow

A typical workflow is:

1. Create a focused branch for a change.
2. Edit source files.
3. Review the diff for accuracy, scope, and unintended changes.
4. Run available local checks.
5. Open a pull request or submit the change for review.
6. Address review findings.
7. Merge and publish through the configured workflow.

The exact branching and approval rules are repository-specific.

## Validation and CI/CD

Possible automated checks include Markdown linting, link checking, YAML parsing, OpenAPI linting, spell and terminology checks, and documentation builds. Run only checks configured for the project and report their actual result.

A CI workflow may validate source, build a static documentation site, and publish it to a hosting target. Document triggers, required permissions, build commands, output directories, and deployment target from the workflow configuration.

A successful build establishes only that the configured build steps completed. It does not prove technical correctness of the content. See [Documentation Quality Assurance](documentation-quality-assurance.md) for the full verification model.

## Maintenance

Keep dependencies and action versions current, review broken links, preserve reproducible build instructions, and update documentation when the underlying system or contract changes.
