import type { Metadata } from "next";

import { OrderHistory } from "@/components/orders/history/OrderHistory";

export const metadata: Metadata = {
  title: "Cloutera | Recent Orders",
};

const OrderHistoryPage = () => {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <h2 className="text-heading px-4 text-2xl/4 font-medium">
        Recent Orders
      </h2>

      <OrderHistory />
    </div>
  );
};

export default OrderHistoryPage;
