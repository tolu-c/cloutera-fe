"use client";

import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@/components/form";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui";

import ResetPasswordModal from "./reset-password-modal";
import { useResetPassword } from "@/mutations/auth";
import { resetPasswordSchema } from "@/types/schema";

type ResetPasswordData = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { isPending, mutateAsync: submit } = useResetPassword();

  const onSubmit: SubmitHandler<ResetPasswordData> = async (data) => {
    const email = decodeURIComponent(params.email as string);
    const token = params.token as string;

    if (!email || !token) return;

    await submit({
      email,
      token,
      password: data.newPassword,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-8"
      >
        <div className="flex w-full flex-col gap-4">
          <TextInput
            label="New Password"
            type="password"
            error={errors.newPassword?.message}
            {...register("newPassword")}
          />
          <TextInput
            label="Confirm New Password"
            type="password"
            error={errors.confirmNewPassword?.message}
            {...register("confirmNewPassword")}
          />
        </div>

        <div className="flex flex-col items-center gap-6">
          <Button type="submit" disabled={isSubmitting || isPending}>
            Reset Password
          </Button>
          <p className="text-office-brown-700 flex items-center gap-1 text-sm">
            Remembered your password?{" "}
            <Link
              href="/login"
              className="text-foundation-red-normal font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
      <ResetPasswordModal
        open={open}
        handleClose={handleClose}
        onProceedToLogin={() => {
          router.push("/login");
          setOpen(false);
        }}
      />
    </Fragment>
  );
};

export default ResetPasswordForm;
