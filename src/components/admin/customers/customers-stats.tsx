"use client";

import { CustomerStatCard } from "@/components/admin/customers";
import { CustomerStat } from "@/types/enums";
import { useGetCustomersStats } from "@/queries/customers";
import { Loading } from "@/components/ui";
import { Fragment } from "react";

export const CustomersStats = () => {
  const { data, isLoading } = useGetCustomersStats();
  const stats = data?.data;
  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
      {isLoading && <Loading />}

      {stats && (
        <Fragment>
          <CustomerStatCard variant={CustomerStat.Total} value={stats.total} />
          <CustomerStatCard
            variant={CustomerStat.Active}
            value={stats.active}
          />
          <CustomerStatCard
            variant={CustomerStat.Inactive}
            value={stats.inactive}
          />
        </Fragment>
      )}
    </div>
  );
};
