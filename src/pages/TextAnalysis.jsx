import { useState } from "react";
import { FileText, Send, Loader2 } from "lucide-react";
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
      console.log("API Response:", data); // ADD THIS LINE
      setResult(data);
      console.log("Result state set:", data); // ADD THIS LINE
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4">
            <FileText size={32} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Text Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Analyze disaster descriptions using advanced NLP models
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Enter Disaster Description
              </label>
              <textarea
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  setError("");
                }}
                placeholder="Example: A strong earthquake struck the area between Hama and Aleppo, causing several buildings to collapse..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                rows="6"
                disabled={loading}
              />
              <p className="text-sm text-gray-500 mt-2">
                {text.length} characters (minimum 10 required)
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !text.trim()}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Analyze Text
                </>
              )}
            </button>
          </form>

          {/* Example Texts */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Quick Examples:
            </p>
            <div className="space-y-2">
              {exampleTexts.map((example, index) => (
                <button
                  key={index}
                  onClick={() => loadExample(example)}
                  disabled={loading}
                  className="w-full text-left p-3 bg-gray-50 hover:bg-blue-50 rounded-lg text-sm text-gray-700 hover:text-blue-600 transition-colors disabled:opacity-50"
                >
                  <span className="font-medium">Example {index + 1}:</span>{" "}
                  {example.substring(0, 80)}...
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        {result && result.analysis_id && (
          <div className="mt-8 animate-fade-in-up">
            <ResultCard result={result} type="text" />
          </div>
        )}

        {/* Info Box */}
        {!result && !loading && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
            <FileText size={48} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How Text Analysis Works
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our system uses BERT and transformer models to detect disasters,
              classify types (Earthquake, Flood, Wildfire, etc.), extract
              casualties, damage info, locations, and time details with 85-90%
              accuracy.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextAnalysis;
