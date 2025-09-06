import { useAdminDashboard } from "@/services/adminDashboard";
import { useQuery } from "@tanstack/react-query";

export const useGetDashboardStats = () => {
  const { handleGetDashboardStats } = useAdminDashboard();

  return useQuery({
    queryKey: ["dashboardStats"],
    queryFn: handleGetDashboardStats,
  });
};
