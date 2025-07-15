"use client";

import { useParams } from "next/navigation";
import { CheckIcon, CircularSpinner, XIcon } from "@/assets/icons";
import Link from "next/link";
import { Button } from "@/components/ui";
import { cn } from "@/utils/cn";
import { useVerifyAccount } from "@/mutations/auth/use-verify-account";
import { useEffect } from "react";

export const VerifyAccount = () => {
  const { email, token } = useParams<{ email: string; token: string }>();
  const decodedEmail = decodeURIComponent(email);
  const { isPending, mutateAsync: submit, isError } = useVerifyAccount();

  useEffect(() => {
    if (email && token) {
      (async () => {
        await submit({
          email: decodedEmail,
          token,
        });
      })();
    }
  }, [decodedEmail, email, submit, token]);

  if (isPending) {
    return (
      <div className="flex w-full flex-col items-center gap-4">
        <CircularSpinner className="text-foundation-red-normal size-6 animate-spin" />

        <p className="text-office-brown-700 text-sm/5">
          Verifying your email... Please wait...
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-109 flex-col items-center gap-4 rounded-lg bg-white p-12 shadow-sm lg:shadow-none">
      <div className="flex w-full flex-col items-center gap-6">
        <div
          className={cn(
            "flex size-30 items-center justify-center rounded-full bg-[#D1FAE5]",
            {
              "bg-error": isError,
            },
          )}
        >
          {isError ? (
            <XIcon className="size-16 text-white" />
          ) : (
            <CheckIcon className="text-emerald-700" />
          )}
        </div>

        <div className="flex w-full flex-col items-center gap-2 text-center">
          <p className="text-2xl font-medium text-slate-800">
            {isError ? "Failed" : "Success"}
          </p>

          <p className="text-foundation-grey-600 text-base">
            {isError
              ? "Oops! Your verification link is invalid or has expired."
              : "You have successfully Verified your account."}
          </p>
        </div>
      </div>

      {isError ? (
        <Button>Resend Mail</Button>
      ) : (
        <Link href="/login" className="w-full">
          <Button>Proceed to login</Button>
        </Link>
      )}
    </div>
  );
};
