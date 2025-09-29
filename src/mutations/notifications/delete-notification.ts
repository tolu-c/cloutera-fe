import { useNotifications } from "@/services/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotification } from "@/hooks/useNotification";
import { NotificationStatus } from "@/types/enums";

export function useDeleteNotification(id: string) {
  const { handleDeleteNotification } = useNotifications();
  const queryClient = useQueryClient();
  const { notify } = useNotification();

  return useMutation({
    mutationFn: () => handleDeleteNotification(id),
    onSuccess: (res) => {
      notify({ message: res.message, status: NotificationStatus.Success });
      void queryClient.invalidateQueries({
        queryKey: ["notifications"],
      });
      void queryClient.invalidateQueries({
        queryKey: ["sentNotifications"],
      });
      void queryClient.invalidateQueries({
        queryKey: ["scheduledNotifications"],
      });
      void queryClient.invalidateQueries({
        queryKey: ["notification-stats"],
      });
    },
  });
}
