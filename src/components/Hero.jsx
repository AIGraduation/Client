import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Brain } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full mb-6 animate-fade-in">
            <Zap size={16} className="text-yellow-300" />
            <span className="text-sm font-medium">
              AI-Powered Disaster Detection
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Detect & Analyze
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Natural Disasters
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Advanced AI system using BERT, ResNet, and YOLO to identify and
            analyze disasters from text and images in real-time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-400">
            <Link
              to="/text-analysis"
              className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              Analyze Text
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/image-analysis"
              className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl font-semibold hover:bg-white/20 transition-all hover:scale-105 border border-white/20"
            >
              Analyze Image
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
            <div className="glass p-6 rounded-2xl">
              <Shield size={32} className="mx-auto mb-3 text-green-300" />
              <div className="text-3xl font-bold mb-1">85-90%</div>
              <div className="text-white/80">Accuracy Rate</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <Brain size={32} className="mx-auto mb-3 text-purple-300" />
              <div className="text-3xl font-bold mb-1">6 Types</div>
              <div className="text-white/80">Disaster Categories</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <Zap size={32} className="mx-auto mb-3 text-yellow-300" />
              <div className="text-3xl font-bold mb-1">Real-time</div>
              <div className="text-white/80">Analysis Speed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
