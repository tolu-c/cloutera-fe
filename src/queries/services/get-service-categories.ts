import { useServices } from "@/services/services";
import { useQuery } from "@tanstack/react-query";

export const useGetServiceCategories = () => {
  const { handleGetServiceCategories } = useServices();

  return useQuery({
    queryKey: ["service-categories"],
    queryFn: handleGetServiceCategories,
    staleTime: Infinity,
  });
};
