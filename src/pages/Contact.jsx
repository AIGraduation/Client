import { Mail, MapPin, Phone, Github, Linkedin, Globe } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+962 XX XXX XXXX",
      link: "tel:+962XXXXXXXXX",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Amman, Jordan",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: <Globe size={24} />,
      name: "Portfolio",
      url: "https://yourportfolio.com",
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Get In{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about the project? Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl text-white mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gray-600 hover:text-teal-600 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-600">{info.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* About Developer */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Avatar */}
            <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-5xl font-bold flex-shrink-0">
              A
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Abdalrahman Alzaro
              </h2>
              <p className="text-xl text-teal-600 mb-4">
                Full-Stack Developer & AI Enthusiast
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Passionate about building intelligent systems using modern web
                technologies and machine learning. Specializing in React,
                Node.js, Python, and AI/ML integration. This graduation project
                showcases the integration of advanced AI models with full-stack
                web development.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  AI/ML
                </span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                  PostgreSQL
                </span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  FastAPI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Connect With Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {social.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {social.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Connect on {social.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Project Info */}
        <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            DisasterAI - Graduation Project
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            This project is developed as a graduation project for 2025,
            demonstrating the practical application of AI and machine learning
            in disaster management and emergency response.
          </p>
          <div className="inline-flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl px-6 py-3">
              <p className="text-sm opacity-90">Completion Year</p>
              <p className="text-2xl font-bold">2025</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-xl px-6 py-3">
              <p className="text-sm opacity-90">Accuracy Rate</p>
              <p className="text-2xl font-bold">85-90%</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-xl px-6 py-3">
              <p className="text-sm opacity-90">Technologies</p>
              <p className="text-2xl font-bold">8+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
