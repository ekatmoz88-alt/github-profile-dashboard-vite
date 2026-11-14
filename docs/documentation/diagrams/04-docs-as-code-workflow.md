# Docs-as-Code Workflow

This workflow shows a typical Git-based documentation delivery pipeline. Exact checks and deployment steps depend on repository configuration.

```mermaid
flowchart TD
    A["Author source files<br/>Markdown / OpenAPI / diagrams"] --> B["Commit changes"]
    B --> C["Open pull request"]
    C --> D["Automated checks"]
    D --> D1["Lint and style"]
    D --> D2["Specification validation"]
    D --> D3["Links and build"]
    D1 --> E{"Checks pass?"}
    D2 --> E
    D3 --> E
    E -->|"No"| F["Fix and update changes"]
    F --> B
    E -->|"Yes"| G["Technical and editorial review"]
    G --> H{"Approved?"}
    H -->|"No"| F
    H -->|"Yes"| I["Merge"]
    I --> J["Build and publish"]
    J --> K["Monitor and maintain"]
```

## Workflow controls

- Review changes through version control.
- Validate structured specifications with the relevant validators.
- Run linting, link checks, and documentation builds where configured.
- Treat a successful pipeline as evidence that configured checks passed, not as proof of technical correctness.
- Record publication failures and maintenance changes.
