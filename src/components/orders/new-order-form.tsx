"use client";

import { z } from "zod/v4";
import { newOrderSchema } from "@/types/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui";
import { Searchbar, SelectInput, TextInput } from "@/components/form";
import { useGetServiceCategories } from "@/queries/services/get-service-categories";
import { useGetServices } from "@/queries/get-services";
import { useEffect, useMemo, useState } from "react";
import { ServiceItem } from "@/types/services.types";
import { useGetServiceById } from "@/queries/services";
import { useAddOrder } from "@/mutations/orders";
import { formatAmount, formatNumber } from "@/utils";
import { useRouter } from "next/navigation";

type FormData = z.infer<typeof newOrderSchema>;

interface NewOrderFormProps {
  serviceId?: string;
}
export const NewOrderForm = ({ serviceId }: NewOrderFormProps) => {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

  const router = useRouter();
  // const [selectedCategory, setSelectedCategory] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(newOrderSchema),
  });

  const selectedCategory = watch("category");
  const selectedService = watch("service");
  const quantity = watch("quantity");

  // Queries
  const { data: categoriesData } = useGetServiceCategories();
  const { data: servicesData } = useGetServices({
    search: searchValue,
    category: selectedCategory || undefined,
  });
  const { data: singleServiceData } = useGetServiceById(serviceId as string);

  // mutations
  const { isPending, mutateAsync: submit } = useAddOrder();

  // Memoized options
  const categoryOptions = useMemo(
    () =>
      categoriesData?.data.categories.map((c) => ({ label: c, value: c })) ||
      [],
    [categoriesData],
  );

  const serviceOptions = useMemo(
    () =>
      servicesData?.data?.map((service: ServiceItem) => ({
        label: `${service.name} - Rate: ${service.rate}/${service.min}-${service.max}`,
        value: service.serviceId.toString(),
      })) || [],
    [servicesData],
  );

  // Find selected service details
  const selectedServiceDetails = useMemo(
    () =>
      servicesData?.data?.find(
        (s: ServiceItem) => s.serviceId.toString() === selectedService,
      ),
    [servicesData, selectedService],
  );

  // Calculate total cost
  const totalCost = useMemo(() => {
    if (!selectedServiceDetails || !quantity) return 0;
    const rate = parseFloat(selectedServiceDetails.rate);
    return rate * quantity;
  }, [selectedServiceDetails, quantity]);

  // Get min/max for quantity
  const quantityConstraints = useMemo(() => {
    if (!selectedServiceDetails) return { min: 0, max: 0 };
    return {
      min: parseInt(selectedServiceDetails.min),
      max: parseInt(selectedServiceDetails.max),
    };
  }, [selectedServiceDetails]);

  // Pre-fill form if serviceId is provided
  useEffect(() => {
    if (serviceId && singleServiceData?.data) {
      const service = singleServiceData.data;
      setValue("category", service.category);
      setValue("service", service.serviceId.toString());
    }
  }, [serviceId, singleServiceData, setValue]);

  // Reset service when category changes (unless pre-filled)
  useEffect(() => {
    if (selectedCategory && !serviceId) {
      setValue("service", "");
    }
  }, [selectedCategory, setValue, serviceId]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await submit({
      serviceId: serviceId || data.service,
      link: data.link,
      quantity: data.quantity,
    });
    reset();
    router.push("/order/history");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-start gap-6"
    >
      <Searchbar
        className="w-full"
        onSendSearchValue={(value) => setSearchValue(value)}
      />
      <SelectInput
        options={categoryOptions}
        label="Category"
        error={errors.category?.message}
        disabled={!!serviceId}
        {...register("category")}
      />
      <SelectInput
        options={serviceOptions}
        label="Service"
        error={errors.service?.message}
        disabled={!selectedCategory || !!serviceId}
        {...register("service")}
      />
      <TextInput
        label="Link ( Profile Link, Post Link)"
        error={errors.link?.message}
        placeholder="e.g. https://www.facebook.com/profile"
        {...register("link")}
      />
      <TextInput
        label="Quantity"
        error={errors.quantity?.message}
        description={`Min: ${quantityConstraints.min} - Max: ${formatNumber(quantityConstraints.max)}`}
        type="number"
        min={quantityConstraints.min}
        max={quantityConstraints.max}
        {...register("quantity", {
          valueAsNumber: true,

          minLength: quantityConstraints.min,
          maxLength: quantityConstraints.max,
        })}
      />
      <div className="flex w-full flex-col gap-1">
        <p className="text-grey-800 text-sm/5 font-medium">Total Cost</p>
        <p className="text-foundation-grey-900 text-3xl/10 font-semibold">
          {formatAmount(totalCost)}
        </p>
      </div>
      <Button type="submit" disabled={isPending}>
        Submit
      </Button>
    </form>
  );
};
