import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { UserRole } from "@/types/enums";
import { useAuth } from "@/services/auth";
import { useError, useLocalStorage } from "@/hooks";
import {
  CLOUTERA_TOKEN,
  CLOUTERA_USER_EMAIL,
  CLOUTERA_USER_PASSWORD,
} from "@/types/constants";
import { routes } from "@/utils/routes";

export const useLogin = () => {
  const { userLogin } = useAuth();
  const { handleError } = useError();
  const { setItem } = useLocalStorage<string>(CLOUTERA_TOKEN);
  const { setItem: setEmail } = useLocalStorage<string>(CLOUTERA_USER_EMAIL);
  const { setItem: setPassword } = useLocalStorage<string>(
    CLOUTERA_USER_PASSWORD,
  );
  const router = useRouter();

  const { auth, admin, customer } = routes;

  return useMutation({
    mutationFn: userLogin,
    onError: handleError,
    onSuccess: async ({ data }, variables) => {
      if (data.isVerified) {
        if (data.twoFactorEnabled) {
          setEmail(variables.email);
          setPassword(variables.password);
          router.push(auth.login2fa);
        } else {
          setItem(data.token);
          if (data?.role === UserRole.Admin) {
            router.push(admin.dashboard);
          } else {
            router.push(customer.order);
          }
        }
      }
    },
  });
};
