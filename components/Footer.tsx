export function Footer() {
    return (
      <footer className="bg-red-600/20 backdrop-blur-sm border-t border-red-400/30 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-red-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="#timeline" className="text-red-200 hover:text-white transition-colors">Experience</a></li>
                <li><a href="#contact" className="text-red-200 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Social Media</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-red-200 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-red-200 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-red-200 hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
              <p className="text-red-200">your.email@example.com</p>
              <p className="text-red-200">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-red-400/30 pt-8 text-center">
            <p className="text-red-200">
              © 2024 Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }