import axios from "axios";

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
    const isTokenExpired =
      error.response &&
      error.response.status === 401 &&
      error.response.data.message === "Token expired";

    if (isTokenExpired) {
      alert("Your session has expired. Please log in again.");
      localStorage.removeItem("token");
      window.location.href = "/login"; 
    }
    return Promise.reject(error);
  }
);

export default api;
