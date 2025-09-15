import { useNotification } from "@/hooks/useNotification";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFaqs } from "@/services/faq";
import { NotificationStatus } from "@/types/enums";
import { Faq } from "@/types/faq.types";

export function useEditFaq(faqId: string) {
  const { notify } = useNotification();
  const queryClient = useQueryClient();
  const { handleEditFaq } = useFaqs();

  return useMutation({
    mutationFn: (data: Faq) => handleEditFaq(faqId, data),
    onSuccess(res) {
      notify({
        message: res.message,
        status: NotificationStatus.Success,
      });
      void queryClient.invalidateQueries({
        queryKey: ["faqList"],
      });
    },
  });
}
