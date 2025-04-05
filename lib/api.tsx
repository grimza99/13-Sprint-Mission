import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },
});

export default instance;

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accessToken = localStorage.getItem("accessToken");
    if (typeof window !== "undefined" && accessToken) {
      config.headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return config;
  }
);

instance.interceptors.response.use((response: AxiosResponse) => {
  const accessToken = response.data.accessToken;
  if (typeof window !== "undefined" && accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }
  return response;
});
