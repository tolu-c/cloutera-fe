import { useQuery } from "@tanstack/react-query";
import { useAdminCustomer } from "@/services/adminCustomer";

export const useGetCustomersStats = () => {
  const { handleGetCustomerStats } = useAdminCustomer();

  return useQuery({
    queryKey: ["customerStats"],
    queryFn: handleGetCustomerStats,
  });
};
