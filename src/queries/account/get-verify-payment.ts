import { useAccount } from "@/services/account";
import { useQuery } from "@tanstack/react-query";

export function useGetVerifyPayment(reference: string) {
  const { handleVerifyPayment } = useAccount();

  return useQuery({
    queryKey: ["verifyPayStackPayment", reference],
    queryFn: () => handleVerifyPayment(reference),
    enabled: !!reference,
  });
}
