"use client";

import {
  AccountStatusIcon,
  EmptyWalletIcon,
  PlusLineIcon,
  ShoppingCartIcon,
} from "@/assets/icons";
import { Card } from "@/components/ui";
import { useGetAccountStatus } from "@/queries/account";
import { formatAmount } from "@/utils";
import { Fragment } from "react";
import Link from "next/link";
import { routes } from "@/utils/routes";

export const OrdersAccountInfo = () => {
  const { data, isLoading } = useGetAccountStatus();
  const account = data?.data;
  return (
    <div className="grid w-full grid-cols-2 gap-2 p-6 lg:w-auto lg:grid-cols-3 lg:gap-6">
      {isLoading && <p>loading...</p>}

      {account && (
        <Fragment>
          <Card
            title="Account Status"
            value={`Level ${account.accountStatus}`}
            icon={<AccountStatusIcon className="size-4 text-white" />}
            className="col-span-2"
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
            extraIcon={
              <Link
                href={routes.customer.addFunds}
                className="bg-foundation-red-normal flex size-5 items-center justify-center rounded-sm text-white"
              >
                <PlusLineIcon className="size-3 text-white" />
              </Link>
            }
          />
        </Fragment>
      )}
    </div>
  );
};
