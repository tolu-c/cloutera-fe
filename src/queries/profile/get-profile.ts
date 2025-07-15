import { useProfile } from "@/services/profile";
import { useQuery } from "@tanstack/react-query";

export const useGetProfile = () => {
  const { handleGetProfile } = useProfile();

  return useQuery({
    queryKey: ["profile"],
    queryFn: handleGetProfile,
    staleTime: Infinity,
  });
};
