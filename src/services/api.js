import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Health check
export const checkHealth = async () => {
  const response = await api.get("/health");
  return response.data;
};

// Text analysis
export const analyzeText = async (text) => {
  const response = await api.post("/text/analyze", { text });
  return response.data;
};

// Image analysis
export const analyzeImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`${API_BASE_URL}/image/analyze`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

// Get text history
export const getTextHistory = async (limit = 10) => {
  const response = await api.get(`/text/history?limit=${limit}`);
  return response.data;
};

// Get image history
export const getImageHistory = async (limit = 10) => {
  const response = await api.get(`/image/history?limit=${limit}`);
  return response.data;
};

// ===== SELF-LEARNING ENDPOINTS =====

// Submit feedback to help AI learn
export const submitFeedback = async (text, isDisaster, userId = "anonymous") => {
  console.log("submitFeedback called with:", { text, isDisaster, userId, type: typeof isDisaster });

  const payload = {
    text,
    is_disaster: isDisaster,
    user_id: userId,
  };

  console.log("Sending payload:", payload);

  const response = await api.post("/learning/feedback", payload);
  return response.data;
};

// Get learning statistics
export const getLearningStats = async () => {
  const response = await api.get("/learning/stats");
  return response.data;
};

// Get recent feedback submissions
export const getRecentFeedback = async (limit = 50) => {
  const response = await api.get(`/learning/feedback/recent?limit=${limit}`);
  return response.data;
};

// Trigger model retraining
export const triggerRetraining = async (force = false) => {
  const response = await api.post("/learning/retrain", { force });
  return response.data;
};

export default api;
