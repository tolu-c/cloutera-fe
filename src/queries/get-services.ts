import { useServices } from "@/services/services";
import { ServiceParams } from "@/types/services.types";
import { useQuery } from "@tanstack/react-query";

export const useGetServices = (params: ServiceParams) => {
  const { handleGetAllServices } = useServices();

  return useQuery({
    queryKey: ["services", params],
    queryFn: () => handleGetAllServices(params),
    staleTime: Infinity,
  });
};
