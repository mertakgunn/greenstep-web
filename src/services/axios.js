import { deleteToken, getToken } from "./token.js";
import axios from "axios";

const apiUrl = "https://mertakgun.tr/api";

const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  let token = null;

  token = await getToken("greentoken");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      deleteToken("greentoken");
      deleteToken("user");
    }
    if (error?.response?.status === 404) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
