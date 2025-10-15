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
import { useAddFund, useInitializePayment } from "@/mutations/account";
import PaystackPop from "@paystack/inline-js";
import { useLocalStorage } from "@/hooks";
import { User } from "@/types";
import { CLOUTERA_USER } from "@/types/constants";
import { useAccount } from "@/services/account";

type FormData = z.infer<typeof addFundSchema>;

export const AddFundForm = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const { getItem } = useLocalStorage<User>(CLOUTERA_USER);
  const user = getItem();

  const { isPending, mutateAsync: submit } = useAddFund();
  const { isPending: initializingPayment, mutateAsync: initializePayment } =
    useInitializePayment();
  const { handleVerifyPayment } = useAccount();

  const amountOptions = [500, 1000, 2000, 5000] as const;

  const paymentOptions = Object.entries(AddFundOptions).map(([key, value]) => ({
    label: key,
    value,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(addFundSchema),
    defaultValues: {
      amount: selectedAmount ?? undefined,
      paymentMethod: AddFundOptions.PayStack,
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (user?.email) {
      const res = await initializePayment({
        email: user?.email,
        amount: String(data.amount),
      });

      if (res.data.access_code && res.data.reference) {
        const popup = new PaystackPop();

        popup.resumeTransaction(res.data.access_code, {
          onSuccess: () => {
            handleVerifyPayment(res.data.reference).then((res2) => {
              const { amount, status, reference } = res2.data;

              submit({
                amount,
                status,
                tx_reference: reference,
                paymentMethod: data.paymentMethod,
              });
            });
          },
        });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-6 rounded-lg px-4 lg:p-8"
    >
      <SelectInput
        options={paymentOptions}
        error={errors.paymentMethod?.message}
        {...register("paymentMethod")}
      />

      <div className="flex w-full flex-col gap-2">
        <p className="text-grey-800 text-sm/5">Enter Amount</p>

        <div className="flex flex-wrap gap-2">
          {amountOptions.map((amount, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setValue("amount", amount);
                setSelectedAmount(amount);
              }}
              className={cn(
                "shadow-100 flex items-center justify-center rounded-lg p-4 lg:flex-1",
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

      <Button type="submit" disabled={isPending || initializingPayment}>
        Proceed
      </Button>
    </form>
  );
};
