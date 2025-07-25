"use client";

import { Button, OutlineCard } from "@/components/ui";
import { z } from "zod/v4";
import { changePasswordSchema } from "@/types/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@/components/form";
import { useChangePassword } from "@/mutations/profile";

type FormData = z.infer<typeof changePasswordSchema>;

export const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(changePasswordSchema),
  });

  const { isPending, mutateAsync: submit } = useChangePassword();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await submit({
      oldPassword: data.currentPassword,
      newPassword: data.password,
    });
  };

  return (
    <OutlineCard>
      <OutlineCard.Title title="Change Password" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-start gap-6"
      >
        <TextInput
          label="Current Password"
          type="password"
          error={errors.currentPassword?.message}
          {...register("currentPassword")}
        />

        <TextInput
          label="New Password"
          type="password"
          error={errors.password?.message}
          {...register("password")}
        />

        <TextInput
          label="Confirm New Password"
          type="password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <Button type="submit" disabled={isPending}>
          Save Changes
        </Button>
      </form>
    </OutlineCard>
  );
};
