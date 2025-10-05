"use client";

import { SelectInput } from "@/components/form";
import { Button } from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";

interface ServiceFilters {
  category: string;
  status: string;
}

interface ServiceFilterFormProps {
  categoryOptions: { label: string; value: string }[];
  statusOptions: { label: string; value: string }[];
  clearFilterAction: () => void;
  applyFilterAction: (filters: ServiceFilters) => void;
  closeAction: () => void;
}

export const ServiceFilterForm = ({
  categoryOptions,
  statusOptions,
  clearFilterAction,
  applyFilterAction,
  closeAction,
}: ServiceFilterFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ServiceFilters>({
    defaultValues: {
      category: "",
      status: "",
    },
  });

  const selectedCategory = watch("category");
  useEffect(() => {
    setValue("status", "");
  }, [selectedCategory, setValue]);

  function handleClear() {
    reset();
    clearFilterAction();
    closeAction();
  }

  const onSubmit: SubmitHandler<ServiceFilters> = (data) => {
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
        error={errors.category?.message}
        {...register("category")}
      />
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
