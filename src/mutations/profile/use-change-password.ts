import { useProfile } from "@/services/profile";
import { useError } from "@/hooks";
import { useMutation } from "@tanstack/react-query";

export const useChangePassword = () => {
  const { handleChangePassword } = useProfile();
  const { handleError } = useError();

  return useMutation({
    mutationFn: handleChangePassword,
    onError: handleError,
  });
};
