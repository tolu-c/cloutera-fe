import { useAxiosApi } from "@/api/api-client";
import { endpoints } from "@/api/endpoints";
import { useError } from "@/hooks";
import { ApiMessageResponse, PaginatedResponse } from "@/types";
import { ApiAuthModes } from "@/types/enums";
import {
  AddOrderRequest,
  GetOrdersParams,
  OrderItem,
} from "@/types/orders.types";
import { appendQueryParams } from "@/utils";
import { AxiosResponse } from "axios";

export const useOrders = () => {
  const { handleError } = useError();

  const authApi = useAxiosApi(ApiAuthModes.BearerToken, handleError);

  const { addOrder, getUserOrders } = endpoints.orders;

  const handleAddOrder = async (data: AddOrderRequest) => {
    const res: AxiosResponse<ApiMessageResponse> = await authApi.post(
      addOrder,
      data,
    );

    return res.data;
  };

  const handleGetUserOrders = async (params: GetOrdersParams) => {
    const url = appendQueryParams(getUserOrders, params);

    const res: AxiosResponse<PaginatedResponse<OrderItem>> =
      await authApi.get(url);
    return res.data;
  };

  return {
    handleAddOrder,
    handleGetUserOrders,
  };
};
