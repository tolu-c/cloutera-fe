import { useActivity } from "@/services/activity";
import { useQuery } from "@tanstack/react-query";

export function useGetAdminActivities() {
  const { handleAdminActivities } = useActivity();

  return useQuery({
    queryFn: handleAdminActivities,
    queryKey: ["all-activity"],
    staleTime: 1000 * 60 * 5,
  });
}
