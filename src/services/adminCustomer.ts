import { useError } from "@/hooks";
import { useAxiosApi } from "@/api/api-client";
import { ApiAuthModes } from "@/types/enums";
import { endpoints } from "@/api/endpoints";
import { AxiosResponse } from "axios";
import {
  ApiDataResponse,
  ApiMessageResponse,
  PaginatedResponse,
  User,
} from "@/types";
import {
  CustomerStats,
  GetCustomerOrdersParams,
  GetCustomersParams,
} from "@/types/customers.types";
import { appendQueryParams } from "@/utils";
import { AccountStatusResponse } from "@/types/account.types";
import { OrderItem } from "@/types/orders.types";

export const useAdminCustomer = () => {
  const { handleError } = useError();
  const authApi = useAxiosApi(ApiAuthModes.BearerToken, handleError);

  const {
    getStats,
    getUsersList,
    getSingleUser,
    getUserOrders,
    getUserAccount,
    toggleBlockUser,
  } = endpoints.admin.customers;

  const handleGetCustomerStats = async () => {
    const res: AxiosResponse<ApiDataResponse<CustomerStats>> =
      await authApi.get(getStats);

    return res.data;
  };

  const handleGetCustomers = async (params: GetCustomersParams) => {
    const url = appendQueryParams(getUsersList, params);

    const res: AxiosResponse<PaginatedResponse<User>> = await authApi.get(url);
    return res.data;
  };

  const handleGetCustomer = async (customerId: string) => {
    const res: AxiosResponse<ApiDataResponse<User>> = await authApi.get(
      getSingleUser(customerId),
    );
    return res.data;
  };

  const handleGetCustomerAccount = async (customerId: string) => {
    const res: AxiosResponse<ApiDataResponse<AccountStatusResponse>> =
      await authApi.get(getUserAccount(customerId));
    return res.data;
  };

  const handleGetCustomerOrders = async (
    customerId: string,
    params: GetCustomerOrdersParams,
  ) => {
    const url = appendQueryParams(getUserOrders(customerId), params);

    const res: AxiosResponse<PaginatedResponse<OrderItem>> =
      await authApi.get(url);
    return res.data;
  };

  const handleToggleBlockCustomer = async (customerId: string) => {
    const res: AxiosResponse<ApiMessageResponse> = await authApi.patch(
      toggleBlockUser(customerId),
    );
    return res.data;
  };

  return {
    handleGetCustomerStats,
    handleGetCustomers,
    handleGetCustomer,
    handleGetCustomerAccount,
    handleGetCustomerOrders,
    handleToggleBlockCustomer,
  };
};
