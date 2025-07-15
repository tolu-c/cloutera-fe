"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui";
import { OtpInput } from "@/components/form";
import { useLogin2fa } from "@/mutations/auth";
import { useLocalStorage } from "@/hooks";
import { CLOUTERA_USER_EMAIL, CLOUTERA_USER_PASSWORD } from "@/types/constants";

export const Login2FaForm = () => {
  const [secretCode, setSecretCode] = useState("");

  const { getItem: getUserEmail, removeItem: removeUserEmail } =
    useLocalStorage<string>(CLOUTERA_USER_EMAIL);
  const { getItem: getUserPassword, removeItem: removeUserPassword } =
    useLocalStorage<string>(CLOUTERA_USER_PASSWORD);

  const { isPending, mutateAsync: submit } = useLogin2fa();

  const password = getUserPassword();
  const email = getUserEmail();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email && password) {
      await submit({
        email,
        password,
        secretCode,
      }).then(() => {
        removeUserEmail();
        removeUserPassword();
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-12">
      <div className="flex w-full flex-col items-center gap-6">
        <OtpInput length={6} action={(code) => setSecretCode(code)} />

        <p className="text-base text-slate-500">
          Didn’t receive the code?{" "}
          <button className="text-foundation-red-normal font-medium">
            Resend OTP
          </button>
        </p>
      </div>

      <Button type="submit" disabled={isPending}>
        Verify
      </Button>
    </form>
  );
};
