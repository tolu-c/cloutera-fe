import { useError } from "@/hooks";
import { useAxiosApi } from "@/api/api-client";
import { ApiAuthModes } from "@/types/enums";
import { endpoints } from "@/api/endpoints";
import { AxiosResponse } from "axios";
import { ApiDataResponse } from "@/types";
import { DashboardStats, DashboardTrends } from "@/types/dashboard.types";

export const useAdminDashboard = () => {
  const { handleError } = useError();
  const authApi = useAxiosApi(ApiAuthModes.BearerToken, handleError);

  const { dashboardStats, dashboardTrends } = endpoints.admin.dashboard;

  const handleGetDashboardStats = async () => {
    const res: AxiosResponse<ApiDataResponse<DashboardStats>> =
      await authApi.get(dashboardStats);

    return res.data;
  };

  const handleGetDashboardTrends = async () => {
    const res: AxiosResponse<ApiDataResponse<DashboardTrends>> =
      await authApi.get(dashboardTrends);
    return res.data;
  };

  return {
    handleGetDashboardStats,
    handleGetDashboardTrends,
  };
};
