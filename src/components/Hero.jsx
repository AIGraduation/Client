import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Shield,
  Brain,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Detect & Analyze",
      highlight: "Natural Disasters",
      description:
        "Advanced AI system using BERT, ResNet, and YOLO to identify and analyze disasters from text and images in real-time.",
      image:
        "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=2000",
      gradient: "from-green-900/80 via-emerald-900/80 to-teal-900/80",
    },
    {
      title: "Text Analysis",
      highlight: "Powered by BERT & T5",
      description:
        "Extract disaster information from text descriptions with 90% accuracy. Identify type, severity, location, and casualties instantly.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000",
      gradient: "from-emerald-900/80 via-teal-900/80 to-cyan-900/80",
    },
    {
      title: "Image Detection",
      highlight: "Using ResNet & YOLO",
      description:
        "Analyze disaster images to detect damage, assess severity, and identify affected areas with state-of-the-art computer vision.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000",
      gradient: "from-teal-900/80 via-green-900/80 to-emerald-900/80",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Transitions */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
          />

          {/* Additional Dark Overlay for Better Text Contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Animated Blobs */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-xl rounded-full mb-8 animate-fade-in border border-white/30 shadow-lg">
            <Zap size={18} className="text-yellow-300 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide">
              AI-POWERED DISASTER DETECTION
            </span>
          </div>

          {/* Slide Content */}
          <div className="min-h-[400px] flex flex-col items-center justify-center">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up drop-shadow-2xl">
              {slides[currentSlide].title}
              <br />
              <span className="bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                {slides[currentSlide].highlight}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed drop-shadow-lg">
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-400">
              <Link
                to="/text-analysis"
                className="group px-8 py-4 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-50 transition-all hover:scale-105 shadow-2xl flex items-center gap-2 hover:shadow-green-500/20"
              >
                Start Text Analysis
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/image-analysis"
                className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white rounded-xl font-bold hover:bg-white/20 transition-all hover:scale-105 border-2 border-white/30 shadow-xl"
              >
                Start Image Analysis
              </Link>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full transition-all hover:scale-110 border border-white/30"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all ${
                    currentSlide === index
                      ? "w-12 h-3 bg-white rounded-full"
                      : "w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full transition-all hover:scale-110 border border-white/30"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in-up animation-delay-600">
            <div className="glass p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl">
              <Shield size={40} className="mx-auto mb-4 text-green-300" />
              <div className="text-4xl font-bold mb-2">85-90%</div>
              <div className="text-white/90 font-medium">Accuracy Rate</div>
            </div>
            <div className="glass p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl">
              <Brain size={40} className="mx-auto mb-4 text-emerald-300" />
              <div className="text-4xl font-bold mb-2">6 Types</div>
              <div className="text-white/90 font-medium">
                Disaster Categories
              </div>
            </div>
            <div className="glass p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl">
              <Zap size={40} className="mx-auto mb-4 text-teal-300" />
              <div className="text-4xl font-bold mb-2">Real-time</div>
              <div className="text-white/90 font-medium">Analysis Speed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
