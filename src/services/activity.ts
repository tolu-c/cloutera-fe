import { useError } from "@/hooks";
import { useAxiosApi } from "@/api/api-client";
import { ApiAuthModes } from "@/types/enums";
import { endpoints } from "@/api/endpoints";
import { AxiosResponse } from "axios";
import { ApiDataResponse, PaginatedResponse } from "@/types";
import { Activity, ActivityParams } from "@/types/activity.types";
import { appendQueryParams } from "@/utils";

export function useActivity() {
  const { handleError } = useError();

  const authApi = useAxiosApi(ApiAuthModes.BearerToken, handleError);

  const { adminActivities, userActivities } = endpoints.admin.activity;

  async function handleAdminActivities() {
    const res: AxiosResponse<ApiDataResponse<Activity[]>> =
      await authApi.get(adminActivities);
    return res.data;
  }

  async function handleUserActivities(userId: string, params: ActivityParams) {
    const url = appendQueryParams(userActivities(userId), params);

    const res: AxiosResponse<PaginatedResponse<Activity>> =
      await authApi.get(url);
    return res.data;
  }

  return {
    handleAdminActivities,
    handleUserActivities,
  };
}
