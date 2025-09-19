"use client";

import { AdminCard, Card, Divider, Info, Loading } from "@/components/ui";
import {
  AccountStatusIcon,
  EmptyWalletIcon,
  ShoppingCartIcon,
  VerifiedTickIcon,
} from "@/assets/icons";
import { formatAmount, formatDateTime } from "@/utils";
import { useGetCustomer, useGetCustomerAccount } from "@/queries/customers";
import { DateTimeFormat } from "@/types/enums";
import { Fragment } from "react";

interface CustomerInformationProps {
  customerId: string;
}

export const CustomerInformation = ({
  customerId,
}: CustomerInformationProps) => {
  const { isLoading, data } = useGetCustomer(customerId);
  const { isLoading: loadingAccount, data: accountData } =
    useGetCustomerAccount(customerId);

  const user = data?.data;
  const account = accountData?.data;

  return (
    <AdminCard className="gap-3 p-4">
      <p className="text-grey-text-950 text-lg/6 font-medium">
        Customer Information
      </p>

      <Divider />

      {isLoading && <Loading />}

      {user && (
        <div className="flex w-full items-center gap-3">
          <div className="flex grow flex-col items-center gap-3 py-3">
            <div className="bg-foundation-red-light relative flex size-16 items-center justify-center rounded-full">
              <p className="text-grey-900 text-xl/7 font-medium">
                {user.firstName.charAt(0)} {user.lastName.charAt(0)}
              </p>

              <VerifiedTickIcon className="text-success-500 absolute right-0 bottom-0 z-50 size-5" />
            </div>

            <div className="flex w-max flex-col items-center gap-1">
              <p className="text-grey-900 flex-none font-semibold">
                {user.firstName} {user.lastName}
              </p>

              <div className="bg-success-25 text-success-500 flex items-center justify-center rounded-sm px-4 py-1 text-xs">
                {user.status}
              </div>
            </div>
          </div>

          <Divider vertical />

          <div className="grid grow grid-cols-1 content-start items-start gap-3 px-4 py-3 lg:grid-cols-2">
            <Info title="Username" value={user.username} />
            <Info title="Email" value={user.email} />
            <Info
              title="Created On"
              value={formatDateTime(
                user.createdAt,
                DateTimeFormat.MonthDateYear,
              )}
            />
          </div>

          <Divider vertical />

          <div className="flex grow flex-col gap-3">
            {loadingAccount && <Loading />}

            {account && (
              <Fragment>
                <Card
                  title="Account Status"
                  value={`Level ${account.accountStatus}`}
                  icon={<AccountStatusIcon className="size-4 text-white" />}
                  gradient
                />

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <Card
                    title="Total Orders"
                    value={formatAmount(account.orders.totalOrders)}
                    icon={
                      <ShoppingCartIcon className="text-foundation-red-normal size-4" />
                    }
                    className="min-w-full p-4 shadow-none"
                    amountSize="text-lg/7"
                  />
                  <Card
                    title="Balance"
                    value={formatAmount(account.accountBalance)}
                    icon={
                      <EmptyWalletIcon className="text-foundation-red-normal size-4" />
                    }
                    className="min-w-full shadow-none"
                    amountSize="text-lg/7"
                  />
                </div>
              </Fragment>
            )}
          </div>
        </div>
      )}

      <Divider />
    </AdminCard>
  );
};
