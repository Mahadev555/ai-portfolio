import profileImage from "../../assets/image.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center w-full">
        <div className="md:w-1/2 w-full mb-10 md:mb-0 min-w-0 flex flex-col items-center md:items-start">
          <div className="typewriter mb-6 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left text-white">
              Hi, I'm Mahadev Manerikar
            </h1>
          </div>
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-blue-400 text-center md:text-left"
            style={{
              borderRadius: "0.5rem",
              padding: "0.25rem 1rem",
              display: "inline-block",
              background: "rgba(31,41,55,0.7)",
            }}
          >
            AI Engineer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 text-center md:text-left">
            Building production-grade AI agents and RAG systems on Azure.
            Based in Pune, India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300 flex items-center justify-center shadow-lg"
            >
              <i className="fas fa-code mr-2"></i> View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition duration-300 flex items-center justify-center shadow-lg"
            >
              <i className="fas fa-paper-plane mr-2"></i> Contact Me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <SocialLink
              href="https://github.com/Mahadev555"
              icon="github"
              hoverColor="hover:bg-gray-700"
              label="GitHub"
            />
            <SocialLink
              href="http://linkedin.com/in/mahadev-manerikar-7636a3207/"
              icon="linkedin-in"
              hoverColor="hover:bg-blue-600"
              label="LinkedIn"
            />
            <SocialLink
              href="https://x.com/atharvx555"
              icon="twitter"
              hoverColor="hover:bg-blue-400"
              label="Twitter"
            />
            <SocialLink
              href="mailto:mahadevmanerikar@gmail.com"
              icon="envelope"
              hoverColor="hover:bg-red-500"
              label="Email"
            />
            <SocialLink
              href="tel:+917588373045"
              icon="phone"
              hoverColor="hover:bg-green-600"
              label="Phone"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center min-w-0">
          <div className="relative flex justify-center w-full">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gray-800 bg-opacity-80 border-4 border-blue-400 flex items-center justify-center shadow-xl mx-auto">
              <img
                src={profileImage}
                alt="Mahadev Manerikar"
                className="w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-gray-900"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({
  href,
  icon,
  hoverColor,
  label,
}: {
  href: string;
  icon: string;
  hoverColor: string;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white transition duration-300 ${hoverColor} shadow-md`}
  >
    <i
      className={`${
        icon === "envelope" || icon === "phone" ? "fa-solid" : "fa-brands"
      } fa-${icon} text-lg`}
    ></i>
  </a>
);

export default Hero;
