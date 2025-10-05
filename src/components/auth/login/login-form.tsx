"use client";

import Link from "next/link";
import { z } from "zod/v4";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TextInput } from "@/components/form";
import { Button } from "@/components/ui";
import { loginSchema } from "@/types/schema";
import { useLogin } from "@/mutations/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useLocalStorage } from "@/hooks";
import { CLOUTERA_TOKEN } from "@/types/constants";
import { routes } from "@/utils/routes";

type FormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setItem } = useLocalStorage<string>(CLOUTERA_TOKEN);

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      setItem(token);
      router.replace(routes.customer.order);
    }
  }, [searchParams, router, setItem]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const { isPending, mutateAsync: submit } = useLogin();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await submit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (errors) => {
        console.log("invalid errors", errors);
      })}
      className="flex w-full flex-col gap-8"
    >
      <div className="flex w-full flex-col gap-4">
        <TextInput
          label="Email Address"
          error={errors.email?.message}
          {...register("email")}
        />

        <TextInput
          label="Password"
          type="password"
          error={errors.password?.message}
          {...register("password")}
        />
      </div>

      <div className="flex flex-col items-center gap-6">
        <Button type="submit" disabled={isPending}>
          Sign in
        </Button>
        <p className="text-office-brown-700 flex items-center gap-1 text-sm">
          Forgot password?{" "}
          <Link
            href="/forgot-password"
            className="text-foundation-red-normal font-semibold"
          >
            Recover
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
