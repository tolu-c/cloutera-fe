import { useAuth } from "@/services/auth";
import { useError } from "@/hooks";
import { useMutation } from "@tanstack/react-query";

export const useResetPassword = () => {
  const { userResetPassword } = useAuth();
  const { handleError } = useError();

  return useMutation({
    mutationFn: userResetPassword,
    onError: handleError,
  });
};
