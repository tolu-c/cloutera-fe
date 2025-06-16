"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { TextInput } from "@/components/form";
import { Button } from "@/components/ui";
import { signupSchema } from "@/types/schema";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Modal } from "@/components/ui/modal";

type FormData = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
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
            label="Username"
            error={errors.username?.message}
            {...register("username")}
          />
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
          <Button type="submit">Create Account</Button>
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
                <h2 className="leadin</div>g-[120%] text-[25px] font-medium">
                  Success
                </h2>
                <p className="text-center text-[16px] leading-[120%]">
                  We have just sent an email ogunlesioludotun@gmail.com
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

export default SignupForm;
