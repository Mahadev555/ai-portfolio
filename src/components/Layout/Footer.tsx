const Footer = () => {
  const socialLinks = [
    { icon: "github", href: "https://github.com/Mahadev555" },
    { icon: "linkedin-in", href: "http://linkedin.com/in/mahadev-manerikar-7636a3207/" },
    { icon: "twitter", href: "https://x.com/atharvx555" },
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold gradient-text">Mahadev Manerikar</span>
            <p className="text-gray-400 text-sm mt-1">AI Engineer | Multi-agent Systems & RAG</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className={`fab fa-${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Mahadev Manerikar. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#home" className="text-gray-400 hover:text-white text-sm transition duration-300">
              <i className="fas fa-arrow-up mr-1"></i> Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
