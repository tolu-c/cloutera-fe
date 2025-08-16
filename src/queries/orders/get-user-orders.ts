import { useOrders } from "@/services/orders";
import { GetOrdersParams } from "@/types/orders.types";
import { useQuery } from "@tanstack/react-query";

export const useGetUserOrders = (params: GetOrdersParams) => {
  const { handleGetUserOrders } = useOrders();

  return useQuery({
    queryKey: ["orders", params],
    queryFn: () => handleGetUserOrders(params),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
