import { useAdminOrders } from "@/services/adminOrders";
import { useQuery } from "@tanstack/react-query";

export const useGetAdminOrdersStats = () => {
  const { handleGetOrdersStats } = useAdminOrders();

  return useQuery({
    queryKey: ["adminOrdersStats"],
    queryFn: handleGetOrdersStats,
  });
};
