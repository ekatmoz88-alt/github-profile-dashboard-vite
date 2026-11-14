# Evidence and Traceability

The traceability model connects a documented statement to the evidence that supports it and to the review performed on that statement.

```mermaid
flowchart LR
    R["Requirement or documentation question"] --> E["Evidence artifact"]
    E --> F["Extracted technical fact"]
    F --> C["Documented claim"]
    C --> V["Verification activity"]
    V --> O["Review result"]
    O --> P["Published content"]
    V -->|"Insufficient or conflicting evidence"| G["Gap / uncertainty record"]
    G --> R
    E --- T1["Source code / specification / schema / metadata"]
    V --- T2["Static validation / test / expert review"]
```

## Traceability record

| Field | Purpose |
| --- | --- |
| Claim or topic ID | Identifies the documented statement or requirement |
| Source artifact | Identifies the file, specification, schema, or observation |
| Evidence location | Points to a section, symbol, operation, table, or line range |
| Interpretation | Records the conclusion drawn from the evidence |
| Verification method | States how the claim was checked |
| Status | Verified, partially verified, inferred, or unresolved |
| Document location | Identifies where the claim is published |

**Important:** a source artifact does not automatically prove runtime behavior. A specification describes a contract; source code shows implementation artifacts; runtime behavior requires suitable execution evidence.
