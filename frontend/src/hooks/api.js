import axios from "axios";
import store from "../store"
import { logout } from "../slices/authSlice";

const api = axios.create({
  baseURL: "https://sustainabite-mhc1.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message;

    if (status === 401 && message?.toLowerCase().includes("expired")) {
      alert("Your session has expired. Please log in again.");
      store.dispatch(logout());
      window.location.href = "/login"; 
    }

    return Promise.reject(error);
  }
);

export default api;
