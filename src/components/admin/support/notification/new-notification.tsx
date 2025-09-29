"use client";

import { z } from "zod/v4";
import { notificationSchema } from "@/types/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminCard, Button } from "@/components/ui";
import { useDisclosure } from "@/hooks";
import { Fragment } from "react";
import { SelectInput, TextareaInput, TextInput } from "@/components/form";
import { useAddNotification } from "@/mutations/notifications";
import { NotificationEnum } from "@/types/notifications.types";
import { useRouter } from "next/navigation";
import { routes } from "@/utils/routes";
import { ScheduleNotificationModal } from "@/components/admin/support/notification/schedule-notification-modal";

type FormData = z.infer<typeof notificationSchema>;

export function NewNotification() {
  const [scheduleNotification, { open, close }] = useDisclosure(false);

  const { mutateAsync: submit, isPending } = useAddNotification();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<FormData>({
    resolver: zodResolver(notificationSchema),
  });

  const router = useRouter();

  const notificationTitle = watch("title");
  const notificationMessage = watch("message");

  async function onSubmit(data: FormData) {
    await submit(data);
    router.push(routes.admin.support);
  }

  const notificationType = Object.entries(NotificationEnum).map(
    ([key, value]) => ({
      label: key,
      value: value,
    }),
  );

  function handleOpenRescheduleNotification() {
    if (notificationTitle !== "" && notificationMessage !== "") {
      console.log("hello");
      clearErrors("root");
      open();
    } else {
      setError("root", { message: "Fill all fields to continue" });
    }
  }

  return (
    <Fragment>
      <ScheduleNotificationModal
        open={scheduleNotification}
        close={close}
        notificationData={watch()}
      />

      <div className="grid w-full grid-cols-1 lg:grid-cols-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="col-span-3 flex w-full flex-col gap-4"
        >
          <AdminCard className="gap-4 px-8">
            <SelectInput
              label="Target Audience"
              name="targetAudience"
              options={[{ label: "All", value: "" }]}
              disabled
            />

            <SelectInput
              label="Type of Notification"
              options={notificationType}
              {...register("type")}
              error={errors.type?.message}
            />
            <TextInput
              label="Notification Title"
              placeholder="Enter notification title"
              error={errors.title?.message}
              {...register("title")}
            />

            <TextareaInput
              label="Body"
              placeholder="Enter the message"
              error={errors.message?.message}
              {...register("message")}
            />

            {errors.root?.message && (
              <p className="text-foundation-red-normal text-sm font-medium">
                {errors.root.message}
              </p>
            )}
          </AdminCard>

          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
            <Button
              state="outline"
              type="button"
              onClick={handleOpenRescheduleNotification}
            >
              Schedule
            </Button>

            <Button type="submit" disabled={isPending}>
              Send
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
