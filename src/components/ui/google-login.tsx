"use client";

import { Button } from "./button";
import { BASE_URL } from "@/types/constants";

export const GoogleLogin = () => {
  const baseWithoutApi = BASE_URL.replace("/api", "");
  const googleSignIn = `${baseWithoutApi}/auth/google`;

  return (
    <Button
      state="outline"
      radius="md"
      onClick={() => (window.location.href = googleSignIn)}
    >
      Google
    </Button>
  );
};
