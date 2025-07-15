"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";

import { TextInput } from "@/components/form";
import { Button } from "@/components/ui";
import { forgotPasswordSchema } from "@/types/schema";
import ForgotPasswordModal from "./forgot-password-modal";
import { useForgotPassword } from "@/mutations/auth";

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordForm = () => {
  const [open, setOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const { isPending, mutateAsync: submit } = useForgotPassword();

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = async (data) => {
    await submit(data);
    setSubmittedEmail(data.email);
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
            label="Email Address"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <div className="flex flex-col items-center gap-6">
          <Button type="submit" disabled={isPending}>
            Send
          </Button>

          <p className="text-office-brown-700 flex items-center gap-1 text-sm">
            Oops?{" "}
            <Link
              href="/login"
              className="text-foundation-red-normal font-semibold"
            >
              I remember my details
            </Link>
          </p>
        </div>
      </form>

      <ForgotPasswordModal
        open={open}
        submittedEmail={submittedEmail}
        handleClose={handleClose}
      />
    </Fragment>
  );
};

export default ForgotPasswordForm;
