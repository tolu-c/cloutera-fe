import { useAdminCustomer } from "@/services/adminCustomer";
import { useQuery } from "@tanstack/react-query";

export const useGetCustomerAccount = (customerId: string) => {
  const { handleGetCustomerAccount } = useAdminCustomer();

  return useQuery({
    queryKey: ["customerAccount", customerId],
    queryFn: () => handleGetCustomerAccount(customerId),
  });
};
