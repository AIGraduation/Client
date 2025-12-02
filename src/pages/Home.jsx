import Hero from "../components/Hero";
import Features from "../components/Features";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              How It{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple three-step process to analyze disasters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900">
                  Input Data
                </h3>
                <p className="text-gray-600 text-center">
                  Enter text description or upload an image of the disaster
                  situation
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M5 15h20m0 0l-7-7m7 7l-7 7"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900">
                  AI Analysis
                </h3>
                <p className="text-gray-600 text-center">
                  Advanced models process and analyze the data in real-time
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M5 15h20m0 0l-7-7m7 7l-7 7"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-900">
                Get Results
              </h3>
              <p className="text-gray-600 text-center">
                Receive detailed analysis with severity, location, and damage
                assessment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Try our AI-powered disaster detection system now and experience the
            power of advanced machine learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/text-analysis"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
            >
              Analyze Text Now
            </a>
            <a
              href="/image-analysis"
              className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl font-semibold hover:bg-white/20 transition-all hover:scale-105 border border-white/20"
            >
              Analyze Image Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
