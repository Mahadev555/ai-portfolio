interface Project {
  icon: string
  title: string
  description: string
  technologies: string[]
}

const projects: Project[] = [
  {
    icon: 'diagram-project',
    title: 'Agent Orchestration Platform',
    description:
      'A multi-user platform where agent and team configurations live in a database and are assembled at runtime. Users can configure tools and models, compose coordinated teams, and share agents without redeploying. Runs stream over SSE and record status, token usage, and duration.',
    technologies: ['Agno', 'FastAPI', 'React', 'PostgreSQL', 'SSE'],
  },
  {
    icon: 'file-lines',
    title: 'DocVision RAG',
    description:
      'A multimodal document-search platform for PDFs containing diagrams, flowcharts, and screenshots. It analyzes extracted images, preserves their context during chunking, and returns answers with cited pages and source images.',
    technologies: ['RAG', 'Python', 'Vision Models', 'Vector Search', 'SSE'],
  },
  {
    icon: 'ticket',
    title: 'ServiceNow MCP Server',
    description:
      'An MCP server that exposes ServiceNow ticket workflows to AI agents through create, retrieve, update, and delete operations, with both stdio and SSE transports.',
    technologies: ['Python', 'MCP', 'SSE', 'ServiceNow'],
  },
]

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Selected <span className="gradient-text">Projects</span>
      </h2>
      <p className="text-gray-400 text-center mb-16">
        Independent products and tools I have built.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project-card rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition duration-300 card-hover"
          >
            <i className={`fas fa-${project.icon} text-3xl text-blue-400 mb-3`} aria-hidden="true"></i>
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded-full"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
