import { useNotification } from "@/hooks/useNotification";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFaqs } from "@/services/faq";
import { NotificationStatus } from "@/types/enums";

export function useAddFaq() {
  const { notify } = useNotification();
  const queryClient = useQueryClient();
  const { handleAddFaq } = useFaqs();

  return useMutation({
    mutationFn: handleAddFaq,
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
