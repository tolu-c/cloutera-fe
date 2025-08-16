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
  ForgotPasswordFormData,
  ResetPasswordData,
  VerifyAccountData,
} from "@/types";
import { endpoints } from "@/api/endpoints";
import { useError } from "@/hooks";

export const useAuth = () => {
  const { handleError } = useError();
  const api = useAxiosApi(ApiAuthModes.NoAuth, handleError);
  const authApi = useAxiosApi(ApiAuthModes.BearerToken, handleError);

  const {
    login,
    login2fa,
    signup,
    verifyAccount,
    forgotPassword,
    resetPassword,
    logout,
    checkUsername,
  } = endpoints.auth;

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

  const userVerifyAccount = async (data: VerifyAccountData) => {
    const res: AxiosResponse<ApiMessageResponse> = await api.post(
      verifyAccount,
      data,
    );

    return res.data;
  };

  const userForgotPassword = async (data: ForgotPasswordFormData) => {
    const res: AxiosResponse<ApiMessageResponse> = await api.post(
      forgotPassword,
      data,
    );
    return res.data;
  };

  const userResetPassword = async (data: ResetPasswordData) => {
    const res: AxiosResponse<ApiMessageResponse> = await api.post(
      resetPassword,
      data,
    );
    return res.data;
  };

  const userLogout = async () => {
    const res: AxiosResponse<ApiMessageResponse> = await authApi.post(logout);
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
    userVerifyAccount,
    userForgotPassword,
    userResetPassword,
    userLogout,
    handleCheckUsername,
  };
};
