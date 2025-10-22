"use client";

import { SelectInput } from "@/components/form";
import { LabelValuePair } from "@/types";
import { Button } from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useMemo } from "react";
import { useGetServices } from "@/queries/get-services";
import { ServiceItem } from "@/types/services.types";

interface OrderFilters {
  category: string;
  service: string;
}

interface OrderFilterFormProps {
  categoryOptions: LabelValuePair[];
  clearFilterAction: () => void;
  applyFilterAction: (filters: OrderFilters) => void;
  closeAction: () => void;
}

export const OrderFilterForm = ({
  categoryOptions,
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

  // Fetch services filtered by the selected category in the filter form
  const { data: filteredServicesData } = useGetServices({
    category: selectedCategory || undefined,
  });

  // Generate service options based on filtered data
  const serviceOptions = useMemo(
    () =>
      filteredServicesData?.data?.map((service: ServiceItem) => ({
        label: `${service.name} - Rate: ${service.rate}/${service.min}-${service.max}`,
        value: service.serviceId.toString(),
      })) || [],
    [filteredServicesData],
  );

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
        options={[{ label: "All Categories", value: "" }, ...categoryOptions]}
        label="Category"
        aria-placeholder="Select Category"
        error={errors.category?.message}
        {...register("category")}
      />

      <SelectInput
        options={[{ label: "Select Service", value: "" }, ...serviceOptions]}
        label="Service"
        aria-placeholder="Select Service"
        error={errors.service?.message}
        disabled={!selectedCategory}
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
