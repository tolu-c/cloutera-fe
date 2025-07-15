import { useAuth } from "@/services/auth";
import { useError } from "@/hooks";
import { useMutation } from "@tanstack/react-query";

export const useForgotPassword = () => {
  const { userForgotPassword } = useAuth();
  const { handleError } = useError();

  return useMutation({
    mutationFn: userForgotPassword,
    onError: handleError,
  });
};
