import { CustomerStatCard } from "@/components/admin/customers";
import { CustomerStat } from "@/types/enums";

export const CustomersStats = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
      <CustomerStatCard variant={CustomerStat.Total} value={100000} />
      <CustomerStatCard variant={CustomerStat.Active} value={60000} />
      <CustomerStatCard variant={CustomerStat.Inactive} value={40000} />
    </div>
  );
};
