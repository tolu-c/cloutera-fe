"use client";

import { z } from "zod/v4";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, OutlineCard } from "@/components/ui";
import { TextInput } from "@/components/form";
import { UsernameAvailability } from "@/components/profile/details/username-availability";
import { editAccountSchema } from "@/types/schema";
import { useDeferredValue, useLocalStorage } from "@/hooks";
import { CLOUTERA_USER } from "@/types/constants";
import { User } from "@/types";
import { useUpdateProfile } from "@/mutations/profile/use-update-profile";

type FormData = z.infer<typeof editAccountSchema>;

export const AccountSettingsForm = () => {
  const { getItem } = useLocalStorage<User>(CLOUTERA_USER);
  const user = getItem();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(editAccountSchema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      username: user?.username,
    },
  });

  const newUsername = watch("username");
  const deferredUsername = useDeferredValue(newUsername, 500);

  const { isPending, mutateAsync: submit } = useUpdateProfile();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await submit(data);
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

            <UsernameAvailability username={deferredUsername} />
          </div>

          <TextInput
            label="Email Address"
            name="email"
            defaultValue={user?.email}
            disabled
          />
        </div>

        <Button type="submit" disabled={isPending}>
          Save Changes
        </Button>
      </form>
    </OutlineCard>
  );
};
