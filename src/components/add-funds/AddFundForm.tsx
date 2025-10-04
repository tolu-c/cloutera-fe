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
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import {
  FlutterwaveConfig,
  FlutterWaveResponse,
} from "flutterwave-react-v3/dist/types";

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
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(addFundSchema),
    defaultValues: {
      amount: selectedAmount ?? undefined,
      paymentMethod: AddFundOptions.FlutterWave,
    },
  });
  const handleFlutterwave = useFlutterwave;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const config: FlutterwaveConfig = {
      public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_KEY as string,
      tx_ref: String(Date.now()),
      amount: data.amount,
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: "webdevtolu@protonmail.com",
        phone_number: "08141272488",
        name: "Tolu Test",
      },
      customizations: {
        title: "Fund My Cloutera Wallet",
        description: `Funding my wallet with ${formatAmount(data.amount)}`,
        logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      },
    };

    const handleFlutterPayment = handleFlutterwave(config);

    handleFlutterPayment({
      callback: async (res: FlutterWaveResponse) => {
        const { amount, status, tx_ref } = res;
        await submit({
          amount,
          status,
          tx_reference: tx_ref,
          paymentMethod: data.paymentMethod,
        });
        closePaymentModal();
      },
      onClose: () => {},
    });
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

      <Button type="submit" disabled={isPending}>
        Proceed
      </Button>
    </form>
  );
};
