import {
  Brain,
  Zap,
  Target,
  Award,
  Users,
  TrendingUp,
  Sparkles,
  Shield,
  Database,
  Cpu,
  Globe,
} from "lucide-react";

const About = () => {
  const technologies = [
    { name: "BERT & T5", purpose: "Text Classification", accuracy: "90%" },
    { name: "ResNet50", purpose: "Image Classification", accuracy: "88%" },
    { name: "YOLOv8", purpose: "Object Detection", accuracy: "92%" },
    { name: "Xception", purpose: "Deep Feature Extraction", accuracy: "87%" },
    { name: "spaCy", purpose: "Entity Extraction", accuracy: "85%" },
    { name: "FastAPI", purpose: "Backend Framework", accuracy: "N/A" },
  ];

  const features = [
    {
      icon: <Brain size={32} />,
      title: "Advanced AI Models",
      description:
        "State-of-the-art deep learning models including BERT, T5, ResNet, and YOLOv8 for accurate disaster detection and analysis.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Zap size={32} />,
      title: "Real-time Processing",
      description:
        "Instant analysis of text and images with results delivered in seconds, enabling rapid emergency response.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Target size={32} />,
      title: "High Accuracy",
      description:
        "85-90% accuracy rate across all disaster types and detection methods, ensuring reliable results.",
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: <Award size={32} />,
      title: "6 Disaster Types",
      description:
        "Detects Earthquakes, Floods, Wildfires, Storms/Hurricanes, Landslides, and Droughts with precision.",
      color: "from-green-600 to-emerald-700",
    },
    {
      icon: <Users size={32} />,
      title: "User Friendly",
      description:
        "Simple, intuitive interface designed for emergency responders, researchers, and decision-makers.",
      color: "from-emerald-600 to-teal-700",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Comprehensive Analysis",
      description:
        "Extracts casualties, damage assessment, location coordinates, timestamps, and severity scores automatically.",
      color: "from-teal-600 to-cyan-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-green-500/30">
            <Brain size={40} className="text-white" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
            <Sparkles size={16} className="text-green-600" />
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
              About The Project
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            About{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              CrisisCore AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            An AI-powered system for automatic detection, classification, and
            analysis of natural disasters using advanced machine learning and
            computer vision technologies.
          </p>
        </div>

        {/* Project Overview */}
        <div className="card mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Globe size={28} className="text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Project Overview
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p className="text-lg">
              <span className="font-bold text-green-600">CrisisCore AI</span> is
              a comprehensive artificial intelligence system designed to
              automatically detect, classify, and analyze natural disasters
              using both textual descriptions and visual imagery. The system
              leverages cutting-edge deep learning models to provide accurate,
              real-time disaster assessment for emergency response teams and
              crisis management organizations.
            </p>
            <p className="text-lg">
              Built as a graduation project at{" "}
              <span className="font-semibold">Hashemite University</span>, this
              platform demonstrates the practical application of Natural
              Language Processing (NLP) and Computer Vision (CV) in emergency
              response and disaster management scenarios. The system aims to
              reduce response time and improve decision-making during critical
              situations.
            </p>
            <p className="text-lg">
              The system processes English-language text inputs using
              transformer-based models like{" "}
              <span className="font-semibold text-green-600">BERT and T5</span>,
              while image analysis utilizes{" "}
              <span className="font-semibold text-green-600">ResNet50</span> for
              classification and{" "}
              <span className="font-semibold text-green-600">YOLOv8</span> for
              precise object detection. Together, these technologies provide a
              complete disaster assessment including type identification,
              severity scoring, casualty extraction, location detection, and
              temporal analysis.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Powerful capabilities for comprehensive disaster analysis
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card hover:-translate-y-2">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="card mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Cpu size={28} className="text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Technologies & AI Models
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 hover:border-green-300 transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 font-medium">
                  {tech.purpose}
                </p>
                {tech.accuracy !== "N/A" && (
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-600 to-emerald-600 h-3 rounded-full transition-all"
                        style={{ width: tech.accuracy }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-green-700 min-w-[45px]">
                      {tech.accuracy}
                    </span>
                  </div>
                )}
                {tech.accuracy === "N/A" && (
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold">
                    Core Framework
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* System Architecture */}
        <div className="card mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Database size={28} className="text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              System Architecture
            </h2>
          </div>
          <div className="space-y-6">
            {/* Backend */}
            <div className="border-l-4 border-green-600 pl-6 bg-green-50/50 rounded-r-xl py-4 pr-4">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                <Shield size={24} className="text-green-600" />
                Backend (Python)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                FastAPI framework with PostgreSQL database for storing analysis
                results. Implements RESTful API endpoints for text and image
                analysis with high-performance async processing.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-xl text-sm font-bold shadow-sm">
                  Python 3.12
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-xl text-sm font-bold shadow-sm">
                  FastAPI
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-xl text-sm font-bold shadow-sm">
                  PostgreSQL
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-xl text-sm font-bold shadow-sm">
                  SQLAlchemy
                </span>
              </div>
            </div>

            {/* AI Models */}
            <div className="border-l-4 border-emerald-600 pl-6 bg-emerald-50/50 rounded-r-xl py-4 pr-4">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                <Brain size={24} className="text-emerald-600" />
                AI/ML Models
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                Pre-trained deep learning models from Hugging Face and
                Ultralytics, fine-tuned and optimized for disaster detection and
                analysis tasks with high accuracy.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-sm font-bold shadow-sm">
                  PyTorch
                </span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-sm font-bold shadow-sm">
                  Transformers
                </span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-sm font-bold shadow-sm">
                  TorchVision
                </span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-sm font-bold shadow-sm">
                  Ultralytics YOLO
                </span>
              </div>
            </div>

            {/* Frontend */}
            <div className="border-l-4 border-teal-600 pl-6 bg-teal-50/50 rounded-r-xl py-4 pr-4">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                <Globe size={24} className="text-teal-600" />
                Frontend (React)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                Modern, responsive user interface built with React and Tailwind
                CSS, providing intuitive access to all analysis features with
                real-time updates and seamless user experience.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-xl text-sm font-bold shadow-sm">
                  React 18
                </span>
                <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-xl text-sm font-bold shadow-sm">
                  Vite
                </span>
                <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-xl text-sm font-bold shadow-sm">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-xl text-sm font-bold shadow-sm">
                  React Router
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Graduation Project Banner */}
        <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl mb-6">
              <Award size={48} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Graduation Project 2025
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
              This project demonstrates the integration of advanced AI
              technologies in solving real-world problems related to disaster
              management and emergency response systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/30 transition-all">
              <TrendingUp size={32} className="mx-auto mb-3" />
              <p className="text-sm opacity-90 mb-1">Accuracy</p>
              <p className="text-3xl font-bold">85-90%</p>
            </div>
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/30 transition-all">
              <Brain size={32} className="mx-auto mb-3" />
              <p className="text-sm opacity-90 mb-1">AI Models</p>
              <p className="text-3xl font-bold">6+</p>
            </div>
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/30 transition-all">
              <Target size={32} className="mx-auto mb-3" />
              <p className="text-sm opacity-90 mb-1">Disasters</p>
              <p className="text-3xl font-bold">6 Types</p>
            </div>
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/30 transition-all">
              <Zap size={32} className="mx-auto mb-3" />
              <p className="text-sm opacity-90 mb-1">Real-time</p>
              <p className="text-3xl font-bold">&lt;2s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
