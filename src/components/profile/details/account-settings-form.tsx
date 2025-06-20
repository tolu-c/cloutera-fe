"use client";

import { z } from "zod/v4";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, OutlineCard } from "@/components/ui";
import { TextInput } from "@/components/form";
import { UsernameAvailability } from "@/components/profile/details/username-availability";
import { editAccountSchema } from "@/types/schema";

type FormData = z.infer<typeof editAccountSchema>;

export const AccountSettingsForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(editAccountSchema),
    defaultValues: {
      firstName: "Toluwanimi",
      lastName: "Adeyemo",
      email: "webdevtolu@protonmail.com",
      username: "wdt",
    },
  });

  const newUsername = watch("username");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    // show modal success / notification
  };

  return (
    <OutlineCard>
      <OutlineCard.Title title="Account Settings" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-start gap-6"
      >
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
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
        </div>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex w-full flex-col items-start gap-2">
            <TextInput
              label="Username"
              error={errors.username?.message}
              {...register("username")}
            />
            <UsernameAvailability username={newUsername} />
          </div>

          <TextInput
            label="Email Address"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <Button type="submit">Save Changes</Button>
      </form>
    </OutlineCard>
  );
};
