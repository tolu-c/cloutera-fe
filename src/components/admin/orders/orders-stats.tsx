"use client";

import { OrderCard } from "@/components/admin/orders/order-card";
import { OrderStat } from "@/types/enums";
import { useGetAdminOrdersStats } from "@/queries/orders";
import { Loading } from "@/components/ui";
import { Fragment } from "react";

export const OrdersStats = () => {
  const { isLoading, data } = useGetAdminOrdersStats();

  if (isLoading) {
    return <Loading />;
  }

  const stats = data?.data;

  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats && (
        <Fragment>
          <OrderCard variant={OrderStat.All} value={stats.total} />
          <OrderCard variant={OrderStat.Completed} value={stats.completed} />
          <OrderCard variant={OrderStat.Pending} value={stats.pending} />
          <OrderCard variant={OrderStat.Cancelled} value={stats.cancelled} />
        </Fragment>
      )}
    </div>
  );
};
