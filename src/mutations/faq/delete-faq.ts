import { useNotification } from "@/hooks/useNotification";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFaqs } from "@/services/faq";
import { NotificationStatus } from "@/types/enums";

export function useDeleteFaq(faqId: string) {
  const { notify } = useNotification();
  const queryClient = useQueryClient();
  const { handleDeleteFaq } = useFaqs();

  return useMutation({
    mutationFn: () => handleDeleteFaq(faqId),
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
