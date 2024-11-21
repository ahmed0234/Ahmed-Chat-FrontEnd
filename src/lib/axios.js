import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ahmedchatapp.vercel.app",
  withCredentials: true,
});
