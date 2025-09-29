import { useNotifications } from "@/services/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotification } from "@/hooks/useNotification";
import { NotificationStatus } from "@/types/enums";

export function useMarkNotificationAsRead(id: string) {
  const { markNotificationAsRead } = useNotifications();
  const { notify } = useNotification();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => markNotificationAsRead(id),
    onSuccess: (res) => {
      notify({ message: res.message, status: NotificationStatus.Success });
      void queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
}
