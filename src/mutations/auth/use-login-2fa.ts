import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { useAuth } from "@/services/auth";
import { useError, useLocalStorage } from "@/hooks";
import { CLOUTERA_TOKEN } from "@/types/constants";
import { UserRole } from "@/types/enums";
import { routes } from "@/utils/routes";

export const useLogin2fa = () => {
  const { userLoginWith2fa } = useAuth();
  const { handleError } = useError();
  const { setItem } = useLocalStorage<string>(CLOUTERA_TOKEN);
  const router = useRouter();
  const { admin, customer } = routes;

  return useMutation({
    mutationFn: userLoginWith2fa,
    onError: handleError,
    onSuccess: async ({ data }) => {
      if (data.isVerified && !data.isBlocked) {
        setItem(data.token);
        if (data.role === UserRole.Admin) {
          router.push(admin.dashboard);
        } else {
          router.push(customer.order);
        }
      }
    },
  });
};
