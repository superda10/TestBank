import axios from "axios";
import { APIS_TEST_BANK } from "../config";

// Create an axios instance with token from localStorage
const apiTestBankWithToken = axios.create({
  baseURL: APIS_TEST_BANK.baseUrl || "/", // fallback if not set
});

// Add a request interceptor to include token
apiTestBankWithToken.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiTestBankWithToken;

// Add a response interceptor to handle 401 Unauthorized
apiTestBankWithToken.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
