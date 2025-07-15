import { useProfile } from "@/services/profile";
import { useError } from "@/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateProfile = () => {
  const { handleUpdateProfile } = useProfile();
  const { handleError } = useError();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: handleUpdateProfile,
    onError: handleError,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
