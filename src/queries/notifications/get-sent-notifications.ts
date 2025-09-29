import { useNotifications } from "@/services/notifications";
import { useQuery } from "@tanstack/react-query";
import { NotificationParams } from "@/types/notifications.types";

export function useGetSentNotifications(
  params: NotificationParams,
  shouldFetch: boolean,
) {
  const { getSentNotifications } = useNotifications();

  return useQuery({
    queryFn: () => getSentNotifications(params),
    queryKey: ["sentNotifications", params],
    enabled: shouldFetch,
  });
}
