import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor to add auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common error globally
    if (error.response) {
      if (error.response.status === 401) {
        // Redirect to login page if unauthorized
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else if (error.response.status === 500) {
        alert("Server error. Please try again later.");
      } else if (error.code === "ECONNABORTED") {
        alert("Request timed out. Please try again.");
      }
    }
    return Promise.reject(error);
  },
);
export default axiosInstance;
