// src/api/index.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // تأكد من أن هذا هو عنوان الباكيند الصحيح
});

// إضافة التوكن إلى الطلبات تلقائيًا
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// دوال لتفعيل نقاط النهاية (Endpoints)
export const register = (data) => api.post("/user/register", data);
export const login = (data) => api.post("/auth/login", data);
export const createArticle = (data) => api.post("/articles", data);
export const getPendingArticles = () => api.get("/articles/pending");
export const acceptArticle = (id) => api.patch(`/articles/${id}/accept`);
export const rejectArticle = (id) => api.patch(`/articles/${id}/reject`);
export const getAllArticles = () => api.get("/articles");
