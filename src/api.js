// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.88.187:8000/api", // رابط الباكيند
});

// إضافة التوكن تلقائياً لكل طلب
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

// دوال الـ API
export const login = (data) => api.post("/login", data);
export const register = (data) => api.post("/register", data);

export default api;
