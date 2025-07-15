import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { useAuth } from "@/services/auth";
import { useError, useLocalStorage } from "@/hooks";
import {
  CLOUTERA_TOKEN,
  CLOUTERA_USER_EMAIL,
  CLOUTERA_USER_PASSWORD,
} from "@/types/constants";

export const useLogout = () => {
  const { userLogout } = useAuth();
  const { handleError } = useError();
  const { removeItem } = useLocalStorage<string>(CLOUTERA_TOKEN);
  const { removeItem: removeEmail } =
    useLocalStorage<string>(CLOUTERA_USER_EMAIL);
  const { removeItem: removePassword } = useLocalStorage<string>(
    CLOUTERA_USER_PASSWORD,
  );
  const router = useRouter();

  return useMutation({
    mutationFn: userLogout,
    onError: handleError,
    onSuccess: () => {
      removeItem();
      removeEmail();
      removePassword();
      router.push("/login");
    },
  });
};
