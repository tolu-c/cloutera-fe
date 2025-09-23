"use client";

import { SelectInput } from "@/components/form";
import { Button } from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";

interface OrderFilters {
  status: string;
  customer: string;
}

interface OrderFilterFormProps {
  statusOptions: { label: string; value: string }[];
  customerOptions: { label: string; value: string }[];
  clearFilterAction: () => void;
  applyFilterAction: (filters: OrderFilters) => void;
  closeAction: () => void;
}

export const OrderFilterForm = ({
  statusOptions,
  customerOptions,
  clearFilterAction,
  applyFilterAction,
  closeAction,
}: OrderFilterFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<OrderFilters>({
    defaultValues: {
      status: "",
      customer: "",
    },
  });

  const selectedStatus = watch("status");
  useEffect(() => {
    setValue("customer", "");
  }, [selectedStatus, setValue]);

  function handleClear() {
    reset();
    clearFilterAction();
    closeAction();
  }

  const onSubmit: SubmitHandler<OrderFilters> = (data) => {
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
      <SelectInput
        options={customerOptions}
        label="Customer"
        error={errors.customer?.message}
        {...register("customer")}
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
