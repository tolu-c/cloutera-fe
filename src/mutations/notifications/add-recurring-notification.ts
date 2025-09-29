import { useNotifications } from "@/services/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotification } from "@/hooks/useNotification";
import { NotificationStatus } from "@/types/enums";

export function useAddRecurringNotification() {
  const { scheduleRecurringNotification } = useNotifications();
  const queryClient = useQueryClient();
  const { notify } = useNotification();

  return useMutation({
    mutationFn: scheduleRecurringNotification,
    onSuccess(res) {
      notify({ message: res.message, status: NotificationStatus.Success });

      void queryClient.invalidateQueries({
        queryKey: ["scheduledNotifications"],
      });
      void queryClient.invalidateQueries({
        queryKey: ["notification-stats"],
      });
    },
  });
}
