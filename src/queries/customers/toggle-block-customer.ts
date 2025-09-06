import { useAdminCustomer } from "@/services/adminCustomer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useError } from "@/hooks";

export const useToggleBlockCustomer = (customerId: string) => {
  const { handleToggleBlockCustomer } = useAdminCustomer();
  const { handleError } = useError();

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => handleToggleBlockCustomer(customerId),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: ["customer", customerId],
      });
    },
    onError: handleError,
  });
};
