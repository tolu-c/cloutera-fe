import { useAdminCustomer } from "@/services/adminCustomer";
import { useQuery } from "@tanstack/react-query";
import { GetCustomersParams } from "@/types/customers.types";

export const useGetCustomers = (params: GetCustomersParams) => {
  const { handleGetCustomers } = useAdminCustomer();

  return useQuery({
    queryKey: ["customers", params],
    queryFn: () => handleGetCustomers(params),
  });
};
