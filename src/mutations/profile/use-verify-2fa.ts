import { useProfile } from "@/services/profile";
import { useError } from "@/hooks";
import { useMutation } from "@tanstack/react-query";

export const useVerify2fa = () => {
  const { handleVerify2fa } = useProfile();
  const { handleError } = useError();

  return useMutation({
    mutationFn: handleVerify2fa,
    onError: handleError,
  });
};
