import { StatCard } from "@/components/ui";
import { MoneyIcon, PeopleIcon, ShoppingCartIcon } from "@/assets/icons";

export const DashboardStats = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
      <StatCard
        title="Total Customers"
        value={100000}
        icon={{
          color: "bg-foundation-red-white",
          icon: <PeopleIcon className="text-foundation-red-normal size-6" />,
        }}
        active={98000}
        lastWeek={{ status: "down", percentage: 10 }}
      />

      <StatCard
        title="Total Orders"
        value={40000}
        icon={{
          color: "bg-[#FFFBF6]",
          icon: <ShoppingCartIcon className="size-6 text-[#DF6E05]" />,
        }}
        active={98000}
        lastWeek={{ status: "up", percentage: 25 }}
      />

      <StatCard
        title="Total Revenue"
        value={45000}
        icon={{
          color: "bg-success-light",
          icon: <MoneyIcon className="text-success-dark size-6" />,
        }}
        active={98000}
        lastWeek={{ status: "up", percentage: 25 }}
        asCurrency
      />
    </div>
  );
};
