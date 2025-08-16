import { useError } from "@/hooks";
import { useNotification } from "@/hooks/useNotification";
import { useOrders } from "@/services/orders";
import { NotificationStatus } from "@/types/enums";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddOrder = () => {
  const { handleAddOrder } = useOrders();
  const { handleError } = useError();
  const { notify } = useNotification();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: handleAddOrder,
    onError: handleError,
    onSuccess: (res) => {
      notify({
        status: NotificationStatus.Success,
        message: res.message,
      });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};
