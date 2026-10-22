interface Role {
  title: string
  period: string
  products: {
    name: string
    details: string[]
  }[]
}

const roles: Role[] = [
  {
    title: 'AI Engineer | Equations Work, Pune',
    period: 'October 2024 – Present',
    products: [
      {
        name: 'Content Discovery Workflow',
        details: [
          'Moved the workflow from hosted agents to merged LangChain agents after comparing three designs, reducing production response time from 15 seconds to 6 seconds.',
          'Built LLM-as-a-judge evaluation for search, context, intent, and instructor agents, plus hallucination measurement that helped reduce search-tool hallucinations from 8.2% to 2.2%.',
          'Implemented semantic search indexes, language-based index selection, conversation state, and per-agent token and cost tracking.',
          'Resolved a production conversation API timeout for users with millions of records using cursor-based pagination.',
          'Added web search, live-event, English, and Italian agents, and published reusable shared packages.',
        ],
      },
      {
        name: 'AI Incident Orchestration Platform',
        details: [
          'Built a multi-agent incident-resolution platform that uses operational logs and incident records to help support engineers investigate and resolve issues.',
          'Designed specialist agents for log analysis, incident similarity, root-cause analysis, severity scoring, ticket updates, and notifications, coordinated by an orchestrator.',
          'Added data-leakage and unsafe-output guardrails, plus grounding verification.',
          'Implemented ServiceNow MCP servers with SSE and stdio transports, streaming agent chat, authentication, and observability across Azure Monitor, OpenTelemetry, and Splunk.',
        ],
      },
      {
        name: 'Enterprise RAG Assistant',
        details: [
          'Designed hybrid vector-and-keyword retrieval over 1,000+ enterprise documents to improve relevance and reduce hallucinations.',
          'Automated document ingestion with cloud functions and object storage to keep the search index synchronized.',
        ],
      },
      {
        name: 'Property Intelligence Platform',
        details: [
          'Built data extraction, ETL, and ranking pipelines that help investors find insights across financial and property data.',
          'Automated investor-ready report generation, saving more than 8 hours of manual work each week.',
          'Secured services with managed identity and secret management, then containerized and deployed them through CI/CD.',
        ],
      },
    ],
  },
  {
    title: 'Trainee Software Engineer | Equations Work, Pune',
    period: 'March 2024 – October 2024',
    products: [
      {
        name: 'AI Sales Coaching Proof of Concept',
        details: [
          'Created an orchestrator, sentiment-analysis agent, and email agent for a sales-coaching workflow.',
          'Connected business data through workflow automation and synchronized email activity with the CRM.',
          'Presented the stakeholder demo and documented the system architecture and flow.',
        ],
      },
      {
        name: 'Vehicle Service Tracking Proof of Concept',
        details: [
          'Developed a real-time vehicle monitoring application with live tracking, automated email notifications, and an event-driven dashboard.',
          'Wrote a PostgreSQL stored procedure to calculate the time vehicles spend in each zone.',
        ],
      },
    ],
  },
]

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Professional <span className="gradient-text">Experience</span>
      </h2>
      <div className="space-y-12">
        {roles.map((role) => (
          <section key={role.title} className="border-l-2 border-blue-400 pl-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-6">
              <h3 className="text-2xl font-semibold">{role.title}</h3>
              <p className="text-blue-300">{role.period}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {role.products.map((product) => (
                <article key={product.name} className="bg-gray-800 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">{product.name}</h4>
                  <ul className="space-y-2 list-disc list-inside text-gray-300">
                    {product.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="mt-12 bg-gray-800 rounded-xl p-6 border border-yellow-500/40">
        <h3 className="text-xl font-semibold text-yellow-300 mb-2">Award</h3>
        <p className="font-medium">Unstoppable Contributor Award | Equations Work</p>
        <p className="text-gray-400 mt-1">
          2025–2026 · Recognized for agent latency reduction, evaluation framework development, and production defect resolution.
        </p>
      </div>
    </div>
  </section>
)

export default Experience
