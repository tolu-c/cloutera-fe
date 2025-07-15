import { AxiosResponse } from "axios";

import { useAxiosApi } from "@/api/api-client";
import { ApiAuthModes } from "@/types/enums";
import {
  ApiDataResponse,
  ApiMessageResponse,
  CheckUsernameData,
  LoginData,
  LoginDataWith2FA,
  LoginResponse,
  SignupData,
} from "@/types";
import { endpoints } from "@/api/endpoints";

export const useAuth = () => {
  const api = useAxiosApi(ApiAuthModes.NoAuth);

  const { login, login2fa, signup, checkUsername } = endpoints.auth;

  const userLogin = async (data: LoginData) => {
    const res: AxiosResponse<ApiDataResponse<LoginResponse>> = await api.post(
      login,
      data,
    );

    return res.data;
  };

  const userLoginWith2fa = async (data: LoginDataWith2FA) => {
    const res: AxiosResponse<ApiDataResponse<LoginResponse>> = await api.post(
      login2fa,
      data,
    );

    return res.data;
  };

  const userSignUp = async (data: SignupData) => {
    const res: AxiosResponse<ApiMessageResponse> = await api.post(signup, data);
    return res.data;
  };

  const handleCheckUsername = async (data: CheckUsernameData) => {
    const res: AxiosResponse<ApiMessageResponse> = await api.post(
      checkUsername,
      data,
    );

    return res.data;
  };

  return {
    userLogin,
    userLoginWith2fa,
    userSignUp,
    handleCheckUsername,
  };
};
