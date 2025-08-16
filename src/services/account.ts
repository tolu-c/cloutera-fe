import { useAxiosApi } from "@/api/api-client";
import { endpoints } from "@/api/endpoints";
import { useError } from "@/hooks";
import { ApiDataResponse } from "@/types";
import {
  AccountStatusResponse,
  AddFundRequest,
  AddFundResponse,
} from "@/types/account.types";
import { ApiAuthModes } from "@/types/enums";
import { AxiosResponse } from "axios";

export const useAccount = () => {
  const { handleError } = useError();

  const authApi = useAxiosApi(ApiAuthModes.BearerToken, handleError);

  const { addFund, accountStatus } = endpoints.account;

  const handleAddFund = async (data: AddFundRequest) => {
    const res: AxiosResponse<ApiDataResponse<AddFundResponse>> =
      await authApi.post(addFund, data);

    return res.data;
  };

  const handleGetAccountStatus = async () => {
    const res: AxiosResponse<ApiDataResponse<AccountStatusResponse>> =
      await authApi.get(accountStatus);
    return res.data;
  };

  return {
    handleAddFund,
    handleGetAccountStatus,
  };
};
