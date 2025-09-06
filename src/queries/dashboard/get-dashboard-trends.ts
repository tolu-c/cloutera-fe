import { useAdminDashboard } from "@/services/adminDashboard";
import { useQuery } from "@tanstack/react-query";

export const useGetDashboardTrends = () => {
  const { handleGetDashboardTrends } = useAdminDashboard();

  return useQuery({
    queryKey: ["dashboardTrends"],
    queryFn: handleGetDashboardTrends,
  });
};
