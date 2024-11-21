import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ahmed-chat-backend-production.up.railway.app/api",
  withCredentials: true,
});
