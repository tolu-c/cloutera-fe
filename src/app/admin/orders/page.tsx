import { Metadata } from "next";
import { PageSection } from "@/components/ui";
import { OrderList, OrdersStats } from "@/components/admin/orders";

export const metadata: Metadata = {
  title: "Cloutera | Admin | Orders",
};

const OrdersPage = () => {
  return (
    <PageSection>
      <OrdersStats />

      <OrderList />
    </PageSection>
  );
};
export default OrdersPage;
