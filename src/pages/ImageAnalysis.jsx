import { useState } from "react";
import {
  Upload,
  Image as ImageIcon,
  Loader2,
  X,
  Sparkles,
  AlertCircle,
  Camera,
  Building,
  Car,
  Users,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-lg shadow-emerald-500/30">
            <ImageIcon size={40} className="text-white" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
            <Sparkles size={16} className="text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
              AI-Powered Computer Vision
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Image{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Analysis
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Analyze disaster images using ResNet & YOLOv8 object detection
          </p>
        </div>

        {/* Upload Form */}
        <div className="card mb-8">
          <form onSubmit={handleSubmit}>
            {/* File Upload Area */}
            {!preview ? (
              <div className="mb-6">
                <label className="block">
                  <div className="border-3 border-dashed border-green-300 rounded-2xl p-16 text-center hover:border-green-500 hover:bg-green-50/50 transition-all cursor-pointer group">
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      onChange={handleFileChange}
                      className="hidden"
                      disabled={loading}
                    />
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                      <Upload size={40} className="text-green-600" />
                    </div>
                    <p className="text-xl font-bold text-gray-900 mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-base text-gray-500 mb-4">
                      PNG, JPG, WebP up to 10MB
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-lg text-sm font-medium text-green-700">
                      <Camera size={16} />
                      Select Image File
                    </div>
                  </div>
                </label>
              </div>
            ) : (
              <div className="mb-6">
                <div className="relative rounded-2xl overflow-hidden border-4 border-green-200 shadow-xl">
                  <img src={preview} alt="Preview" className="w-full" />
                  <button
                    type="button"
                    onClick={clearFile}
                    disabled={loading}
                    className="absolute top-4 right-4 p-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all hover:scale-110 disabled:opacity-50 shadow-lg"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200 flex items-center justify-center gap-3">
                  <ImageIcon size={20} className="text-green-600" />
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-700">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Size: {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              </div>
            )}

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
              disabled={loading || !file}
              className="btn-secondary w-full py-5 text-lg flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <Loader2 size={24} className="animate-spin" />
                  Analyzing Image...
                </>
              ) : (
                <>
                  <ImageIcon size={24} />
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
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-8 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4">
              <ImageIcon size={32} className="text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              How Image Analysis Works
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg mb-6">
              Our system uses{" "}
              <span className="font-bold text-emerald-600">ResNet50</span> for
              disaster classification and{" "}
              <span className="font-bold text-teal-600">YOLOv8</span> for
              real-time object detection. It identifies damaged buildings,
              vehicles, affected people, and calculates severity scores with{" "}
              <span className="font-bold text-green-600">high accuracy</span>.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-emerald-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Building size={24} className="text-white" />
                </div>
                <p className="font-bold text-gray-900 mb-1">Detects</p>
                <p className="text-sm text-gray-600">Collapsed Buildings</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-emerald-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Car size={24} className="text-white" />
                </div>
                <p className="font-bold text-gray-900 mb-1">Identifies</p>
                <p className="text-sm text-gray-600">Damaged Vehicles</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-emerald-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users size={24} className="text-white" />
                </div>
                <p className="font-bold text-gray-900 mb-1">Counts</p>
                <p className="text-sm text-gray-600">Affected People</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-emerald-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <p className="font-bold text-gray-900 mb-1">Calculates</p>
                <p className="text-sm text-gray-600">Severity Score</p>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-emerald-200 flex items-center justify-center gap-3">
                <Target size={28} className="text-emerald-600" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-emerald-600">
                    ResNet50
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    Classification Model
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-emerald-200 flex items-center justify-center gap-3">
                <Zap size={28} className="text-teal-600" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-teal-600">YOLOv8</div>
                  <div className="text-xs text-gray-600 font-medium">
                    Object Detection
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-emerald-200 flex items-center justify-center gap-3">
                <ImageIcon size={28} className="text-green-600" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-green-600">10MB</div>
                  <div className="text-xs text-gray-600 font-medium">
                    Max File Size
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageAnalysis;
