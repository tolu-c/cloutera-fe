import { useAuth } from "@/services/auth";
import { useError, useLocalStorage } from "@/hooks";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { userLogin } = useAuth();
  const { handleError } = useError();
  const { setItem } = useLocalStorage<string>("cloutera.token");
  const router = useRouter();

  return useMutation({
    mutationFn: userLogin,
    onError: handleError,
    onSuccess: ({ data }, variables) => {
      console.log(variables);
      if (data.isVerified) {
        if (data.twoFactorEnabled) {
          router.push("/login/2fa");
          console.log("go to two factor auth");
        } else {
          setItem(data.token);
          router.push("/order");
        }
      }
    },
  });
};
