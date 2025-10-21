export function ContactSection() {
  return (
    <section id="contact" className="bg-orange-500/20 backdrop-blur-sm min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-12">
          Where to Reach Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-orange-600/30 backdrop-blur-sm rounded-lg p-8 border border-orange-400/30">
            <h3 className="text-2xl font-semibold text-white mb-4">Email</h3>
            <p className="text-orange-200 text-lg">your.email@example.com</p>
          </div>
          <div className="bg-orange-600/30 backdrop-blur-sm rounded-lg p-8 border border-orange-400/30">
            <h3 className="text-2xl font-semibold text-white mb-4">LinkedIn</h3>
            <p className="text-orange-200 text-lg">linkedin.com/in/yourprofile</p>
          </div>
          <div className="bg-orange-600/30 backdrop-blur-sm rounded-lg p-8 border border-orange-400/30">
            <h3 className="text-2xl font-semibold text-white mb-4">GitHub</h3>
            <p className="text-orange-200 text-lg">github.com/yourusername</p>
          </div>
          <div className="bg-orange-600/30 backdrop-blur-sm rounded-lg p-8 border border-orange-400/30">
            <h3 className="text-2xl font-semibold text-white mb-4">Phone</h3>
            <p className="text-orange-200 text-lg">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-12">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
