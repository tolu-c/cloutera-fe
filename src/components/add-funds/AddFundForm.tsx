"use client";

import { useState } from "react";
import { SelectInput, TextInput } from "../form";
import { Button } from "../ui";
import { formatAmount } from "@/utils";
import { cn } from "@/utils/cn";
import { z } from "zod/v4";
import { addFundSchema } from "@/types/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddFundOptions } from "@/types/enums";
import { useAddFund } from "@/mutations/account";

type FormData = z.infer<typeof addFundSchema>;

export const AddFundForm = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const { isPending, mutateAsync: submit } = useAddFund();

  const amountOptions = [500, 1000, 2000, 5000];

  const paymentOptions = Object.entries(AddFundOptions).map(([key, value]) => ({
    label: key,
    value,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(addFundSchema),
    defaultValues: {
      amount: selectedAmount ?? undefined,
      paymentMethod: AddFundOptions.FlutterWave,
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await submit({
      amount: data.amount,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-6 rounded-lg p-8"
    >
      <SelectInput
        options={paymentOptions}
        error={errors.paymentMethod?.message}
        {...register("paymentMethod")}
      />

      <div className="flex w-full flex-col gap-2">
        <p className="text-grey-800 text-sm/5">Enter Amount</p>

        <div className="flex gap-2">
          {amountOptions.map((amount, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedAmount(amount)}
              className={cn(
                "shadow-100 flex flex-1 items-center justify-center rounded-lg p-4",
                {
                  "border-foundation-red-normal text-foundation-red-normal border":
                    selectedAmount === amount,
                },
              )}
            >
              {formatAmount(amount)}
            </button>
          ))}
        </div>
      </div>

      <TextInput
        aria-label="Amount"
        placeholder="Enter amount"
        defaultValue={selectedAmount ?? undefined}
        error={errors.amount?.message}
        type="number"
        {...register("amount", { valueAsNumber: true })}
      />

      <Button type="submit" disabled={isPending}>
        Proceed
      </Button>
    </form>
  );
};
