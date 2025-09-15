import { useAdminCustomer } from "@/services/adminCustomer";
import { useError } from "@/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteCustomer(customerId: string) {
  const { handleDeleteUser } = useAdminCustomer();
  const { handleError } = useError();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => handleDeleteUser(customerId),
    onSuccess() {
      void queryClient.invalidateQueries({
        queryKey: ["customers", "customerStats"],
      });
    },
    onError: handleError,
  });
}
