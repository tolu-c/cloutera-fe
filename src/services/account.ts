import { useAxiosApi } from "@/api/api-client";
import { endpoints } from "@/api/endpoints";
import { useError } from "@/hooks";
import { ApiDataResponse, PaginatedResponse } from "@/types";
import {
  AccountStatusResponse,
  AddFundRequest,
  AddFundResponse,
  InitializePaymentRequest,
  InitializePaymentResponse,
  Transaction,
  VerifyPaymentResponse,
} from "@/types/account.types";
import { ApiAuthModes } from "@/types/enums";
import { AxiosResponse } from "axios";

export const useAccount = () => {
  const { handleError } = useError();

  const authApi = useAxiosApi(ApiAuthModes.BearerToken, handleError);

  const {
    addFund,
    accountStatus,
    getFundsHistory,
    initializePayment,
    verifyPayment,
  } = endpoints.account;

  async function handleVerifyPayment(reference: string) {
    const res: AxiosResponse<ApiDataResponse<VerifyPaymentResponse>> =
      await authApi.get(verifyPayment(reference));
    return res.data;
  }

  async function handleInitializePayment(data: InitializePaymentRequest) {
    const res: AxiosResponse<ApiDataResponse<InitializePaymentResponse>> =
      await authApi.post(initializePayment, data);
    return res.data;
  }

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

  // TODO: updated to use params for search and filter
  const handleGetFundHistory = async () => {
    const res: AxiosResponse<PaginatedResponse<Transaction>> =
      await authApi.get(getFundsHistory);
    return res.data;
  };

  return {
    handleAddFund,
    handleGetAccountStatus,
    handleGetFundHistory,
    handleInitializePayment,
    handleVerifyPayment,
  };
};
