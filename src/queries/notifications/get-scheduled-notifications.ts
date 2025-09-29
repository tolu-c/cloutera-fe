import { useNotifications } from "@/services/notifications";
import { useQuery } from "@tanstack/react-query";
import { NotificationParams } from "@/types/notifications.types";

export function useGetScheduledNotifications(
  params: NotificationParams,
  shouldFetch: boolean,
) {
  const { getScheduledNotifications } = useNotifications();

  return useQuery({
    queryFn: () => getScheduledNotifications(params),
    queryKey: ["scheduledNotifications", params],
    enabled: shouldFetch,
  });
}
