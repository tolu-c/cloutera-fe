import { useError } from "@/hooks";
import { useAxiosApi } from "@/api/api-client";
import { ApiAuthModes } from "@/types/enums";
import { endpoints } from "@/api/endpoints";
import { AxiosResponse } from "axios";
import { ApiDataResponse, PaginatedResponse } from "@/types";
import { AdminOrderItem, AdminOrdersStats } from "@/types/orders.types";
import { GetCustomerOrdersParams } from "@/types/customers.types";
import { appendQueryParams } from "@/utils";

export const useAdminOrders = () => {
  const { handleError } = useError();
  const authApi = useAxiosApi(ApiAuthModes.BearerToken, handleError);

  const { getStats, getOrdersList } = endpoints.admin.orders;

  const handleGetOrdersStats = async () => {
    const res: AxiosResponse<ApiDataResponse<AdminOrdersStats>> =
      await authApi.get(getStats);
    return res.data;
  };

  const handleGetOrdersList = async (params: GetCustomerOrdersParams) => {
    const url = appendQueryParams(getOrdersList, params);

    const res: AxiosResponse<PaginatedResponse<AdminOrderItem>> =
      await authApi.get(url);
    return res.data;
  };

  return {
    handleGetOrdersStats,
    handleGetOrdersList,
  };
};
