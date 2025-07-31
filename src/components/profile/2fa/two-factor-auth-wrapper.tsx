"use client";

import { useLocalStorage } from "@/hooks";
import { CLOUTERA_USER } from "@/types/constants";
import { User } from "@/types";
import { TwoFactorAuthenticationFlow } from "./two-factor-authentication-flow";

const TwoFactorAuthClientWrapper = () => {
  const { getItem } = useLocalStorage<User>(CLOUTERA_USER);
  const user = getItem();
  const userEmail = user?.email || "demo.user@example.com";

  return <TwoFactorAuthenticationFlow initialEmail={userEmail} />;
};

export default TwoFactorAuthClientWrapper;
