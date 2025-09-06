"use client";

import { Loading, StatCard } from "@/components/ui";
import { MoneyIcon, PeopleIcon, ShoppingCartIcon } from "@/assets/icons";
import { useGetDashboardStats } from "@/queries/dashboard";

export const DashboardStats = () => {
  const { isLoading, data } = useGetDashboardStats();

  if (isLoading) {
    return <Loading />;
  }

  if (data?.data) {
    const { totalCustomers, totalOrders, totalRevenue } = data.data;

    return (
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
        <StatCard
          title="Total Customers"
          value={totalCustomers.current}
          icon={{
            color: "bg-foundation-red-white",
            icon: <PeopleIcon className="text-foundation-red-normal size-6" />,
          }}
          active={totalCustomers.active}
          lastWeek={{
            status: "down",
            percentage: totalCustomers.percentageChange,
          }}
        />

        <StatCard
          title="Total Orders"
          value={totalOrders.current}
          icon={{
            color: "bg-[#FFFBF6]",
            icon: <ShoppingCartIcon className="size-6 text-[#DF6E05]" />,
          }}
          active={totalOrders.active}
          lastWeek={{ status: "up", percentage: totalOrders.percentageChange }}
        />

        <StatCard
          title="Total Revenue"
          value={totalRevenue.current}
          icon={{
            color: "bg-success-light",
            icon: <MoneyIcon className="text-success-dark size-6" />,
          }}
          active={totalRevenue.active}
          lastWeek={{ status: "up", percentage: totalRevenue.percentageChange }}
          asCurrency
        />
      </div>
    );
  }
};
