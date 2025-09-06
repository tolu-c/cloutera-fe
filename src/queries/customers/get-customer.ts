import { useAdminCustomer } from "@/services/adminCustomer";
import { useQuery } from "@tanstack/react-query";

export const useGetCustomer = (customerId: string) => {
  const { handleGetCustomer } = useAdminCustomer();

  return useQuery({
    queryKey: ["customer", customerId],
    queryFn: () => handleGetCustomer(customerId),
  });
};
