import { useNotifications } from "@/services/notifications";
import { useQuery } from "@tanstack/react-query";

export function useGetNotificationStats() {
  const { getNotificationStats } = useNotifications();

  return useQuery({
    queryFn: getNotificationStats,
    queryKey: ["notification-stats"],
  });
}
