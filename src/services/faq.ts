import { useError } from "@/hooks";
import { useAxiosApi } from "@/api/api-client";
import { ApiAuthModes } from "@/types/enums";
import { endpoints } from "@/api/endpoints";
import { AxiosResponse } from "axios";
import { ApiDataResponse, ApiMessageResponse } from "@/types";
import { Faq, FaqResponse } from "@/types/faq.types";

export function useFaqs() {
  const { handleError } = useError();

  const authApi = useAxiosApi(ApiAuthModes.BearerToken, handleError);
  const api = useAxiosApi(ApiAuthModes.NoAuth, handleError);

  const { list, item, add, edit, deleteFaq } = endpoints.faq;

  async function handleListFaqs() {
    const res: AxiosResponse<ApiDataResponse<FaqResponse[]>> =
      await api.get(list);
    return res.data;
  }

  async function handleViewFaq(faqId: string) {
    const res: AxiosResponse<ApiDataResponse<FaqResponse>> = await api.get(
      item(faqId),
    );
    return res.data;
  }

  async function handleEditFaq(faqId: string, data: Faq) {
    const res: AxiosResponse<ApiDataResponse<FaqResponse>> = await authApi.put(
      edit(faqId),
      data,
    );
    return res.data;
  }

  async function handleDeleteFaq(faqId: string) {
    const res: AxiosResponse<ApiMessageResponse> = await authApi.delete(
      deleteFaq(faqId),
    );
    return res.data;
  }

  async function handleAddFaq(data: Faq) {
    const res: AxiosResponse<ApiMessageResponse> = await authApi.post(
      add,
      data,
    );
    return res.data;
  }

  return {
    handleListFaqs,
    handleAddFaq,
    handleViewFaq,
    handleDeleteFaq,
    handleEditFaq,
  };
}
