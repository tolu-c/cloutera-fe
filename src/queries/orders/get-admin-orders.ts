import { useAdminOrders } from "@/services/adminOrders";
import { useQuery } from "@tanstack/react-query";
import { GetCustomerOrdersParams } from "@/types/customers.types";

export const useGetAdminOrders = (params: GetCustomerOrdersParams) => {
  const { handleGetOrdersList } = useAdminOrders();

  return useQuery({
    queryKey: ["orders", params],
    queryFn: () => handleGetOrdersList(params),
  });
};
