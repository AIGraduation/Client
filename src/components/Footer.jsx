import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DisasterAI
            </h3>
            <p className="text-gray-400 leading-relaxed">
              AI-powered natural disaster detection and analysis system using
              advanced machine learning models.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/text-analysis"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Text Analysis
                </a>
              </li>
              <li>
                <a
                  href="/image-analysis"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Image Analysis
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-current" />{" "}
            for Graduation Project {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
