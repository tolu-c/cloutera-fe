import { AxiosResponse } from "axios";

import { useAxiosApi } from "@/api/api-client";
import { ApiAuthModes } from "@/types/enums";
import {
  ApiDataResponse,
  ApiMessageResponse,
  LoginData,
  LoginResponse,
  SignupData,
} from "@/types";
import { endpoints } from "@/api/endpoints";

export const useAuth = () => {
  const api = useAxiosApi(ApiAuthModes.NoAuth);

  const { login, signup } = endpoints.auth;

  const userLogin = async (data: LoginData) => {
    const res: AxiosResponse<ApiDataResponse<LoginResponse>> = await api.post(
      login,
      data,
    );

    return res.data;
  };

  const userSignUp = async (data: SignupData) => {
    const res: AxiosResponse<ApiMessageResponse> = await api.post(signup, data);
    return res.data;
  };

  return {
    userLogin,
    userSignUp,
  };
};
