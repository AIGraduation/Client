import { Brain, Zap, Target, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const technologies = [
    { name: "BERT", purpose: "Text Classification", accuracy: "88-92%" },
    { name: "BART", purpose: "Disaster Type Detection", accuracy: "86%+" },
    { name: "ResNet50", purpose: "Image Classification", accuracy: "85-90%" },
    { name: "YOLOv8", purpose: "Object Detection", accuracy: "90-93%" },
    { name: "spaCy", purpose: "Entity Extraction", accuracy: "85%+" },
    { name: "FastAPI", purpose: "Backend Framework", accuracy: "N/A" },
  ];

  const features = [
    {
      icon: <Brain size={32} />,
      title: "Advanced AI Models",
      description:
        "State-of-the-art deep learning models including BERT, ResNet, and YOLO for accurate disaster detection and analysis.",
    },
    {
      icon: <Zap size={32} />,
      title: "Real-time Processing",
      description:
        "Instant analysis of text and images with results delivered in seconds, not minutes.",
    },
    {
      icon: <Target size={32} />,
      title: "High Accuracy",
      description:
        "85-90% accuracy rate across all disaster types and detection methods.",
    },
    {
      icon: <Award size={32} />,
      title: "6 Disaster Types",
      description:
        "Detects Earthquakes, Floods, Wildfires, Storms/Hurricanes, Landslides, and Droughts.",
    },
    {
      icon: <Users size={32} />,
      title: "User Friendly",
      description:
        "Simple, intuitive interface designed for both technical and non-technical users.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Comprehensive Analysis",
      description:
        "Extracts casualties, damage, location, time, and severity information automatically.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DisasterAI
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            An AI-powered system for automatic detection, classification, and
            analysis of natural disasters using advanced machine learning and
            computer vision technologies.
          </p>
        </div>

        {/* Project Overview */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              DisasterAI is a comprehensive artificial intelligence system
              designed to automatically detect, classify, and analyze natural
              disasters using both textual descriptions and visual imagery. The
              system leverages cutting-edge deep learning models to provide
              accurate, real-time disaster assessment.
            </p>
            <p>
              Built as a graduation project, this platform demonstrates the
              practical application of Natural Language Processing (NLP) and
              Computer Vision (CV) in emergency response and disaster management
              scenarios.
            </p>
            <p>
              The system processes English-language text inputs using
              transformer-based models like BERT and BART, while image analysis
              utilizes ResNet50 for classification and YOLOv8 for precise object
              detection. Together, these technologies provide a complete
              disaster assessment including type identification, severity
              scoring, casualty extraction, location detection, and temporal
              analysis.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Technologies & Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-purple-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{tech.purpose}</p>
                {tech.accuracy !== "N/A" && (
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        style={{ width: tech.accuracy }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-purple-600">
                      {tech.accuracy}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* System Architecture */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            System Architecture
          </h2>
          <div className="space-y-6">
            {/* Backend */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Backend (Python)
              </h3>
              <p className="text-gray-600 mb-2">
                FastAPI framework with PostgreSQL database for storing analysis
                results. Implements RESTful API endpoints for text and image
                analysis.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  Python 3.12
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  FastAPI
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  SQLAlchemy
                </span>
              </div>
            </div>

            {/* AI Models */}
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                AI/ML Models
              </h3>
              <p className="text-gray-600 mb-2">
                Pre-trained deep learning models from Hugging Face and
                Ultralytics, optimized for disaster detection and analysis
                tasks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  PyTorch
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  Transformers
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  TorchVision
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  Ultralytics
                </span>
              </div>
            </div>

            {/* Frontend */}
            <div className="border-l-4 border-pink-600 pl-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Frontend (React)
              </h3>
              <p className="text-gray-600 mb-2">
                Modern, responsive user interface built with React and Tailwind
                CSS, providing intuitive access to all analysis features.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                  Vite
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                  Axios
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Graduation Project */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center">
          <Award size={64} className="mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Graduation Project 2025</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            This project demonstrates the integration of advanced AI
            technologies in solving real-world problems related to disaster
            management and emergency response.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-full px-6 py-3">
            <TrendingUp size={20} />
            <span className="font-semibold">85-90% Accuracy Rate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
