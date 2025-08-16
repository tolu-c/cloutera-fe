import { useServices } from "@/services/services";
import { useQuery } from "@tanstack/react-query";

export const useGetServiceById = (id: string) => {
  const { handleGetServiceById } = useServices();

  return useQuery({
    queryKey: ["service", id],
    queryFn: () => handleGetServiceById(id),
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!id,
  });
};
