import { useNotifications } from "@/services/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotification } from "@/hooks/useNotification";
import { NotificationStatus } from "@/types/enums";

export function useAddNotification() {
  const { addNotification } = useNotifications();
  const queryClient = useQueryClient();
  const { notify } = useNotification();

  return useMutation({
    mutationFn: addNotification,
    onSuccess(res) {
      notify({ message: res.message, status: NotificationStatus.Success });
      void queryClient.invalidateQueries({
        queryKey: ["notifications"],
      });
      void queryClient.invalidateQueries({
        queryKey: ["sentNotifications"],
      });
      void queryClient.invalidateQueries({
        queryKey: ["notification-stats"],
      });
    },
  });
}
