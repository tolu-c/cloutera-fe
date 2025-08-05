import { useAxiosApi } from "@/api/api-client";
import { endpoints } from "@/api/endpoints";
import { useError } from "@/hooks";
import { ApiDataResponse, PaginatedResponse } from "@/types";
import { ApiAuthModes } from "@/types/enums";
import {
  ServiceCategories,
  ServiceItem,
  ServiceParams,
} from "@/types/services.types";
import { appendQueryParams } from "@/utils";
import { AxiosResponse } from "axios";

export const useServices = () => {
  const { handleError } = useError();

  const authApi = useAxiosApi(ApiAuthModes.BearerToken, handleError);

  const { getAllServices, getServiceCategories } = endpoints.services;

  const handleGetAllServices = async (params: ServiceParams) => {
    const url = appendQueryParams(getAllServices, params);

    const res: AxiosResponse<PaginatedResponse<ServiceItem>> =
      await authApi.get(url);

    return res.data;
  };

  const handleGetServiceCategories = async () => {
    const res: AxiosResponse<ApiDataResponse<ServiceCategories>> =
      await authApi.get(getServiceCategories);

    return res.data;
  };

  return {
    handleGetAllServices,
    handleGetServiceCategories,
  };
};
