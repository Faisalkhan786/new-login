import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1", // Example API
  headers: {
    "Content-Type": "application/json",
  },
});

//Automatically add token from localStorage
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})
export default apiClient;