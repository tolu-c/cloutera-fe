import { AxiosError } from "axios";
import { useNotification } from "./useNotification";
import { NotificationStatus } from "@/types/enums";
import { useLocalStorage } from "./useLocalStorage";
import {
  CLOUTERA_TOKEN,
  CLOUTERA_USER_EMAIL,
  CLOUTERA_USER_PASSWORD,
} from "@/types/constants";

export const useError = () => {
  const { notify } = useNotification();

  const { removeItem: removeToken } = useLocalStorage<string>(CLOUTERA_TOKEN);
  const { removeItem: removeEmail } =
    useLocalStorage<string>(CLOUTERA_USER_EMAIL);
  const { removeItem: removePassword } = useLocalStorage<string>(
    CLOUTERA_USER_PASSWORD,
  );

  const handleLogout = () => {
    removeToken();
    removeEmail();
    removePassword();
    window.location.replace("/login");
  };

  const handleError = (error: unknown) => {
    if (error instanceof AxiosError) {
      const status = error.response?.status;
      const message =
        error.response?.data?.error?.message || "Something went wrong";

      if (status === 401 || status === 403) {
        notify({
          status: NotificationStatus.Error,
          message:
            error.response?.data?.error?.message ||
            "You are not authorized to perform this action.",
        });
        handleLogout();
        return;
      }
      notify({
        status: NotificationStatus.Error,
        message,
      });
    } else {
      console.log(error);
      notify({
        status: NotificationStatus.Error,
        message: "Something went wrong",
      });
    }
  };

  return { handleError };
};
