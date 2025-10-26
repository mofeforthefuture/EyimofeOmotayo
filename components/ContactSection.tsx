export function ContactSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-900 to-black min-h-screen p-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-5xl font-bold text-white mb-12"
          style={{ fontFamily: "Menante, sans-serif" }}
        >
          About Me
        </h2>
        <div className="text-lg text-gray-300 mb-12 leading-relaxed">
          <p className="mb-6">
            I'm a visionary engineer and innovator passionate about creating
            cutting-edge solutions that transform industries. With expertise in
            mobile app development, fintech solutions, and scalable
            architecture, I've built products that serve thousands of users
            across Nigeria.
          </p>
          <p className="mb-6">
            My journey spans from architecting secure payment systems to
            building comprehensive HR management platforms. I believe in the
            power of technology to solve real-world problems and create
            meaningful impact.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-3">
              Mobile Development
            </h3>
            <p className="text-gray-300 text-sm">React Native, iOS, Android</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-3">
              Fintech Solutions
            </h3>
            <p className="text-gray-300 text-sm">Payment Systems, Blockchain</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-3">
              Architecture
            </h3>
            <p className="text-gray-300 text-sm">Scalable Systems, APIs</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-3">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/eyimofe-omotayo-6a04a61b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
            >
              linkedin.com/in/eyimofe-omotayo-6a04a61b6/
            </a>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-3">WhatsApp</h3>
            <a
              href="https://wa.me/2348146328101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 text-sm transition-colors"
            >
              +234 814 632 8101
            </a>
          </div>
        </div>
        <div className="mt-12">
          <a
            href="https://calendly.com/d/cs8p-cpp-7tg/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}
