import axios, { InternalAxiosRequestConfig } from "axios";
import { ApiAuthModes } from "@/types/enums";

export const useAxiosApi = (
  apiAuthMode: ApiAuthModes,
  token?: string | null,
) => {
  const AxiosApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  AxiosApi.defaults.headers["Content-Type"] = "application/json";
  AxiosApi.defaults.headers["Accept"] = "application/json";

  AxiosApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (apiAuthMode === ApiAuthModes.BearerToken && token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  });

  return AxiosApi;
};
