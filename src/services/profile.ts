import { useError, useLocalStorage } from "@/hooks";
import { CLOUTERA_USER } from "@/types/constants";
import { useAxiosApi } from "@/api/api-client";
import { ApiAuthModes } from "@/types/enums";
import { endpoints } from "@/api/endpoints";
import { AxiosResponse } from "axios";
import {
  ApiDataResponse,
  ApiMessageResponse,
  Profile,
  Setup2FAData,
  UpdatePasswordData,
  UpdateProfileData,
  User,
  Verify2FAData,
} from "@/types";

export const useProfile = () => {
  const { handleError } = useError();
  const { setItem } = useLocalStorage<User>(CLOUTERA_USER);

  const authApi = useAxiosApi(ApiAuthModes.BearerToken, handleError);

  const { getProfile, updateProfile, changePassword, verify2fa, setup2fa } =
    endpoints.profile;

  const handleGetProfile = async () => {
    const res: AxiosResponse<ApiDataResponse<Profile>> =
      await authApi.get(getProfile);

    setItem(res.data.data.user);
    return res.data;
  };

  const handleUpdateProfile = async (data: UpdateProfileData) => {
    const res: AxiosResponse<ApiMessageResponse> = await authApi.post(
      updateProfile,
      data,
    );

    return res.data;
  };

  const handleChangePassword = async (data: UpdatePasswordData) => {
    const res: AxiosResponse<ApiMessageResponse> = await authApi.post(
      changePassword,
      data,
    );

    return res.data;
  };

  const handleSetup2fa = async (data: Setup2FAData) => {
    const res: AxiosResponse<ApiMessageResponse> = await authApi.post(
      setup2fa,
      data,
    );

    return res.data;
  };

  const handleVerify2fa = async (data: Verify2FAData) => {
    const res: AxiosResponse<ApiMessageResponse> = await authApi.post(
      verify2fa,
      data,
    );

    return res.data;
  };

  return {
    handleGetProfile,
    handleUpdateProfile,
    handleChangePassword,
    handleSetup2fa,
    handleVerify2fa,
  };
};
