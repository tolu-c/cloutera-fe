"use client";

import { EmptyWalletIcon } from "@/assets/icons";
import { Card } from "../ui";
import { useGetAccountStatus } from "@/queries/account";
import { formatAmount } from "@/utils";

export const FundBalance = () => {
  const { data } = useGetAccountStatus();
  const account = data?.data;
  return (
    <div>
      <Card
        title="Balance"
        value={formatAmount(account?.accountBalance ?? 0)}
        icon={<EmptyWalletIcon className="text-foundation-red-normal size-4" />}
      />
    </div>
  );
};
