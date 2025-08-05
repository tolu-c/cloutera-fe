import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { ApiAuthModes } from "@/types/enums";
import { useLocalStorage } from "@/hooks";
import { CLOUTERA_TOKEN } from "@/types/constants";

export const useAxiosApi = (
  apiAuthMode: ApiAuthModes,
  handleError?: (error: unknown) => void,
) => {
  const token = useLocalStorage<string>(CLOUTERA_TOKEN).getItem();

  const AxiosApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  AxiosApi.defaults.headers["Content-Type"] = "application/json";
  AxiosApi.defaults.headers["Accept"] = "application/json";

  AxiosApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (apiAuthMode === ApiAuthModes.BearerToken) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  });

  if (handleError) {
    AxiosApi.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        handleError(error);
        return Promise.reject(error);
      },
    );
  }

  return AxiosApi;
};
