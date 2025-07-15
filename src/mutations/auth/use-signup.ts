import { useAuth } from "@/services/auth";
import { useError } from "@/hooks";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  const { userSignUp } = useAuth();
  const { handleError } = useError();

  return useMutation({
    mutationFn: userSignUp,
    onError: handleError,
  });
};
