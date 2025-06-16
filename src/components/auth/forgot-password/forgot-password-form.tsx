"use client";

import { useState } from "react";
import Link from "next/link";
import { TextInput } from "@/components/form";
import { Button } from "@/components/ui";
import { forgotPasswordSchema } from "@/types/schema";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Fragment } from "react";
import { Modal } from "@/components/ui/modal";

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordForm = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = async (data) => {
    console.log(data);
    setOpen(true); // Open the modal on successful submission
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
          <Button type="submit" disabled={isSubmitting}>
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
      <Modal open={open} close={handleClose}>
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex w-full flex-col items-center gap-6">
              <Image
                src="/images/success.png"
                alt="success"
                width={100}
                height={100}
              />
              <div className="flex w-full flex-col items-center gap-2">
                <h2 className="text-[25px] leading-[120%] font-medium">
                  Success
                </h2>
                <p className="text-center text-[16px] leading-[120%]">
                  We have just sent an email with a password reset link to
                  ogunlesioludotun@gmail.com
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="text-center text-[16px] leading-[120%]">
                Didn&#39;t recieve the email?
              </p>
              <Button onClick={handleClose} className="">
                Resend Email
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ForgotPasswordForm;
