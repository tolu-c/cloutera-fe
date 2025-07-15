import { useAuth } from "@/services/auth";
import { useError } from "@/hooks";
import { useMutation } from "@tanstack/react-query";

export const useVerifyAccount = () => {
  const { userVerifyAccount } = useAuth();
  const { handleError } = useError();

  return useMutation({
    mutationFn: userVerifyAccount,
    onError: handleError,
  });
};
