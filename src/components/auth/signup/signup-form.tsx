"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";

import { TextInput } from "@/components/form";
import { Button } from "@/components/ui";
import { signupSchema } from "@/types/schema";
import SignupSuccessModal from "./signup-modal";
import { UsernameAvailability } from "@/components/profile/details/username-availability";
import { useDeferredValue } from "@/hooks";
import { useSignup } from "@/mutations/auth";

type FormData = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const [open, setOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });

  const username = watch("username");
  const deferredUsername = useDeferredValue(username, 500);

  const { isPending, mutateAsync: submit } = useSignup();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await submit({
      ...data,
    }).then(() => {
      setSubmittedEmail(data.email);
      setOpen(true);
    });
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-8"
      >
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col items-start gap-2">
            <TextInput
              label="Username"
              error={errors.username?.message}
              {...register("username")}
            />
            <UsernameAvailability username={deferredUsername} />
          </div>

          <TextInput
            label="Email Address"
            error={errors.email?.message}
            {...register("email")}
          />
          <TextInput
            label="First Name"
            error={errors.firstName?.message}
            {...register("firstName")}
          />
          <TextInput
            label="Last Name"
            error={errors.lastName?.message}
            {...register("lastName")}
          />
          <TextInput
            label="Password"
            type="password"
            error={errors.password?.message}
            {...register("password")}
          />
          <TextInput
            label="Confirm Password"
            type="password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />
        </div>

        <div className="flex flex-col items-center gap-6">
          <Button type="submit" disabled={isPending}>
            Create Account
          </Button>
          <p className="text-office-brown-700 flex items-center gap-1 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-foundation-red-normal font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </form>

      <SignupSuccessModal
        open={open}
        email={submittedEmail}
        onClose={handleClose}
        onResend={() => {
          console.log("Resend email");
          handleClose();
        }}
      />
    </Fragment>
  );
};

export default SignupForm;
