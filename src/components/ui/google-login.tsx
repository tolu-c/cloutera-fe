"use client";

import { signIn } from "next-auth/react";
import { Button } from "./button";

export const GoogleLogin = () => {
  return (
    <Button state="outline" radius="md" onClick={() => signIn("google")}>
      Google
    </Button>
  );
};
