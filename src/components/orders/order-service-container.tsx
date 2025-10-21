"use client";

import { useState } from "react";

import { OrdersServiceList } from "@/components/orders/orders-service-list";
import { NewOrderForm } from "@/components/orders/new-order-form";

interface OrderServiceContainerProps {
  serviceId: string;
}

export function OrdersServiceContainer({
  serviceId,
}: OrderServiceContainerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined,
  );

  return (
    <div className="flex flex-col gap-6 bg-white px-4 py-0 lg:col-span-3 lg:py-8">
      <div className="bg-foundation-red-normal flex w-full items-center justify-start rounded-lg px-4 py-2.5 text-base/4 text-white">
        Service
      </div>

      <OrdersServiceList
        onSelectService={(service) => {
          setSelectedCategory(service);
        }}
        selectedCategory={selectedCategory}
      />

      <NewOrderForm
        serviceId={serviceId}
        selectedServiceCategory={selectedCategory}
      />
    </div>
  );
}
