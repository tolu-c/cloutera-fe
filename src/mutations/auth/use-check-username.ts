import { useAuth } from "@/services/auth";
import { useError } from "@/hooks";
import { useMutation } from "@tanstack/react-query";

export const useCheckUsername = () => {
  const { handleCheckUsername } = useAuth();
  const { handleError } = useError();

  return useMutation({
    mutationFn: handleCheckUsername,
    onError: handleError,
  });
};
