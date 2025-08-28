import { useAccount } from "@/services/account";
import { useQuery } from "@tanstack/react-query";

// TODO: updated to use params for search and filter
export const useGetFundHistory = () => {
  const { handleGetFundHistory } = useAccount();

  return useQuery({
    queryKey: ["fundHistory"],
    queryFn: handleGetFundHistory,
  });
};
