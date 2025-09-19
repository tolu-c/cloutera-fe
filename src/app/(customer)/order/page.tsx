import {
  NewOrderForm,
  OrdersAccountInfo,
  OrdersServiceDescription,
  OrdersServiceList,
  OrderUserWelcome,
} from "@/components/orders";
import type { Metadata } from "next";

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
    <div className="flex w-full flex-col items-start gap-16">
      <div className="flex w-full flex-col items-start gap-4">
        <OrderUserWelcome />

        <OrdersAccountInfo />
      </div>

      <div className="grid w-full grid-cols-1 lg:grid-cols-5">
        <div className="flex flex-col gap-6 bg-white px-4 py-8 lg:col-span-3">
          <div className="bg-foundation-red-normal flex w-full items-center justify-start rounded-lg px-4 py-2.5 text-base/4 text-white">
            Service
          </div>

          <OrdersServiceList />

          <NewOrderForm serviceId={serviceId} />
        </div>

        <OrdersServiceDescription />
      </div>
    </div>
  );
};

export default OrderPage;
