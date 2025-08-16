"use client";

import { useLogout } from "@/mutations/auth";
import { useLocalStorage } from "./useLocalStorage";
import {
  CLOUTERA_TOKEN,
  CLOUTERA_USER_EMAIL,
  CLOUTERA_USER_PASSWORD,
} from "@/types/constants";
import { useRouter } from "next/router";

export const useHandleLogout = () => {
  const { isPending, mutateAsync: logout } = useLogout();
  const { removeItem } = useLocalStorage<string>(CLOUTERA_TOKEN);
  const { removeItem: removeEmail } =
    useLocalStorage<string>(CLOUTERA_USER_EMAIL);
  const { removeItem: removePassword } = useLocalStorage<string>(
    CLOUTERA_USER_PASSWORD,
  );
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    removeItem();
    removeEmail();
    removePassword();
    router.push("/login");
  };

  return { isPending, handleLogout };
};
