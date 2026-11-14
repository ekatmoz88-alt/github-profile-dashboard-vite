# Documentation Architecture

This view describes the logical flow from authoritative technical sources to maintained documentation products. It is a conceptual model; an individual project may use only some source types or publication targets.

```mermaid
flowchart TB
    subgraph SOURCES["Authoritative and supporting sources"]
      S1["Source code"]
      S2["API contracts<br/>OpenAPI / WSDL / XSD"]
      S3["Database metadata<br/>DDL / catalog / DMRS"]
      S4["Specifications and manuals"]
      S5["SME and verified runtime observations"]
    end
    subgraph MODEL["Documentation information model"]
      M1["Evidence inventory"]
      M2["Terminology and entities"]
      M3["Relationships and traceability"]
      M4["Audience and task model"]
    end
    subgraph CONTENT["Structured documentation"]
      C1["Architecture descriptions"]
      C2["API and integration reference"]
      C3["Database and data model reference"]
      C4["User and administrator guides"]
    end
    subgraph DELIVERY["Delivery and maintenance"]
      D1["Version-controlled source"]
      D2["Validation and review"]
      D3["Published documentation"]
      D4["Change and maintenance cycle"]
    end
    SOURCES --> M1
    M1 --> M2
    M2 --> M3
    M3 --> CONTENT
    M4 --> CONTENT
    CONTENT --> D1 --> D2 --> D3 --> D4
    D4 -. "change triggers re-analysis" .-> SOURCES
```

## Architectural rules

- Keep source evidence distinct from authored interpretation.
- Organize content by audience, task, and information type.
- Link related entities and documents through stable identifiers and references where practical.
- Select formats and publication tooling according to the project, not by default.
