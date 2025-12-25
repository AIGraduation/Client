import { Link } from "react-router-dom";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  MapPin,
  Clock,
  Info,
  Map,
  Navigation,
  Flame,
  Users,
  Building,
  DollarSign,
  Target,
} from "lucide-react";
import { useState, useEffect } from "react";

const ResultCard = ({ result, type, inputText }) => {
  const [locationData, setLocationData] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(false);

  useEffect(() => {
    if (result?.disaster_detected && type === "text" && inputText) {
      extractLocation(inputText);
    }
  }, [result, type, inputText]);

  const extractLocation = async (text) => {
    setLoadingLocation(true);
    try {
      const formData = new FormData();
      formData.append("text", text);

      const response = await fetch(
        "http://localhost:8000/api/location/detect-with-location",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.has_location) {
        setLocationData(data);
      }
    } catch (error) {
      console.error("Location extraction failed:", error);
    } finally {
      setLoadingLocation(false);
    }
  };

  const openInMaps = (lat, lng, locationName) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, "_blank");
  };

  if (!result) return null;

  // ENHANCED: More granular severity levels
  const getSeverityColor = (score) => {
    if (score >= 95) return "text-red-700";
    if (score >= 85) return "text-red-600";
    if (score >= 75) return "text-orange-600";
    if (score >= 65) return "text-orange-500";
    if (score >= 50) return "text-yellow-600";
    if (score >= 35) return "text-yellow-500";
    if (score >= 25) return "text-green-600";
    return "text-green-500";
  };

  const getSeverityBg = (score) => {
    if (score >= 95) return "bg-gradient-to-br from-red-100 to-red-200";
    if (score >= 85) return "bg-gradient-to-br from-red-50 to-red-100";
    if (score >= 75) return "bg-gradient-to-br from-orange-50 to-orange-100";
    if (score >= 65) return "bg-gradient-to-br from-orange-50 to-yellow-50";
    if (score >= 50) return "bg-gradient-to-br from-yellow-50 to-yellow-100";
    if (score >= 35) return "bg-gradient-to-br from-yellow-50 to-green-50";
    if (score >= 25) return "bg-gradient-to-br from-green-50 to-green-100";
    return "bg-gradient-to-br from-green-50 to-emerald-50";
  };

  const getSeverityBorder = (score) => {
    if (score >= 95) return "border-red-700";
    if (score >= 85) return "border-red-600";
    if (score >= 75) return "border-orange-600";
    if (score >= 65) return "border-orange-500";
    if (score >= 50) return "border-yellow-600";
    if (score >= 35) return "border-yellow-500";
    if (score >= 25) return "border-green-600";
    return "border-green-500";
  };

  const getSeverityIconBg = (score) => {
    if (score >= 95) return "bg-red-200";
    if (score >= 85) return "bg-red-100";
    if (score >= 75) return "bg-orange-100";
    if (score >= 65) return "bg-orange-50";
    if (score >= 50) return "bg-yellow-100";
    if (score >= 35) return "bg-yellow-50";
    if (score >= 25) return "bg-green-100";
    return "bg-green-50";
  };

  const getSeverityCategory = (score) => {
    if (score >= 95) return "Catastrophic";
    if (score >= 85) return "Very High";
    if (score >= 75) return "High";
    if (score >= 65) return "Moderate-High";
    if (score >= 50) return "Moderate";
    if (score >= 35) return "Low-Moderate";
    if (score >= 25) return "Low";
    return "Very Low";
  };

  const getCategoryBadge = (score) => {
    const category = getSeverityCategory(score);
    const colors = {
      Catastrophic:
        "bg-red-700 text-white shadow-lg shadow-red-700/50 animate-pulse",
      "Very High": "bg-red-600 text-white shadow-lg shadow-red-600/50",
      High: "bg-orange-600 text-white shadow-lg shadow-orange-600/50",
      "Moderate-High":
        "bg-orange-500 text-white shadow-lg shadow-orange-500/50",
      Moderate: "bg-yellow-600 text-white shadow-lg shadow-yellow-600/50",
      "Low-Moderate": "bg-yellow-500 text-white shadow-lg shadow-yellow-500/50",
      Low: "bg-green-600 text-white shadow-lg shadow-green-600/50",
      "Very Low": "bg-green-500 text-white shadow-lg shadow-green-500/50",
    };
    return {
      className: colors[category] || "bg-gray-500 text-white",
      label: category,
    };
  };

  return (
    <div className="card animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b-2 border-green-100">
        <div className="flex items-center gap-4">
          <div
            className={`p-3 rounded-xl ${
              result.disaster_detected ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            {result.disaster_detected ? (
              <CheckCircle size={40} className="text-green-600" />
            ) : (
              <XCircle size={40} className="text-gray-400" />
            )}
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {result.disaster_detected
                ? "Disaster Detected"
                : "No Disaster Detected"}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Analysis ID:{" "}
              <span className="font-mono">#{result.analysis_id}</span>
            </p>
          </div>
        </div>
        {result.disaster_detected && result.confidence_score && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 shadow-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent text-center">
              {(result.confidence_score * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600 font-medium text-center mt-1">
              Confidence Score
            </div>
          </div>
        )}
      </div>

      {result.disaster_detected && (
        <>
          {/* Disaster Type & Severity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Disaster Type */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <AlertTriangle size={24} className="text-green-600" />
                </div>
                <h4 className="font-bold text-gray-700 text-lg">
                  Disaster Type
                </h4>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {result.disaster_type}
              </p>
            </div>

            {/* ENHANCED Severity Score */}
            {result.severity_score !== null && (
              <div
                className={`${getSeverityBg(
                  result.severity_score
                )} rounded-2xl p-6 border-l-4 ${getSeverityBorder(
                  result.severity_score
                )} shadow-md hover:shadow-xl transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 ${getSeverityIconBg(
                      result.severity_score
                    )} rounded-lg`}
                  >
                    <Flame
                      size={24}
                      className={getSeverityColor(result.severity_score)}
                    />
                  </div>
                  <h4 className="font-bold text-gray-700 text-lg">
                    Severity Level
                  </h4>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <p
                    className={`text-4xl font-bold ${getSeverityColor(
                      result.severity_score
                    )}`}
                  >
                    {result.severity_score}%
                  </p>
                  <span
                    className={`px-4 py-2 rounded-xl text-sm font-bold ${
                      getCategoryBadge(result.severity_score).className
                    }`}
                  >
                    {getCategoryBadge(result.severity_score).label}
                  </span>
                </div>

                {/* Visual severity bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        result.severity_score >= 85
                          ? "bg-gradient-to-r from-red-500 to-red-700"
                          : result.severity_score >= 70
                          ? "bg-gradient-to-r from-orange-500 to-orange-600"
                          : result.severity_score >= 50
                          ? "bg-gradient-to-r from-yellow-500 to-yellow-600"
                          : "bg-gradient-to-r from-green-500 to-green-600"
                      }`}
                      style={{ width: `${result.severity_score}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>Low</span>
                    <span>Moderate</span>
                    <span>High</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* LOCATION SECTION */}
          {type === "text" && locationData && locationData.has_location && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <MapPin size={24} className="text-emerald-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-xl">
                  Detected Location
                  {locationData.coordinates.length > 1 ? "s" : ""}
                </h4>
              </div>
              <div className="space-y-4">
                {locationData.coordinates.map((coord, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-l-4 border-emerald-500 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div className="flex-1">
                        <h5 className="text-2xl font-bold text-gray-900 mb-2">
                          {coord.location}
                        </h5>
                        <p className="text-gray-600 leading-relaxed">
                          {coord.full_address}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          openInMaps(
                            coord.latitude,
                            coord.longitude,
                            coord.location
                          )
                        }
                        className="btn-primary flex items-center gap-2 whitespace-nowrap"
                      >
                        <Navigation size={18} />
                        Open in Maps
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t-2 border-emerald-200">
                      <div className="bg-white/70 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1 font-medium">
                          LATITUDE
                        </p>
                        <p className="font-mono font-bold text-gray-900 text-lg">
                          {coord.latitude.toFixed(6)}°
                        </p>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1 font-medium">
                          LONGITUDE
                        </p>
                        <p className="font-mono font-bold text-gray-900 text-lg">
                          {coord.longitude.toFixed(6)}°
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Map Button */}
              <div className="mt-6">
                <Link
                  to="/map"
                  state={{
                    disaster: {
                      id: Date.now(),
                      text: inputText,
                      location: locationData.coordinates[0].location,
                      lat: locationData.coordinates[0].latitude,
                      lng: locationData.coordinates[0].longitude,
                      type: result.disaster_type,
                      confidence: result.confidence_score,
                      address: locationData.coordinates[0].full_address,
                      timestamp: new Date().toLocaleString(),
                    },
                  }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all hover:-translate-y-1"
                >
                  <Map size={22} />
                  View on Interactive Map
                </Link>
              </div>
            </div>
          )}

          {/* Loading Location */}
          {type === "text" && loadingLocation && (
            <div className="mb-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 flex items-center gap-4 border-2 border-green-200">
                <div className="animate-spin">
                  <MapPin size={28} className="text-green-600" />
                </div>
                <p className="text-gray-700 font-medium text-lg">
                  Extracting location information...
                </p>
              </div>
            </div>
          )}

          {/* Extracted Details */}
          {type === "text" && result.extracted_details && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <Info size={24} className="text-teal-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-xl">
                  Extracted Information
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {result.extracted_details.deaths && (
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border-l-4 border-red-500 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Users size={20} className="text-red-600" />
                      <span className="text-gray-600 font-medium">Deaths</span>
                    </div>
                    <span className="text-2xl font-bold text-red-600">
                      {result.extracted_details.deaths}
                    </span>
                  </div>
                )}
                {result.extracted_details.injuries && (
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border-l-4 border-orange-500 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Users size={20} className="text-orange-600" />
                      <span className="text-gray-600 font-medium">
                        Injuries
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-orange-600">
                      {result.extracted_details.injuries}
                    </span>
                  </div>
                )}
                {result.extracted_details.missing_persons && (
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-5 border-l-4 border-yellow-500 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Users size={20} className="text-yellow-600" />
                      <span className="text-gray-600 font-medium">Missing</span>
                    </div>
                    <span className="text-2xl font-bold text-yellow-600">
                      {result.extracted_details.missing_persons}
                    </span>
                  </div>
                )}
                {result.extracted_details.buildings_collapsed && (
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border-l-4 border-gray-500 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Building size={20} className="text-gray-600" />
                      <span className="text-gray-600 font-medium">
                        Buildings Collapsed
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                      {result.extracted_details.buildings_collapsed}
                    </span>
                  </div>
                )}
                {result.extracted_details.roads_damaged && (
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border-l-4 border-gray-500 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Target size={20} className="text-gray-600" />
                      <span className="text-gray-600 font-medium">
                        Roads Damaged
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                      {result.extracted_details.roads_damaged}
                    </span>
                  </div>
                )}
                {result.extracted_details.financial_loss && (
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border-l-4 border-green-500 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign size={20} className="text-green-600" />
                      <span className="text-gray-600 font-medium">
                        Financial Loss
                      </span>
                    </div>
                    <span className="text-xl font-bold text-green-600">
                      {result.extracted_details.financial_loss}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Temporal Info */}
          {result.temporal_info && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Clock size={24} className="text-cyan-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-xl">
                  Time Information
                </h4>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white/70 rounded-lg p-4">
                    <p className="text-xs text-gray-500 font-medium mb-2">
                      DAY
                    </p>
                    <p className="font-bold text-gray-900 text-lg">
                      {result.temporal_info.day || "Unknown"}
                    </p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4">
                    <p className="text-xs text-gray-500 font-medium mb-2">
                      DATE
                    </p>
                    <p className="font-bold text-gray-900 text-lg">
                      {result.temporal_info.date || "Unknown"}
                    </p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4">
                    <p className="text-xs text-gray-500 font-medium mb-2">
                      MONTH
                    </p>
                    <p className="font-bold text-gray-900 text-lg">
                      {result.temporal_info.month || "Unknown"}
                    </p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4">
                    <p className="text-xs text-gray-500 font-medium mb-2">
                      YEAR
                    </p>
                    <p className="font-bold text-gray-900 text-lg">
                      {result.temporal_info.year || "Unknown"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Geographic Info */}
          {result.geographic_info && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <MapPin size={24} className="text-emerald-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-xl">
                  Geographic Information
                </h4>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {result.geographic_info.city && (
                    <div className="bg-white/70 rounded-lg p-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">
                        CITY
                      </p>
                      <p className="font-bold text-gray-900 text-lg">
                        {result.geographic_info.city}
                      </p>
                    </div>
                  )}
                  {result.geographic_info.country && (
                    <div className="bg-white/70 rounded-lg p-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">
                        COUNTRY
                      </p>
                      <p className="font-bold text-gray-900 text-lg">
                        {result.geographic_info.country}
                      </p>
                    </div>
                  )}
                  {result.geographic_info.latitude &&
                    result.geographic_info.longitude && (
                      <div className="md:col-span-2 bg-white/70 rounded-lg p-4">
                        <p className="text-xs text-gray-500 font-medium mb-2">
                          COORDINATES
                        </p>
                        <p className="font-mono font-bold text-gray-900 text-lg mb-1">
                          {result.geographic_info.latitude}°N,{" "}
                          {result.geographic_info.longitude}°E
                        </p>
                        <span className="text-xs text-gray-500 font-medium">
                          Accuracy: {result.geographic_info.accuracy}
                        </span>
                      </div>
                    )}
                </div>
              </div>
            </div>
          )}

          {/* Image Detections */}
          {type === "image" &&
            result.detections &&
            result.detections.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Target size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-xl">
                    Detected Objects ({result.detections.length})
                  </h4>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg space-y-3">
                  {result.detections.map((detection, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-white/70 rounded-xl p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="font-bold text-gray-900 text-lg">
                          {detection.class}
                        </span>
                        {detection.count > 1 && (
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                            {detection.count}x
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-bold text-purple-600 px-4 py-2 bg-purple-100 rounded-lg">
                        {(detection.confidence * 100).toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Image Display */}
          {type === "image" && result.image_url && (
            <div className="mb-8">
              <h4 className="font-bold text-gray-900 text-xl mb-4">
                Analyzed Image
              </h4>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-green-100">
                <img
                  src={`http://localhost:8000${result.image_url}`}
                  alt="Analyzed disaster"
                  className="w-full"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ResultCard;
