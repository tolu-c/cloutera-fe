import { useLocalStorage } from "@/hooks/useLocalStorage";
import { User } from "@/types";
import { CLOUTERA_USER } from "@/types/constants";

export const useGetUser = () => {
  const { getItem } = useLocalStorage<User>(CLOUTERA_USER);

  return getItem();
};
