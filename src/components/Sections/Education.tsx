const Education = () => (
  <section id="education" className="py-20 bg-gray-800">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="gradient-text">Education</span>
      </h2>
      <div className="space-y-6">
        <article className="bg-gray-700 rounded-xl p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <div>
              <h3 className="text-xl font-semibold">B.E. in Computer Engineering</h3>
              <p className="text-gray-300">Zeal College of Engineering and Research, Pune</p>
            </div>
            <p className="text-blue-300">2020–2024</p>
          </div>
          <p className="text-gray-400 mt-3">CGPA: 8.90/10</p>
        </article>
        <article className="bg-gray-700 rounded-xl p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <div>
              <h3 className="text-xl font-semibold">Higher Secondary Certificate (HSC)</h3>
              <p className="text-gray-300">SVM & Jr. College of Science, Kudase, Sindhudurg</p>
            </div>
            <p className="text-blue-300">2018–2020</p>
          </div>
          <p className="text-gray-400 mt-3">77.23%</p>
        </article>
      </div>
    </div>
  </section>
)

export default Education
