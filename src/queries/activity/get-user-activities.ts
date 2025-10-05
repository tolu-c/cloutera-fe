import { useActivity } from "@/services/activity";
import { useQuery } from "@tanstack/react-query";
import { ActivityParams } from "@/types/activity.types";

export function useGetUserActivities(userId: string, params: ActivityParams) {
  const { handleUserActivities } = useActivity();

  return useQuery({
    queryFn: () => handleUserActivities(userId, params),
    queryKey: ["user-activities", userId, params],
  });
}
