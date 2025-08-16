import { useError } from "@/hooks";
import { useNotification } from "@/hooks/useNotification";
import { useAccount } from "@/services/account";
import { NotificationStatus } from "@/types/enums";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddFund = () => {
  const { handleError } = useError();
  const { handleAddFund } = useAccount();
  const { notify } = useNotification();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: handleAddFund,
    onError: handleError,
    onSuccess: (res) => {
      notify({
        status: NotificationStatus.Success,
        message: res.message,
      });
      queryClient.invalidateQueries({ queryKey: ["accountStatus"] });
    },
  });
};
