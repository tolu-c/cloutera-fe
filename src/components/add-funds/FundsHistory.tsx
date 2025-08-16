"use client";

import { FundHistoryCategory, Status } from "@/types/enums";
import { useState } from "react";
import { Searchbar } from "../form";
import { cn } from "@/utils/cn";
import { Badge, DataCell } from "../ui";
import { formatAmount } from "@/utils";

export const FundsHistory = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentCategory, setCurrentCategory] = useState<FundHistoryCategory>(
    FundHistoryCategory.All,
  );

  const tabs = Object.values(FundHistoryCategory);
  console.log(searchValue);

  return (
    <div className="flex w-full flex-col gap-4 px-6 py-4">
      <div className="flex h-11 w-max items-end gap-4 border-b border-[#E7EFFF]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={cn(
              "text-grey-10 flex h-full items-center justify-center p-3 text-base/5",
              {
                "text-foundation-red-normal border-foundation-red-normal border-b-2":
                  tab === currentCategory,
              },
            )}
            onClick={() => setCurrentCategory(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <Searchbar onSendSearchValue={setSearchValue} />

      <div className="flex w-full flex-col gap-2">
        <div className="bg-foundation-red-normal hidden h-13 w-full items-center overflow-hidden rounded-lg text-white lg:flex">
          <DataCell className="basis-1/6 text-current">ID</DataCell>
          <DataCell className="basis-2/6 text-current">Payment Method</DataCell>
          <DataCell className="basis-1/6 text-current">Amount</DataCell>
          <DataCell className="basis-1/6 text-current">Status</DataCell>
          <DataCell className="basis-1/6 text-current">Date</DataCell>
        </div>

        <div className="flex w-full flex-col items-start gap-2">
          <div className="border-grey-200 flex w-full flex-col items-start rounded-lg bg-white shadow-sm lg:h-14 lg:flex-row lg:items-center lg:border-b lg:shadow-none">
            <DataCell className="basis-1/6">2301780</DataCell>
            <DataCell className="basis-2/6">Flutterwave</DataCell>
            <DataCell className="basis-1/6">{formatAmount(3500)}</DataCell>
            <DataCell className="basis-1/6">
              <Badge status={Status.Successful} />
            </DataCell>
            <DataCell className="basis-1/6">2022-08-20 16:17:34</DataCell>
          </div>
        </div>
      </div>

      <p>pagination</p>
    </div>
  );
};
