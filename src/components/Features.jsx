import { Link } from "react-router-dom";
import {
  FileText,
  Image,
  MapPin,
  Clock,
  AlertCircle,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <FileText size={48} />,
      title: "Text Analysis",
      description:
        "Analyze disaster descriptions using BERT and T5 models to detect type, severity, and extract detailed information.",
      color: "from-green-500 to-emerald-600",
      stats: "90% Accuracy",
      delay: "0",
    },
    {
      icon: <Image size={48} />,
      title: "Image Detection",
      description:
        "Process disaster images with ResNet and YOLOv8 to identify damage, detect objects, and assess severity levels.",
      color: "from-teal-500 to-cyan-600",
      stats: "Real-time Processing",
      delay: "100",
    },
    {
      icon: <MapPin size={48} />,
      title: "Geographic Extraction",
      description:
        "Automatically identify locations, cities, regions, and coordinates from both text descriptions and image metadata.",
      color: "from-emerald-500 to-green-600",
      stats: "Global Coverage",
      delay: "200",
    },
    {
      icon: <Clock size={48} />,
      title: "Temporal Analysis",
      description:
        'Extract time information including dates, hours, and contextual phrases like "night of November 12th".',
      color: "from-lime-500 to-green-600",
      stats: "Precise Timestamps",
      delay: "300",
    },
    {
      icon: <AlertCircle size={48} />,
      title: "Damage Assessment",
      description:
        "Detailed extraction of casualties, injuries, building damage, road conditions, and financial losses.",
      color: "from-amber-500 to-orange-600",
      stats: "Multi-factor Analysis",
      delay: "400",
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Severity Scoring",
      description:
        "Calculate severity scores (0-100%) and categorize as Low, Medium, High, or Catastrophic with high accuracy.",
      color: "from-green-600 to-teal-600",
      stats: "0-100% Scale",
      delay: "500",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-green-50/20 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
            <Sparkles size={18} className="text-green-600" />
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
              Advanced Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Powerful{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              AI Features
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advanced AI capabilities for comprehensive disaster detection and
            real-time analysis
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-3 border border-green-100/50 overflow-hidden"
              style={{
                animationDelay: `${feature.delay}ms`,
              }}
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full"></div>

              {/* Icon */}
              <div
                className={`relative inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}
              >
                {feature.icon}
              </div>

              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full mb-4">
                <span className="text-xs font-bold text-green-700">
                  {feature.stats}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Learn More Arrow */}
              <div className="flex items-center gap-2 text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">Learn More</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience AI-Powered Disaster Detection?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start analyzing disasters with our advanced AI models in seconds
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/text-analysis"
                className="group px-10 py-5 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-50 transition-all hover:scale-105 shadow-2xl flex items-center gap-3"
              >
                <FileText size={20} />
                Try Text Analysis
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/image-analysis"
                className="group px-10 py-5 bg-white/10 backdrop-blur-xl text-white rounded-xl font-bold hover:bg-white/20 transition-all hover:scale-105 border-2 border-white/30 shadow-xl flex items-center gap-3"
              >
                <Image size={20} />
                Try Image Analysis
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-10 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">85-90% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Real-time Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-300 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">6 Disaster Types</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
