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

export default api;
