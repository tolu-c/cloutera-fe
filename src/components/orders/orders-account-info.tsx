"use client";

import {
  AccountStatusIcon,
  EmptyWalletIcon,
  ShoppingCartIcon,
} from "@/assets/icons";
import { Card } from "@/components/ui";
import { useGetAccountStatus } from "@/queries/account";
import { formatAmount } from "@/utils";
import { Fragment } from "react";

export const OrdersAccountInfo = () => {
  const { data, isLoading } = useGetAccountStatus();
  const account = data?.data;
  return (
    <div className="grid w-full grid-cols-1 gap-6 p-6 lg:w-auto lg:grid-cols-3">
      {isLoading && <p>loading...</p>}

      {account && (
        <Fragment>
          <Card
            title="Account Status"
            value={`Level ${account.accountStatus}`}
            icon={<AccountStatusIcon className="size-4 text-white" />}
            gradient
          />
          <Card
            title="Total Orders"
            value={formatAmount(account.orders.totalAmount)}
            icon={
              <ShoppingCartIcon className="text-foundation-red-normal size-4" />
            }
          />
          <Card
            title="Balance"
            value={formatAmount(account.accountBalance)}
            icon={
              <EmptyWalletIcon className="text-foundation-red-normal size-4" />
            }
          />
        </Fragment>
      )}
    </div>
  );
};
