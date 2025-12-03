import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Globe,
  Sparkles,
  Building2,
  Users,
  Award,
  BookOpen,
  FileText,
  Image as ImageIcon,
  Clock,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "contact@crisiscore.ai",
      link: "mailto:contact@crisiscore.ai",
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
      value: "Hashemite University, Zarqa, Jordan",
      link: null,
    },
  ];

  const projectLinks = [
    {
      icon: <FileText size={24} />,
      name: "Text Analysis",
      url: "/text-analysis",
      color: "from-green-600 to-emerald-600",
      description: "Analyze disaster descriptions",
    },
    {
      icon: <ImageIcon size={24} />,
      name: "Image Analysis",
      url: "/image-analysis",
      color: "from-emerald-600 to-teal-600",
      description: "Process disaster images",
    },
    {
      icon: <Clock size={24} />,
      name: "History",
      url: "/history",
      color: "from-teal-600 to-cyan-600",
      description: "View past analyses",
    },
  ];

  const teamMembers = [
    {
      initial: "C",
      name: "CrisisCore AI Team",
      role: "Development & Research",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-green-500/30">
            <Mail size={40} className="text-white" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
            <Sparkles size={16} className="text-green-600" />
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
              Get In Touch
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Contact{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              CrisisCore AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our disaster detection system? We'd love to
            hear from you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="card text-center hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl text-white mb-4 shadow-lg">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-600 font-medium">{info.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* About Project */}
        <div className="card mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Logo/Avatar */}
            <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-5xl font-bold flex-shrink-0 shadow-xl">
              <Building2 size={64} />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                CrisisCore AI
              </h2>
              <p className="text-xl text-green-600 font-semibold mb-4">
                Advanced Disaster Detection & Analysis System
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                CrisisCore AI is a cutting-edge graduation project that combines
                advanced machine learning models with real-time disaster
                detection capabilities. Using BERT, T5, ResNet, and YOLOv8, our
                system analyzes both text descriptions and images to identify
                disasters, assess severity, extract locations, and provide
                comprehensive damage reports with 85-90% accuracy.
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-xl text-sm font-bold shadow-sm">
                  BERT & T5
                </span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-sm font-bold shadow-sm">
                  ResNet50
                </span>
                <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-xl text-sm font-bold shadow-sm">
                  YOLOv8
                </span>
                <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-xl text-sm font-bold shadow-sm">
                  React & Next.js
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl text-sm font-bold shadow-sm">
                  FastAPI
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-xl text-sm font-bold shadow-sm">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="card mb-12">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles size={24} className="text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Explore Our Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectLinks.map((link, index) => (
              <Link key={index} to={link.url} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2 border border-green-100">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${link.color} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    {link.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Project Team */}
        <div className="card mb-12">
          <div className="flex items-center gap-2 mb-8">
            <Users size={24} className="text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">Project Team</h2>
          </div>
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center text-white text-5xl font-bold mx-auto mb-4 shadow-xl`}
                >
                  {member.initial}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              CrisisCore AI - Graduation Project 2025
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-95">
              A comprehensive AI-powered system for real-time disaster
              detection, classification, and analysis, developed at Hashemite
              University
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/30 transition-all">
              <Award size={32} className="mx-auto mb-3" />
              <p className="text-sm opacity-90 mb-1">Accuracy Rate</p>
              <p className="text-3xl font-bold">85-90%</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/30 transition-all">
              <BookOpen size={32} className="mx-auto mb-3" />
              <p className="text-sm opacity-90 mb-1">AI Models</p>
              <p className="text-3xl font-bold">4+</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/30 transition-all">
              <Globe size={32} className="mx-auto mb-3" />
              <p className="text-sm opacity-90 mb-1">Disaster Types</p>
              <p className="text-3xl font-bold">6</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/30 transition-all">
              <Sparkles size={32} className="mx-auto mb-3" />
              <p className="text-sm opacity-90 mb-1">Year</p>
              <p className="text-3xl font-bold">2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
