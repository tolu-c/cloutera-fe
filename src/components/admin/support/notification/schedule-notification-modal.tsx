"use client";

import { Button, Modal, Switch } from "@/components/ui";
import { z } from "zod/v4";
import {
  notificationSchema,
  scheduledNotificationSchema,
} from "@/types/schema";
import { useDisclosure } from "@/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { routes } from "@/utils/routes";
import { useRouter } from "next/navigation";
import { ExitIcon, TimerIcon } from "@/assets/icons";
import { SelectInput, TextInput } from "@/components/form";
import {
  AddRecurringNotificationReq,
  AddScheduledNotificationReq,
  NotificationFreqEnum,
  Time,
} from "@/types/notifications.types";
import { Fragment } from "react";
import {
  useAddRecurringNotification,
  useAddScheduleNotification,
} from "@/mutations/notifications";

interface ScheduleNotificationModalProps {
  open: boolean;
  close: () => void;
  notificationData: z.infer<typeof notificationSchema>;
}

type FormData = z.infer<typeof scheduledNotificationSchema>;

export function ScheduleNotificationModal({
  open,
  close,
  notificationData,
}: ScheduleNotificationModalProps) {
  const [isRecurring, { toggle }] = useDisclosure();

  const { isPending, mutateAsync: schedule } = useAddScheduleNotification();
  const { isPending: pending, mutateAsync: recur } =
    useAddRecurringNotification();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(scheduledNotificationSchema),
    defaultValues: {
      ...notificationData,
      recurring: false,
      date: "",
      time: Time["12 PM"],
      freq: NotificationFreqEnum.Daily,
      endDate: "",
    },
  });

  function handleRecurringToggle() {
    toggle();
    setValue("recurring", !isRecurring);
    void trigger(["freq", "endDate"]);
  }

  async function onSubmit(data: FormData) {
    console.log("data", data);
    if (data.recurring) {
      const payload: AddScheduledNotificationReq = {
        ...data,
      };

      await schedule(payload);
    } else {
      const payload: AddRecurringNotificationReq = {
        ...data,
        endDate: data.endDate || "",
        freq: data.freq || NotificationFreqEnum.Daily,
      };

      await recur(payload);
    }
    close();
    router.push(routes.admin.support);
  }

  const notificationTime = Object.entries(Time).map(([key, value]) => ({
    label: key,
    value,
  }));
  const notificationFreq = Object.entries(NotificationFreqEnum).map(
    ([key, value]) => ({
      label: key,
      value,
    }),
  );

  return (
    <Modal
      open={open}
      close={close}
      className="lg:w-160 lg:px-0 lg:pt-10 lg:pb-6"
      hideCloseIcon
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
        <div className="flex w-full flex-col gap-4 px-8 pb-6">
          <div className="flex w-full items-center justify-between">
            <div className="bg-foundation-red-light flex size-12 items-center justify-center rounded-full">
              <TimerIcon className="text-foundation-red-normal size-6" />
            </div>

            <ExitIcon
              className="size-8 cursor-pointer text-gray-500"
              onClick={close}
            />
          </div>

          <p className="text-light-black text-2xl font-medium">Schedule</p>
        </div>

        <div className="flex w-full flex-col gap-8 border-t border-slate-200 px-8 py-6">
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
            <TextInput
              label="Date"
              {...register("date")}
              error={errors.date?.message}
              placeholder="Select Date"
              type="date"
            />

            <SelectInput
              label="Time"
              {...register("time")}
              error={errors.time?.message}
              options={notificationTime}
            />
          </div>

          <Switch
            isActive={isRecurring}
            toggleIsActive={handleRecurringToggle}
            label="Recurring"
          />

          {isRecurring && (
            <Fragment>
              <SelectInput
                label="Frequency"
                {...register("freq")}
                error={errors.freq?.message}
                options={notificationFreq}
              />

              <TextInput
                label="End Date"
                {...register("endDate")}
                error={errors.endDate?.message}
                placeholder="Select Date"
                type="date"
              />
            </Fragment>
          )}
        </div>

        <div className="w-full border-t border-slate-200 px-8 pt-6">
          <Button type="submit" disabled={isPending || pending}>
            Proceed
          </Button>
        </div>
      </form>
    </Modal>
  );
}
