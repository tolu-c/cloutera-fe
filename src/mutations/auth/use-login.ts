import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { useAuth } from "@/services/auth";
import { useError, useLocalStorage } from "@/hooks";
import {
  CLOUTERA_TOKEN,
  CLOUTERA_USER_EMAIL,
  CLOUTERA_USER_PASSWORD,
} from "@/types/constants";

export const useLogin = () => {
  const { userLogin } = useAuth();
  const { handleError } = useError();
  const { setItem } = useLocalStorage<string>(CLOUTERA_TOKEN);
  const { setItem: setEmail } = useLocalStorage<string>(CLOUTERA_USER_EMAIL);
  const { setItem: setPassword } = useLocalStorage<string>(
    CLOUTERA_USER_PASSWORD,
  );
  const router = useRouter();

  return useMutation({
    mutationFn: userLogin,
    onError: handleError,
    onSuccess: ({ data }, variables) => {
      console.log(variables);
      if (data.isVerified) {
        if (data.twoFactorEnabled) {
          setEmail(variables.email);
          setPassword(variables.password);
          router.push("/login/2fa");
        } else {
          setItem(data.token);
          router.push("/order");
        }
      }
    },
  });
};
