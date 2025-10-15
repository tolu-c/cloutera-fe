import { useAccount } from "@/services/account";
import { useError } from "@/hooks";
import { useMutation } from "@tanstack/react-query";

export function useInitializePayment() {
  const { handleInitializePayment } = useAccount();
  const { handleError } = useError();

  return useMutation({
    mutationFn: handleInitializePayment,
    onError: handleError,
  });
}
