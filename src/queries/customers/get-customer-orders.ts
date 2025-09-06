import { useAdminCustomer } from "@/services/adminCustomer";
import { useQuery } from "@tanstack/react-query";
import { GetCustomerOrdersParams } from "@/types/customers.types";

export const useGetCustomerOrders = (
  customerId: string,
  params: GetCustomerOrdersParams,
) => {
  const { handleGetCustomerOrders } = useAdminCustomer();

  return useQuery({
    queryKey: ["customerOrders", customerId, params],
    queryFn: () => handleGetCustomerOrders(customerId, params),
  });
};
