"use client";

import { SelectInput } from "@/components/form";
import { Button } from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { OrderStatus } from "@/types/enums";

interface OrderHistoryFilters {
  status: OrderStatus | "";
}

interface OrderHistoryFilterFormProps {
  statusOptions: { label: string; value: OrderStatus }[];
  clearFilterAction: () => void;
  applyFilterAction: (filters: OrderHistoryFilters) => void;
  closeAction: () => void;
}

export const OrderHistoryFilterForm = ({
  statusOptions,
  clearFilterAction,
  applyFilterAction,
  closeAction,
}: OrderHistoryFilterFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OrderHistoryFilters>({
    defaultValues: {
      status: "",
    },
  });

  function handleClear() {
    reset();
    clearFilterAction();
    closeAction();
  }

  const onSubmit: SubmitHandler<OrderHistoryFilters> = (data) => {
    applyFilterAction(data);
    closeAction();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-3"
    >
      <SelectInput
        options={statusOptions}
        label="Status"
        error={errors.status?.message}
        {...register("status")}
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
