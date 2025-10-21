import {
  OrdersAccountInfo,
  OrdersServiceDescription,
  OrderUserWelcome,
} from "@/components/orders";
import type { Metadata } from "next";
import { OrdersServiceContainer } from "@/components/orders/order-service-container";

export const metadata: Metadata = {
  title: "Cloutera | Order",
};

const OrderPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ serviceId: string }>;
}) => {
  const serviceId = (await searchParams).serviceId;

  return (
    <div className="flex w-full flex-col items-start gap-4 lg:gap-16">
      <div className="flex w-full flex-col items-start gap-4">
        <OrderUserWelcome />

        <OrdersAccountInfo />
      </div>

      <div className="grid w-full grid-cols-1 lg:grid-cols-5">
        <OrdersServiceContainer serviceId={serviceId} />

        <OrdersServiceDescription />
      </div>
    </div>
  );
};

export default OrderPage;
