import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  History as HistoryIcon,
  FileText,
  Image,
  Calendar,
  AlertCircle,
  Loader2,
  Sparkles,
  Clock,
  Flame,
} from "lucide-react";
import { getTextHistory, getImageHistory } from "../services/api";

const History = () => {
  const [textHistory, setTextHistory] = useState([]);
  const [imageHistory, setImageHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("text"); // 'text' or 'image'

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setLoading(true);
    setError("");

    try {
      const [textData, imageData] = await Promise.all([
        getTextHistory(20),
        getImageHistory(20),
      ]);

      setTextHistory(textData.analyses || []);
      setImageHistory(imageData.analyses || []);
    } catch (err) {
      setError("Failed to load history. Please try again.");
      console.error("History error:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getSeverityColor = (score) => {
    if (!score) return "text-gray-500";
    if (score >= 85) return "text-red-600";
    if (score >= 70) return "text-orange-600";
    if (score >= 50) return "text-yellow-600";
    return "text-green-600";
  };

  const getSeverityBg = (score) => {
    if (!score) return "bg-gray-100";
    if (score >= 85) return "bg-gradient-to-br from-red-50 to-red-100";
    if (score >= 70) return "bg-gradient-to-br from-orange-50 to-orange-100";
    if (score >= 50) return "bg-gradient-to-br from-yellow-50 to-yellow-100";
    return "bg-gradient-to-br from-green-50 to-green-100";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-green-500/30">
            <HistoryIcon size={40} className="text-white" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
            <Clock size={16} className="text-green-600" />
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
              Past Analyses
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Analysis{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              History
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            View your past disaster analyses and results
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-xl p-2 mb-8 inline-flex w-full max-w-md mx-auto border-2 border-green-100">
          <button
            onClick={() => setActiveTab("text")}
            className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === "text"
                ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                : "text-gray-600 hover:bg-green-50"
            }`}
          >
            <FileText size={20} />
            Text ({textHistory.length})
          </button>
          <button
            onClick={() => setActiveTab("image")}
            className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === "image"
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                : "text-gray-600 hover:bg-green-50"
            }`}
          >
            <Image size={20} />
            Image ({imageHistory.length})
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="spinner mb-4"></div>
            <p className="text-gray-600 font-medium">Loading history...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-8 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4">
              <AlertCircle size={32} className="text-red-600" />
            </div>
            <p className="text-red-700 font-semibold text-lg mb-4">{error}</p>
            <button onClick={fetchHistory} className="btn-primary">
              Try Again
            </button>
          </div>
        )}

        {/* History List */}
        {!loading && !error && (
          <div className="space-y-4">
            {/* Text History */}
            {activeTab === "text" && (
              <>
                {textHistory.length === 0 ? (
                  <div className="card text-center py-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6">
                      <FileText size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      No Text Analyses Yet
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Start analyzing disaster descriptions with AI
                    </p>
                    <Link
                      to="/text-analysis"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <FileText size={20} />
                      Analyze Text Now
                    </Link>
                  </div>
                ) : (
                  textHistory.map((item) => (
                    <div key={item.id} className="card hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        {/* Left Side */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-mono font-bold">
                              #{item.id}
                            </span>
                            {item.disaster_detected ? (
                              <span className="px-4 py-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg text-sm font-bold shadow-md flex items-center gap-2">
                                <AlertCircle size={16} />
                                Disaster Detected
                              </span>
                            ) : (
                              <span className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-lg text-sm font-bold">
                                No Disaster
                              </span>
                            )}
                          </div>

                          <p className="text-gray-700 mb-4 line-clamp-2 leading-relaxed">
                            {item.text}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center gap-2 text-gray-500">
                              <Calendar size={16} className="text-green-600" />
                              <span className="font-medium">
                                {formatDate(item.created_at)}
                              </span>
                            </div>
                            {item.disaster_type && (
                              <div className="px-3 py-1 bg-green-100 text-green-700 rounded-lg font-bold">
                                {item.disaster_type}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Right Side - Severity */}
                        {item.disaster_detected &&
                          item.severity_score !== null && (
                            <div
                              className={`${getSeverityBg(
                                item.severity_score
                              )} rounded-2xl px-8 py-6 text-center min-w-[140px] border-2 ${
                                item.severity_score >= 85
                                  ? "border-red-300"
                                  : item.severity_score >= 70
                                  ? "border-orange-300"
                                  : item.severity_score >= 50
                                  ? "border-yellow-300"
                                  : "border-green-300"
                              } shadow-lg`}
                            >
                              <Flame
                                size={24}
                                className={`mx-auto mb-2 ${getSeverityColor(
                                  item.severity_score
                                )}`}
                              />
                              <div
                                className={`text-4xl font-bold ${getSeverityColor(
                                  item.severity_score
                                )}`}
                              >
                                {item.severity_score}%
                              </div>
                              <div className="text-sm text-gray-600 font-medium mt-1">
                                Severity
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                  ))
                )}
              </>
            )}

            {/* Image History */}
            {activeTab === "image" && (
              <>
                {imageHistory.length === 0 ? (
                  <div className="card text-center py-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-2xl mb-6">
                      <Image size={40} className="text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      No Image Analyses Yet
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Start analyzing disaster images with AI
                    </p>
                    <Link
                      to="/image-analysis"
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      <Image size={20} />
                      Analyze Image Now
                    </Link>
                  </div>
                ) : (
                  imageHistory.map((item) => (
                    <div key={item.id} className="card hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Image Thumbnail */}
                        <div className="w-full md:w-56 h-56 flex-shrink-0">
                          <img
                            src={`http://localhost:8000${item.image_url}`}
                            alt="Analyzed"
                            className="w-full h-full object-cover rounded-xl border-2 border-green-200"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-mono font-bold">
                              #{item.id}
                            </span>
                            {item.disaster_detected ? (
                              <span className="px-4 py-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg text-sm font-bold shadow-md flex items-center gap-2">
                                <AlertCircle size={16} />
                                Disaster Detected
                              </span>
                            ) : (
                              <span className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-lg text-sm font-bold">
                                No Disaster
                              </span>
                            )}
                            {item.severity_category && (
                              <span
                                className={`px-4 py-1.5 rounded-lg text-sm font-bold shadow-md ${
                                  item.severity_category === "Catastrophic"
                                    ? "bg-red-500 text-white"
                                    : item.severity_category === "High"
                                    ? "bg-orange-500 text-white"
                                    : item.severity_category === "Medium"
                                    ? "bg-yellow-500 text-white"
                                    : "bg-green-500 text-white"
                                }`}
                              >
                                {item.severity_category}
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                            <div className="flex items-center gap-2 text-gray-500">
                              <Calendar
                                size={16}
                                className="text-emerald-600"
                              />
                              <span className="font-medium">
                                {formatDate(item.created_at)}
                              </span>
                            </div>
                            {item.disaster_type && (
                              <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg font-bold">
                                {item.disaster_type}
                              </div>
                            )}
                          </div>

                          {item.disaster_detected &&
                            item.severity_score !== null && (
                              <div className="bg-gray-100 rounded-xl p-4 border-2 border-green-200">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                    <Flame
                                      size={16}
                                      className={getSeverityColor(
                                        item.severity_score
                                      )}
                                    />
                                    Severity Level
                                  </span>
                                  <span
                                    className={`text-lg font-bold ${getSeverityColor(
                                      item.severity_score
                                    )}`}
                                  >
                                    {item.severity_score}%
                                  </span>
                                </div>
                                <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                                  <div
                                    className={`h-4 rounded-full transition-all ${
                                      item.severity_score >= 85
                                        ? "bg-gradient-to-r from-red-600 to-red-500"
                                        : item.severity_score >= 70
                                        ? "bg-gradient-to-r from-orange-600 to-orange-500"
                                        : item.severity_score >= 50
                                        ? "bg-gradient-to-r from-yellow-600 to-yellow-500"
                                        : "bg-gradient-to-r from-green-600 to-green-500"
                                    }`}
                                    style={{ width: `${item.severity_score}%` }}
                                  ></div>
                                </div>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
