"use client";

import { useLocalStorage } from "@/hooks";
import { User } from "@/types";
import { CLOUTERA_USER } from "@/types/constants";

export const OrderUserWelcome = () => {
  const { getItem } = useLocalStorage<User>(CLOUTERA_USER);
  const user = getItem();

  return (
    <p className="px-4 text-2xl font-light">
      <span className="text-foundation-red-normal font-medium">
        Hello {user ? user.firstName : null}!
      </span>{" "}
      Welcome to Cloutera Hub!
    </p>
  );
};
