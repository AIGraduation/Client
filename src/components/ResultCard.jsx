import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  MapPin,
  Clock,
  Info,
} from "lucide-react";

const ResultCard = ({ result, type }) => {
  if (!result) return null;

  const getSeverityColor = (score) => {
    if (score >= 85) return "text-red-600";
    if (score >= 70) return "text-orange-600";
    if (score >= 50) return "text-yellow-600";
    return "text-green-600";
  };

  const getSeverityBg = (score) => {
    if (score >= 85) return "bg-red-100";
    if (score >= 70) return "bg-orange-100";
    if (score >= 50) return "bg-yellow-100";
    return "bg-green-100";
  };

  const getCategoryBadge = (category) => {
    const colors = {
      Catastrophic: "bg-red-100 text-red-800",
      High: "bg-orange-100 text-orange-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Low: "bg-green-100 text-green-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-6 border-b">
        <div className="flex items-center gap-3">
          {result.disaster_detected ? (
            <CheckCircle size={32} className="text-green-600" />
          ) : (
            <XCircle size={32} className="text-gray-400" />
          )}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {result.disaster_detected
                ? "Disaster Detected"
                : "No Disaster Detected"}
            </h3>
            <p className="text-sm text-gray-500">
              Analysis ID: #{result.analysis_id}
            </p>
          </div>
        </div>
        {result.disaster_detected && result.confidence_score && (
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">
              {(result.confidence_score * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-500">Confidence</div>
          </div>
        )}
      </div>

      {result.disaster_detected && (
        <>
          {/* Disaster Type & Severity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Disaster Type */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={20} className="text-blue-600" />
                <h4 className="font-semibold text-gray-700">Disaster Type</h4>
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {result.disaster_type}
              </p>
            </div>

            {/* Severity Score */}
            {result.severity_score !== null && (
              <div
                className={`${getSeverityBg(
                  result.severity_score
                )} rounded-xl p-6`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Info
                    size={20}
                    className={getSeverityColor(result.severity_score)}
                  />
                  <h4 className="font-semibold text-gray-700">
                    Severity Score
                  </h4>
                </div>
                <div className="flex items-baseline gap-2">
                  <p
                    className={`text-3xl font-bold ${getSeverityColor(
                      result.severity_score
                    )}`}
                  >
                    {result.severity_score}%
                  </p>
                  {result.severity_category && (
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryBadge(
                        result.severity_category
                      )}`}
                    >
                      {result.severity_category}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Extracted Details (Text Analysis) */}
          {type === "text" && result.extracted_details && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Info size={20} className="text-blue-600" />
                Extracted Information
              </h4>
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                {result.extracted_details.deaths && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deaths:</span>
                    <span className="font-semibold text-red-600">
                      {result.extracted_details.deaths}
                    </span>
                  </div>
                )}
                {result.extracted_details.injuries && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Injuries:</span>
                    <span className="font-semibold text-orange-600">
                      {result.extracted_details.injuries}
                    </span>
                  </div>
                )}
                {result.extracted_details.missing_persons && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Missing Persons:</span>
                    <span className="font-semibold text-yellow-600">
                      {result.extracted_details.missing_persons}
                    </span>
                  </div>
                )}
                {result.extracted_details.buildings_collapsed && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Buildings Collapsed:</span>
                    <span className="font-semibold text-gray-900">
                      {result.extracted_details.buildings_collapsed}
                    </span>
                  </div>
                )}
                {result.extracted_details.roads_damaged && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Roads Damaged:</span>
                    <span className="font-semibold text-gray-900">
                      {result.extracted_details.roads_damaged}
                    </span>
                  </div>
                )}
                {result.extracted_details.financial_loss && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Financial Loss:</span>
                    <span className="font-semibold text-gray-900">
                      {result.extracted_details.financial_loss}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Temporal Info */}
          {result.temporal_info && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Clock size={20} className="text-blue-600" />
                Time Information
              </h4>
              <div className="bg-gray-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Day</p>
                  <p className="font-semibold text-gray-900">
                    {result.temporal_info.day || "Unknown"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-semibold text-gray-900">
                    {result.temporal_info.date || "Unknown"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Month</p>
                  <p className="font-semibold text-gray-900">
                    {result.temporal_info.month || "Unknown"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="font-semibold text-gray-900">
                    {result.temporal_info.year || "Unknown"}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Geographic Info */}
          {result.geographic_info && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <MapPin size={20} className="text-blue-600" />
                Location Information
              </h4>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.geographic_info.city && (
                    <div>
                      <p className="text-sm text-gray-500">City</p>
                      <p className="font-semibold text-gray-900">
                        {result.geographic_info.city}
                      </p>
                    </div>
                  )}
                  {result.geographic_info.country && (
                    <div>
                      <p className="text-sm text-gray-500">Country</p>
                      <p className="font-semibold text-gray-900">
                        {result.geographic_info.country}
                      </p>
                    </div>
                  )}
                  {result.geographic_info.latitude &&
                    result.geographic_info.longitude && (
                      <div className="md:col-span-2">
                        <p className="text-sm text-gray-500">Coordinates</p>
                        <p className="font-semibold text-gray-900">
                          {result.geographic_info.latitude}°N,{" "}
                          {result.geographic_info.longitude}°E
                        </p>
                        <span className="text-xs text-gray-500">
                          Accuracy: {result.geographic_info.accuracy}
                        </span>
                      </div>
                    )}
                </div>
              </div>
            </div>
          )}

          {/* Image Detections (YOLO Results) */}
          {type === "image" &&
            result.detections &&
            result.detections.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-blue-600" />
                  Detected Objects ({result.detections.length})
                </h4>
                <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                  {result.detections.map((detection, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                    >
                      <div>
                        <span className="font-semibold text-gray-900">
                          {detection.class}
                        </span>
                        {detection.count > 1 && (
                          <span className="ml-2 text-sm text-gray-500">
                            ({detection.count} detected)
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-medium text-blue-600">
                        {(detection.confidence * 100).toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Image Display */}
          {type === "image" && result.image_url && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3">
                Analyzed Image
              </h4>
              <img
                src={`http://localhost:8000${result.image_url}`}
                alt="Analyzed disaster"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ResultCard;
