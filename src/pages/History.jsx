import { useState, useEffect } from "react";
import {
  History as HistoryIcon,
  FileText,
  Image,
  Calendar,
  AlertCircle,
  Loader2,
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
    if (score >= 85) return "bg-red-100";
    if (score >= 70) return "bg-orange-100";
    if (score >= 50) return "bg-yellow-100";
    return "bg-green-100";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4">
            <HistoryIcon size={32} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Analysis History
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            View your past disaster analyses and results
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-xl p-2 mb-8 inline-flex w-full max-w-md mx-auto">
          <button
            onClick={() => setActiveTab("text")}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === "text"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FileText size={20} />
            Text ({textHistory.length})
          </button>
          <button
            onClick={() => setActiveTab("image")}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === "image"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Image size={20} />
            Image ({imageHistory.length})
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={48} className="animate-spin text-blue-600" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
            <AlertCircle size={48} className="mx-auto text-red-600 mb-4" />
            <p className="text-red-600">{error}</p>
            <button
              onClick={fetchHistory}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
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
                  <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                    <FileText
                      size={64}
                      className="mx-auto text-gray-300 mb-4"
                    />
                    <p className="text-xl text-gray-600">
                      No text analyses yet
                    </p>
                    <a
                      href="/text-analysis"
                      className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Analyze Text Now
                    </a>
                  </div>
                ) : (
                  textHistory.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        {/* Left Side */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm font-medium text-gray-500">
                              #{item.id}
                            </span>
                            {item.disaster_detected ? (
                              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                                Disaster Detected
                              </span>
                            ) : (
                              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                No Disaster
                              </span>
                            )}
                          </div>

                          <p className="text-gray-700 mb-3 line-clamp-2">
                            {item.text}
                          </p>

                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              {formatDate(item.created_at)}
                            </div>
                            {item.disaster_type && (
                              <div className="font-semibold text-gray-900">
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
                              )} rounded-xl px-6 py-4 text-center min-w-[120px]`}
                            >
                              <div
                                className={`text-3xl font-bold ${getSeverityColor(
                                  item.severity_score
                                )}`}
                              >
                                {item.severity_score}%
                              </div>
                              <div className="text-sm text-gray-600">
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
                  <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                    <Image size={64} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-xl text-gray-600">
                      No image analyses yet
                    </p>
                    <a
                      href="/image-analysis"
                      className="inline-block mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Analyze Image Now
                    </a>
                  </div>
                ) : (
                  imageHistory.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Image Thumbnail */}
                        <div className="w-full md:w-48 h-48 flex-shrink-0">
                          <img
                            src={`http://localhost:8000${item.image_url}`}
                            alt="Analyzed"
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm font-medium text-gray-500">
                              #{item.id}
                            </span>
                            {item.disaster_detected ? (
                              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                                Disaster Detected
                              </span>
                            ) : (
                              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                No Disaster
                              </span>
                            )}
                            {item.severity_category && (
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  item.severity_category === "Catastrophic"
                                    ? "bg-red-100 text-red-700"
                                    : item.severity_category === "High"
                                    ? "bg-orange-100 text-orange-700"
                                    : item.severity_category === "Medium"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-green-100 text-green-700"
                                }`}
                              >
                                {item.severity_category}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-4 text-sm mb-3">
                            <div className="flex items-center gap-1 text-gray-500">
                              <Calendar size={16} />
                              {formatDate(item.created_at)}
                            </div>
                            {item.disaster_type && (
                              <div className="font-semibold text-gray-900">
                                {item.disaster_type}
                              </div>
                            )}
                          </div>

                          {item.disaster_detected &&
                            item.severity_score !== null && (
                              <div className="flex items-center gap-2">
                                <div className="flex-1 bg-gray-200 rounded-full h-3">
                                  <div
                                    className={`h-3 rounded-full ${
                                      item.severity_score >= 85
                                        ? "bg-red-600"
                                        : item.severity_score >= 70
                                        ? "bg-orange-600"
                                        : item.severity_score >= 50
                                        ? "bg-yellow-600"
                                        : "bg-green-600"
                                    }`}
                                    style={{ width: `${item.severity_score}%` }}
                                  ></div>
                                </div>
                                <span
                                  className={`font-bold ${getSeverityColor(
                                    item.severity_score
                                  )}`}
                                >
                                  {item.severity_score}%
                                </span>
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
