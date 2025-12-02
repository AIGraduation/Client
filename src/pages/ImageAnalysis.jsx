import { useState } from "react";
import { Upload, Image as ImageIcon, Loader2, X } from "lucide-react";
import { analyzeImage } from "../services/api";
import ResultCard from "../components/ResultCard";

const ImageAnalysis = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    // Validate file type
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!validTypes.includes(selectedFile.type)) {
      setError("Please select a valid image file (JPG, PNG, or WebP)");
      return;
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (selectedFile.size > maxSize) {
      setError("File size must be less than 10MB");
      return;
    }

    setFile(selectedFile);
    setError("");
    setResult(null);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please select an image to analyze");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await analyzeImage(file);
      setResult(data);
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Failed to analyze image. Please try again."
      );
      console.error("Analysis error:", err);
    } finally {
      setLoading(false);
    }
  };

  const clearFile = () => {
    setFile(null);
    setPreview(null);
    setError("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4">
            <ImageIcon size={32} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Image Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Analyze disaster images using ResNet and YOLOv8 object detection
          </p>
        </div>

        {/* Upload Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <form onSubmit={handleSubmit}>
            {/* File Upload Area */}
            {!preview ? (
              <div className="mb-6">
                <label className="block">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-purple-500 transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      onChange={handleFileChange}
                      className="hidden"
                      disabled={loading}
                    />
                    <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-gray-500">
                      PNG, JPG, WebP up to 10MB
                    </p>
                  </div>
                </label>
              </div>
            ) : (
              <div className="mb-6">
                <div className="relative">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <button
                    type="button"
                    onClick={clearFile}
                    disabled={loading}
                    className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors disabled:opacity-50"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-3 text-center">
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !file}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Analyzing Image...
                </>
              ) : (
                <>
                  <ImageIcon size={20} />
                  Analyze Image
                </>
              )}
            </button>
          </form>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-fade-in-up">
            <ResultCard result={result} type="image" />
          </div>
        )}

        {/* Info Box */}
        {!result && !loading && (
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 text-center">
            <ImageIcon size={48} className="mx-auto text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How Image Analysis Works
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Our system uses ResNet50 for disaster classification and YOLOv8
              for object detection. It identifies damaged buildings, vehicles,
              affected people, and calculates severity scores.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm">
              <div className="bg-white rounded-lg p-3">
                <p className="font-semibold text-gray-900">Detects</p>
                <p className="text-gray-600">Collapsed Buildings</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-semibold text-gray-900">Identifies</p>
                <p className="text-gray-600">Damaged Vehicles</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-semibold text-gray-900">Counts</p>
                <p className="text-gray-600">Affected People</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-semibold text-gray-900">Calculates</p>
                <p className="text-gray-600">Severity Score</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageAnalysis;
