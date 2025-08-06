import { AxiosError } from "axios";
import { useNotification } from "./useNotification";
import { NotificationStatus } from "@/types/enums";

export const useError = () => {
  const { notify } = useNotification();

  const handleError = (error: unknown) => {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.message);
      console.log(error.status);

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
        // handleLogout();
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
