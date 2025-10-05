"use client";

import { SelectInput } from "@/components/form";
import { Button } from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { AdminNotification } from "@/types/enums";

interface NotificationFilters {
  tab: AdminNotification | "";
  recipient: string;
}

interface NotificationFilterFormProps {
  tabOptions: { label: string; value: AdminNotification }[];
  recipientOptions: { label: string; value: string }[];
  clearFilterAction: () => void;
  applyFilterAction: (filters: NotificationFilters) => void;
  closeAction: () => void;
}

export const NotificationFilterForm = ({
  tabOptions,
  recipientOptions,
  clearFilterAction,
  applyFilterAction,
  closeAction,
}: NotificationFilterFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NotificationFilters>({
    defaultValues: {
      tab: "",
      recipient: "",
    },
  });

  function handleClear() {
    reset();
    clearFilterAction();
    closeAction();
  }

  const onSubmit: SubmitHandler<NotificationFilters> = (data) => {
    applyFilterAction(data);
    closeAction();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-3"
    >
      <SelectInput
        options={tabOptions}
        label="Tab"
        error={errors.tab?.message}
        {...register("tab")}
      />
      <SelectInput
        options={recipientOptions}
        label="Recipient"
        error={errors.recipient?.message}
        {...register("recipient")}
      />
      <div className="grid w-full grid-cols-2 gap-4">
        <Button
          type="button"
          width="full"
          state="outline"
          onClick={handleClear}
        >
          Clear Filter
        </Button>
        <Button width="full" type="submit">
          Apply Filter
        </Button>
      </div>
    </form>
  );
};
