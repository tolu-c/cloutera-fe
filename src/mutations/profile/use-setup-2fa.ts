import { useProfile } from "@/services/profile";
import { useError } from "@/hooks";
import { useMutation } from "@tanstack/react-query";

export const useSetup2fa = () => {
  const { handleSetup2fa } = useProfile();
  const { handleError } = useError();

  return useMutation({
    mutationFn: handleSetup2fa,
    onError: handleError,
  });
};
