const skillGroups = [
  {
    title: 'Languages',
    icon: 'code',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'AI & Generative AI',
    icon: 'brain',
    skills: [
      'LLMs',
      'Prompt Engineering',
      'RAG',
      'Embeddings & Vector Search',
      'Agentic & Multi-Agent Systems',
      'LangGraph',
      'LangChain',
      'MCP',
      'Microsoft Agent Framework',
      'Agno',
      'Azure AI Foundry',
      'Azure AI Search',
      'PGVector',
      'Guardrails',
    ],
  },
  {
    title: 'Evaluation & Observability',
    icon: 'chart-line',
    skills: [
      'LLM-as-a-Judge',
      'Azure AI Evaluation SDK',
      'Relevance & Groundedness Metrics',
      'OpenTelemetry',
      'Azure Application Insights',
      'Cost & Latency Tracing',
    ],
  },
  {
    title: 'Backend & Data',
    icon: 'server',
    skills: [
      'FastAPI',
      'REST APIs',
      'Node.js',
      'React',
      'WebSockets',
      'SSE',
      'SQLAlchemy',
      'PostgreSQL',
      'SQL Server',
      'Cosmos DB',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    skills: [
      'Azure Container Apps',
      'Azure Functions',
      'Logic Apps',
      'App Service',
      'API Management',
      'Key Vault',
      'Managed Identity',
      'MSAL',
      'Blob Storage',
      'Docker',
      'Azure DevOps CI/CD',
    ],
  },
]

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Technical <span className="gradient-text">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <article key={group.title} className="bg-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-5 text-blue-300 flex items-center">
              <i className={`fas fa-${group.icon} mr-3`} aria-hidden="true"></i>
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-gray-800 text-gray-200 px-3 py-2 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
