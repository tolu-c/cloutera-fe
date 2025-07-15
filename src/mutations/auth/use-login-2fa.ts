import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { useAuth } from "@/services/auth";
import { useError, useLocalStorage } from "@/hooks";
import { CLOUTERA_TOKEN } from "@/types/constants";

export const useLogin2fa = () => {
  const { userLoginWith2fa } = useAuth();
  const { handleError } = useError();
  const { setItem } = useLocalStorage<string>(CLOUTERA_TOKEN);
  const router = useRouter();

  return useMutation({
    mutationFn: userLoginWith2fa,
    onError: handleError,
    onSuccess: async ({ data }) => {
      if (data.isVerified) {
        setItem(data.token);
        router.push("/order");
      }
    },
  });
};
