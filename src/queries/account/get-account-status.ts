import { useAccount } from "@/services/account";
import { useQuery } from "@tanstack/react-query";

export const useGetAccountStatus = () => {
  const { handleGetAccountStatus } = useAccount();

  return useQuery({
    queryKey: ["accountStatus"],
    queryFn: handleGetAccountStatus,
  });
};
