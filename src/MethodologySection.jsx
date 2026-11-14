import './methodology.css';

const stages = [
  {
    number: '01',
    name: 'Analyze',
    title: 'Technical analysis',
    description: 'Investigate source materials, software interfaces, API contracts, database models, metadata and existing documentation.',
    output: 'Verified technical facts and a source map',
  },
  {
    number: '02',
    name: 'Architect',
    title: 'Documentation architecture',
    description: 'Design information architecture, content structure, terminology, navigation and relationships between technical materials.',
    output: 'A coherent documentation structure and information model',
  },
  {
    number: '03',
    name: 'Document',
    title: 'Documentation development',
    description: 'Create API references, architecture descriptions, data models, integration specifications and user or administrator guides.',
    output: 'Structured content for defined audiences',
  },
  {
    number: '04',
    name: 'Verify',
    title: 'Quality verification',
    description: 'Validate content against specifications and source artifacts; review examples, terminology, completeness and consistency.',
    output: 'Traceable, reviewable and maintainable documentation',
  },
];

const diagrams = [
  {
    title: 'Documentation Engineering Lifecycle',
    description: 'Analyze → Architect → Document → Verify, including feedback loops.',
    file: '01-documentation-engineering-lifecycle.md',
  },
  {
    title: 'Documentation Architecture',
    description: 'From authoritative sources to structured, published documentation.',
    file: '02-documentation-architecture.md',
  },
  {
    title: 'Evidence & Traceability',
    description: 'How documented claims connect to source artifacts and verification.',
    file: '03-evidence-and-traceability.md',
  },
  {
    title: 'Docs-as-Code Workflow',
    description: 'Authoring, Git review, automated checks, build and publication.',
    file: '04-docs-as-code-workflow.md',
  },
];

const diagramBase = 'https://github.com/ekatmoz88-alt/github-profile-dashboard-vite/blob/main/docs/documentation/diagrams/';

const principles = [
  'Evidence-based content',
  'Audience-oriented structure',
  'Source-to-document traceability',
  'Consistent terminology',
  'Reusable content',
];

const capabilities = [
  'REST & SOAP APIs',
  'OpenAPI / WSDL / XML',
  'Enterprise architecture',
  'Database & OLAP models',
  'Docs-as-Code',
  'Technical quality assurance',
];

export default function MethodologySection() {
  return (
    <section className="methodology-section" aria-labelledby="methodology-title">
      <div className="methodology-heading">
        <div>
          <p className="eyebrow">DOCUMENTATION ARCHITECTURE &amp; ENGINEERING METHODOLOGY</p>
          <h2 id="methodology-title">From system analysis to verified documentation</h2>
        </div>
        <p className="methodology-intro">
          Technical documentation is an engineering discipline: it connects system
          investigation, information architecture, content development and quality
          assurance in one traceable workflow.
        </p>
      </div>

      <div className="methodology-flow">
        {stages.map((stage, index) => (
          <article className="methodology-stage" key={stage.number}>
            <div className="methodology-stage-top">
              <span className="methodology-number">{stage.number}</span>
              {index < stages.length - 1 && <span className="methodology-connector" aria-hidden="true" />}
            </div>
            <p className="methodology-stage-label">{stage.name}</p>
            <h3>{stage.title}</h3>
            <p className="methodology-stage-description">{stage.description}</p>
            <div className="methodology-output">
              <span>DELIVERABLE</span>
              <p>{stage.output}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="methodology-diagrams">
        <div className="methodology-diagrams-heading">
          <p className="eyebrow">VISUAL FRAMEWORK</p>
          <h3>Methodology diagrams</h3>
        </div>
        <div className="methodology-diagram-links">
          {diagrams.map((diagram) => (
            <a
              className="methodology-diagram-link"
              href={`${diagramBase}${diagram.file}`}
              key={diagram.file}
              target="_blank"
              rel="noreferrer"
            >
              <strong>{diagram.title}</strong>
              <span>{diagram.description}</span>
              <em>View Mermaid diagram ↗</em>
            </a>
          ))}
        </div>
      </div>

      <div className="methodology-foundation">
        <div className="methodology-principles">
          <p className="eyebrow">CORE PRINCIPLES</p>
          <div className="methodology-chips">
            {principles.map((principle) => <span key={principle}>{principle}</span>)}
          </div>
        </div>
        <div className="methodology-capabilities">
          <p className="eyebrow">DOCUMENTATION SCOPE</p>
          <div className="methodology-chips">
            {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
