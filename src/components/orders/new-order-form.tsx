"use client";

import { z } from "zod/v4";
import { newOrderSchema } from "@/types/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui";
import { SelectInput, TextInput } from "@/components/form";
import { OrderCategory, OrderService } from "@/types/enums";

type FormData = z.infer<typeof newOrderSchema>;

export const NewOrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(newOrderSchema),
  });
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    // show modal
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-start gap-6"
    >
      <SelectInput
        options={Object.keys(OrderCategory).map((k) => ({
          label: k,
          value: OrderCategory[k as keyof typeof OrderCategory],
        }))}
        label="Category"
        error={errors.category?.message}
        {...register("category")}
      />

      <SelectInput
        options={Object.keys(OrderService).map((k) => ({
          label: k,
          value: OrderService[k as keyof typeof OrderService],
        }))}
        label="Service"
        error={errors.service?.message}
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
        description="Min: 10 - Max: 10,000,000"
        type="number"
        {...register("quantity", { valueAsNumber: true })}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
