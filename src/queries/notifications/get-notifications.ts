import { useNotifications } from "@/services/notifications";
import { useQuery } from "@tanstack/react-query";

export function useGetNotifications() {
  const { getNotifications } = useNotifications();

  return useQuery({
    queryFn: getNotifications,
    queryKey: ["notifications"],
  });
}
