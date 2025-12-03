import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Features from "../components/Features";
import {
  FileText,
  Image as ImageIcon,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />

      {/* How It Works Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-green-50/30 to-gray-50 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
              <Sparkles size={18} className="text-green-600" />
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                Simple Process
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              How It{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to analyze disasters with AI precision
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
            {/* Connecting Line - Desktop Only */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 opacity-20"></div>

            {/* Step 1 */}
            <div className="relative group h-full">
              <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100 h-full flex flex-col">
                {/* Step Number */}
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-8 mx-auto shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  1
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6 flex-shrink-0">
                  <FileText size={32} className="text-green-600" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 flex-shrink-0">
                  Input Data
                </h3>
                <p className="text-gray-600 text-center leading-relaxed flex-grow">
                  Enter text description or upload an image of the disaster
                  situation
                </p>

                {/* Checkmark */}
                <div className="flex justify-center mt-6 flex-shrink-0">
                  <CheckCircle size={24} className="text-green-500" />
                </div>
              </div>

              {/* Arrow - Desktop */}
              <div className="hidden md:block absolute top-16 -right-6 z-10">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-green-100">
                  <ArrowRight size={24} className="text-green-600" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group h-full">
              <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100 h-full flex flex-col">
                {/* Step Number */}
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-8 mx-auto shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  2
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-6 flex-shrink-0">
                  <Sparkles size={32} className="text-emerald-600" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 flex-shrink-0">
                  AI Analysis
                </h3>
                <p className="text-gray-600 text-center leading-relaxed flex-grow">
                  Advanced models process and analyze the data in real-time
                  using BERT, ResNet & YOLO
                </p>

                {/* Checkmark */}
                <div className="flex justify-center mt-6 flex-shrink-0">
                  <CheckCircle size={24} className="text-emerald-500" />
                </div>
              </div>

              {/* Arrow - Desktop */}
              <div className="hidden md:block absolute top-16 -right-6 z-10">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-emerald-100">
                  <ArrowRight size={24} className="text-emerald-600" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group h-full">
              <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-teal-100 h-full flex flex-col">
                {/* Step Number */}
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-8 mx-auto shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  3
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 flex-shrink-0">
                  <ImageIcon size={32} className="text-teal-600" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 flex-shrink-0">
                  Get Results
                </h3>
                <p className="text-gray-600 text-center leading-relaxed flex-grow">
                  Receive detailed analysis with severity, location, casualties,
                  and damage assessment
                </p>

                {/* Checkmark */}
                <div className="flex justify-center mt-6 flex-shrink-0">
                  <CheckCircle size={24} className="text-teal-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg">
              ⚡ Analysis completed in{" "}
              <span className="font-bold text-green-600">seconds</span> with{" "}
              <span className="font-bold text-green-600">85-90% accuracy</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

        {/* Animated Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-300 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-300 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-xl rounded-full mb-8 border border-white/30">
            <Sparkles size={18} className="text-yellow-300" />
            <span className="text-sm font-semibold text-white uppercase tracking-wide">
              Start Your Analysis Now
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Try our AI-powered disaster detection system now and experience the
            power of advanced machine learning
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              to="/text-analysis"
              className="group px-10 py-5 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-50 transition-all hover:scale-105 shadow-2xl flex items-center gap-3"
            >
              <FileText size={22} />
              Analyze Text Now
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/image-analysis"
              className="group px-10 py-5 bg-white/10 backdrop-blur-xl text-white rounded-xl font-bold hover:bg-white/20 transition-all hover:scale-105 border-2 border-white/30 shadow-xl flex items-center gap-3"
            >
              <ImageIcon size={22} />
              Analyze Image Now
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-green-300" />
              <span className="font-medium">No Registration Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-emerald-300" />
              <span className="font-medium">Free to Use</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-teal-300" />
              <span className="font-medium">Instant Results</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
