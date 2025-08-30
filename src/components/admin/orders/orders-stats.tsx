import { OrderCard } from "@/components/admin/orders/order-card";
import { OrderStat } from "@/types/enums";

export const OrdersStats = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <OrderCard variant={OrderStat.All} value={100000} />
      <OrderCard variant={OrderStat.Completed} value={40000} />
      <OrderCard variant={OrderStat.Pending} value={40000} />
      <OrderCard variant={OrderStat.Cancelled} value={40000} />
    </div>
  );
};
