import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import {
  Flame,
  Waves,
  Home,
  Wind,
  Tornado,
  AlertTriangle,
  MapPin,
  Clock,
  Target,
  Search,
  Loader2,
  Map as MapIcon,
  Sparkles,
  Zap,
} from "lucide-react";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom disaster icons for map markers
const getMarkerIcon = (type) => {
  const iconConfig = {
    wildfire: { color: "#ef4444", icon: <Flame size={20} color="white" /> },
    flood: { color: "#3b82f6", icon: <Waves size={20} color="white" /> },
    earthquake: { color: "#8b5cf6", icon: <Home size={20} color="white" /> },
    hurricane: { color: "#f97316", icon: <Wind size={20} color="white" /> },
    tornado: { color: "#eab308", icon: <Tornado size={20} color="white" /> },
    disaster: {
      color: "#ef4444",
      icon: <AlertTriangle size={20} color="white" />,
    },
  };

  const config = iconConfig[type] || iconConfig.disaster;
  const iconMarkup = renderToStaticMarkup(config.icon);

  return L.divIcon({
    html: `<div style="
      background-color: ${config.color};
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    ">${iconMarkup}</div>`,
    className: "custom-marker",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
  });
};

// Get Lucide icon component for disaster type
const getDisasterIcon = (type, size = 20) => {
  const icons = {
    wildfire: <Flame size={size} />,
    flood: <Waves size={size} />,
    earthquake: <Home size={size} />,
    hurricane: <Wind size={size} />,
    tornado: <Tornado size={size} />,
    disaster: <AlertTriangle size={size} />,
  };
  return icons[type] || icons.disaster;
};

const DisasterMap = () => {
  const [disasters, setDisasters] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeText = async () => {
    if (!textInput.trim()) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("text", textInput);

      const response = await fetch(
        "http://localhost:8000/api/location/detect-with-location",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.is_disaster && data.has_location) {
        const newDisasters = data.coordinates.map((coord) => ({
          id: Date.now() + Math.random(),
          text: textInput,
          location: coord.location,
          lat: coord.latitude,
          lng: coord.longitude,
          type: data.disaster_type,
          confidence: data.confidence,
          address: coord.full_address,
          timestamp: new Date().toLocaleString(),
        }));

        setDisasters([...disasters, ...newDisasters]);
      } else {
        alert(
          data.has_location
            ? "No disaster detected in this text"
            : "No location found in text"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to analyze text");
    } finally {
      setLoading(false);
      setTextInput("");
    }
  };

  const getDisasterColor = (type) => {
    const colors = {
      wildfire:
        "bg-gradient-to-r from-red-50 to-orange-50 border-red-500 text-red-700",
      flood:
        "bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-500 text-blue-700",
      earthquake:
        "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-500 text-purple-700",
      hurricane:
        "bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-500 text-orange-700",
      tornado:
        "bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-500 text-yellow-700",
      disaster:
        "bg-gradient-to-r from-red-50 to-orange-50 border-red-500 text-red-700",
    };
    return colors[type] || colors.disaster;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-green-500/30">
            <MapIcon size={40} className="text-white" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
            <Sparkles size={16} className="text-green-600" />
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
              Interactive Location Tracking
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Disaster{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Location Tracker
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter disaster text to detect and visualize locations on the map
          </p>
        </div>

        {/* Input Section */}
        <div className="card mb-8">
          <label className="block text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
            <AlertTriangle size={20} className="text-green-600" />
            Enter Disaster Report
          </label>
          <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Example: Wildfire spreading in California near Los Angeles, causing evacuations and destroying homes..."
            className="w-full min-h-[120px] p-5 text-base border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all resize-none"
          />
          <button
            onClick={analyzeText}
            disabled={loading || !textInput.trim()}
            className="btn-primary mt-4 w-full sm:w-auto text-lg"
          >
            {loading ? (
              <>
                <Loader2 size={22} className="animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Search size={22} />
                Detect & Map Location
              </>
            )}
          </button>
        </div>

        {/* Legend */}
        <div className="card mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Zap size={20} className="text-green-600" />
            Disaster Types Legend
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-200">
              <Flame size={24} className="text-red-500" />
              <span className="text-sm font-semibold text-gray-700">
                Wildfire
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
              <Waves size={24} className="text-blue-500" />
              <span className="text-sm font-semibold text-gray-700">Flood</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-200">
              <Home size={24} className="text-purple-500" />
              <span className="text-sm font-semibold text-gray-700">
                Earthquake
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl border border-orange-200">
              <Wind size={24} className="text-orange-500" />
              <span className="text-sm font-semibold text-gray-700">
                Hurricane
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl border border-yellow-200">
              <Tornado size={24} className="text-yellow-500" />
              <span className="text-sm font-semibold text-gray-700">
                Tornado
              </span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="card mb-8 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={20} className="text-green-600" />
            <h3 className="text-lg font-bold text-gray-900">
              Global Disaster Map
            </h3>
          </div>
          <div className="rounded-xl overflow-hidden border-4 border-green-200 shadow-xl">
            <MapContainer center={[20, 0]} zoom={2} style={{ height: "600px" }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {disasters.map((disaster) => (
                <Marker
                  key={disaster.id}
                  position={[disaster.lat, disaster.lng]}
                  icon={getMarkerIcon(disaster.type)}
                >
                  <Popup>
                    <div className="p-3 min-w-[250px]">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-red-200">
                        <AlertTriangle size={24} className="text-red-600" />
                        <h3 className="text-xl font-bold text-red-600">
                          {disaster.type.toUpperCase()}
                        </h3>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin
                            size={18}
                            className="text-green-600 mt-0.5 flex-shrink-0"
                          />
                          <div>
                            <strong className="text-gray-900">Location:</strong>
                            <p className="text-gray-700">{disaster.location}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Target size={18} className="text-green-600 mt-0.5" />
                          <div>
                            <strong className="text-gray-900">
                              Confidence:
                            </strong>
                            <p className="text-gray-700">
                              {(disaster.confidence * 100).toFixed(1)}%
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock size={18} className="text-green-600 mt-0.5" />
                          <div>
                            <strong className="text-gray-900">Time:</strong>
                            <p className="text-gray-700">
                              {disaster.timestamp}
                            </p>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 mt-3 border-l-4 border-green-500">
                          <p className="text-gray-700 italic text-xs leading-relaxed">
                            {disaster.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Disasters List */}
        {disasters.length > 0 && (
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                <AlertTriangle size={32} className="text-red-600" />
                Detected Disasters
              </h2>
              <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl shadow-lg">
                {disasters.length}
              </span>
            </div>
            <div className="space-y-4 max-h-[500px] overflow-y-auto">
              {disasters.map((disaster) => (
                <div
                  key={disaster.id}
                  className={`p-6 border-l-4 rounded-xl transition-all hover:shadow-xl ${getDisasterColor(
                    disaster.type
                  )}`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      {getDisasterIcon(disaster.type, 28)}
                      {disaster.type.toUpperCase()}
                    </h3>
                    <span className="text-xs bg-white px-3 py-2 rounded-lg flex items-center gap-2 font-medium">
                      <Clock size={14} />
                      {disaster.timestamp}
                    </span>
                  </div>
                  <p className="font-bold text-lg mb-2 flex items-center gap-2">
                    <MapPin size={20} />
                    {disaster.location}
                  </p>
                  <p className="text-sm mb-4 leading-relaxed">
                    {disaster.text}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="bg-white px-3 py-2 rounded-lg flex items-center gap-2 font-medium shadow-sm">
                      <Target size={14} />
                      Confidence: {(disaster.confidence * 100).toFixed(1)}%
                    </span>
                    <span className="bg-white px-3 py-2 rounded-lg font-mono font-medium shadow-sm">
                      {disaster.lat.toFixed(4)}°, {disaster.lng.toFixed(4)}°
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {disasters.length === 0 && (
          <div className="card text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6">
              <MapIcon size={40} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              No Disasters Detected Yet
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Enter disaster text above to see locations on the map
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-lg text-sm text-green-700 font-medium">
              <Sparkles size={16} />
              AI-powered location detection ready
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisasterMap;
