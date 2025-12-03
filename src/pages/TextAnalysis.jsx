import { useState } from "react";
import { FileText, Send, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { analyzeText } from "../services/api";
import ResultCard from "../components/ResultCard";

const TextAnalysis = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const exampleTexts = [
    "A strong earthquake struck the area between Hama and Aleppo, causing several buildings to collapse and injuring multiple people.",
    "A massive wildfire is burning in California, killing 15 people and destroying over 200 homes. The fire started yesterday afternoon around 3 PM.",
    "Severe flooding hit Mumbai today, with water levels reaching 2 meters in some areas. Roads are damaged and thousands of people have been evacuated.",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setError("Please enter some text to analyze");
      return;
    }

    if (text.trim().length < 10) {
      setError("Text must be at least 10 characters long");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await analyzeText(text);
      console.log("API Response:", data);
      setResult(data);
      console.log("Result state set:", data);
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Failed to analyze text. Please try again."
      );
      console.error("Analysis error:", err);
    } finally {
      setLoading(false);
    }
  };

  const loadExample = (exampleText) => {
    setText(exampleText);
    setError("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-green-500/30">
            <FileText size={40} className="text-white" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
            <Sparkles size={16} className="text-green-600" />
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
              AI-Powered NLP Analysis
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Text{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Analysis
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Analyze disaster descriptions using advanced BERT & T5 models
          </p>
        </div>

        {/* Form */}
        <div className="card mb-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="flex items-center gap-2 text-base font-bold text-gray-900 mb-3">
                <FileText size={20} className="text-green-600" />
                Enter Disaster Description
              </label>
              <div className="relative">
                <textarea
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                    setError("");
                  }}
                  placeholder="Example: A strong earthquake struck the area between Hama and Aleppo, causing several buildings to collapse and injuring multiple people..."
                  className="w-full px-5 py-4 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all resize-none text-gray-900 placeholder:text-gray-400"
                  rows="8"
                  disabled={loading}
                />
                <div className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-lg border border-green-200">
                  <p className="text-xs font-medium text-gray-600">
                    {text.length} / 10 min
                  </p>
                </div>
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-xl flex items-start gap-3">
                <AlertCircle
                  size={20}
                  className="text-red-600 flex-shrink-0 mt-0.5"
                />
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !text.trim()}
              className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <Loader2 size={24} className="animate-spin" />
                  Analyzing Text...
                </>
              ) : (
                <>
                  <Send size={24} />
                  Analyze Text
                </>
              )}
            </button>
          </form>

          {/* Example Texts */}
          <div className="mt-8 pt-8 border-t-2 border-green-100">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-green-600" />
              <p className="text-base font-bold text-gray-900">
                Quick Examples:
              </p>
            </div>
            <div className="space-y-3">
              {exampleTexts.map((example, index) => (
                <button
                  key={index}
                  onClick={() => loadExample(example)}
                  disabled={loading}
                  className="w-full text-left p-4 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-xl text-sm text-gray-700 hover:text-gray-900 transition-all disabled:opacity-50 border border-green-200 hover:border-green-300 hover:shadow-md group"
                >
                  <span className="font-bold text-green-700 group-hover:text-green-800">
                    Example {index + 1}:
                  </span>{" "}
                  <span className="text-gray-600 group-hover:text-gray-800">
                    {example.substring(0, 100)}...
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        {result && result.analysis_id && (
          <div className="mt-8 animate-fade-in-up">
            <ResultCard result={result} type="text" inputText={text} />
          </div>
        )}

        {/* Info Box */}
        {!result && !loading && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
              <FileText size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              How Text Analysis Works
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg mb-6">
              Our system uses BERT and T5 transformer models to detect
              disasters, classify types (Earthquake, Flood, Wildfire, etc.),
              extract casualties, damage information, locations, and temporal
              details with{" "}
              <span className="font-bold text-green-600">85-90% accuracy</span>.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-1">6</div>
                <div className="text-sm text-gray-600 font-medium">
                  Disaster Types
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                <div className="text-3xl font-bold text-emerald-600 mb-1">
                  90%
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Accuracy Rate
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                <div className="text-3xl font-bold text-teal-600 mb-1">
                  &lt;2s
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Analysis Time
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextAnalysis;
