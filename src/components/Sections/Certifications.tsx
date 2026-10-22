const certifications = [
  {
    provider: 'Anthropic',
    title: 'Introduction to Model Context Protocol',
    icon: 'diagram-project',
  },
  {
    provider: 'DeepLearning.AI',
    title: 'LangChain for LLM Application Development',
    icon: 'link',
  },
]

const Certifications = () => (
  <section id="certifications" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        <span className="gradient-text">Certifications</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((certification) => (
          <article
            key={certification.title}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <div className="flex items-start">
              <i
                className={`fas fa-${certification.icon} text-3xl text-blue-400 mr-4`}
                aria-hidden="true"
              ></i>
              <div>
                <h3 className="text-xl font-semibold mb-2">{certification.title}</h3>
                <p className="text-gray-400">{certification.provider}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Certifications
