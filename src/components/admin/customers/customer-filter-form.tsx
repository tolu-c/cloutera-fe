"use client";

import { SelectInput } from "@/components/form";
import { Button } from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { UserStatus } from "@/types/enums";

interface CustomerFilters {
  status: UserStatus | "";
  role: string;
}

interface CustomerFilterFormProps {
  statusOptions: { label: string; value: UserStatus }[];
  roleOptions: { label: string; value: string }[];
  clearFilterAction: () => void;
  applyFilterAction: (filters: CustomerFilters) => void;
  closeAction: () => void;
}

export const CustomerFilterForm = ({
  statusOptions,
  roleOptions,
  clearFilterAction,
  applyFilterAction,
  closeAction,
}: CustomerFilterFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CustomerFilters>({
    defaultValues: {
      status: "",
      role: "",
    },
  });

  const selectedCategory = watch("status");
  useEffect(() => {
    setValue("role", "");
  }, [selectedCategory, setValue]);

  function handleClear() {
    reset();
    clearFilterAction();
    closeAction();
  }

  const onSubmit: SubmitHandler<CustomerFilters> = (data) => {
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
        options={roleOptions}
        label="Role"
        error={errors.role?.message}
        {...register("role")}
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
