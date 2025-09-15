"use client";

import { SelectInput } from "@/components/form";
import { LabelValuePair } from "@/types";
import { Button } from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";

interface OrderFilters {
  category: string;
  service: string;
}

interface OrderFilterFormProps {
  categoryOptions: LabelValuePair[];
  serviceOptions: LabelValuePair[];
  clearFilterAction: () => void;
  applyFilterAction: (filters: OrderFilters) => void;
  closeAction: () => void;
}

export const OrderFilterForm = ({
  categoryOptions,
  serviceOptions,
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
      category: "",
      service: "",
    },
  });

  const selectedCategory = watch("category");

  useEffect(() => {
    setValue("service", "");
  }, [selectedCategory, setValue]);

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
        options={categoryOptions}
        label="Category"
        aria-placeholder="Select Category"
        error={errors.category?.message}
        {...register("category")}
      />

      <SelectInput
        options={serviceOptions}
        label="Service"
        aria-placeholder="Select Service"
        error={errors.service?.message}
        {...register("service")}
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
