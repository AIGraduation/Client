import {
  FileText,
  Image,
  MapPin,
  Clock,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <FileText size={40} />,
      title: "Text Analysis",
      description:
        "Analyze disaster descriptions using BERT and T5 models to detect type, severity, and extract detailed information.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Image size={40} />,
      title: "Image Detection",
      description:
        "Process disaster images with ResNet and YOLOv8 to identify damage, detect objects, and assess severity levels.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <MapPin size={40} />,
      title: "Geographic Extraction",
      description:
        "Automatically identify locations, cities, regions, and coordinates from both text descriptions and image metadata.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Clock size={40} />,
      title: "Temporal Analysis",
      description:
        'Extract time information including dates, hours, and contextual phrases like "night of November 12th".',
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: <AlertCircle size={40} />,
      title: "Damage Assessment",
      description:
        "Detailed extraction of casualties, injuries, building damage, road conditions, and financial losses.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Severity Scoring",
      description:
        "Calculate severity scores (0-100%) and categorize as Low, Medium, High, or Catastrophic with high accuracy.",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Powerful{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced AI capabilities for comprehensive disaster detection and
            analysis
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/text-analysis"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Try Text Analysis
            </a>
            <a
              href="/image-analysis"
              className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Try Image Analysis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
