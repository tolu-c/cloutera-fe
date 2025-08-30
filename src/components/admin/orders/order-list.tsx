"use client";

import { useMemo } from "react";

import { AdminCard } from "@/components/ui";
import { Searchbar } from "@/components/form";
import { OrderListItem } from "@/components/admin/orders";
import { OrderItem } from "@/types/orders.types";
import { OrderStatus } from "@/types/enums";

const sampleOrderItem: OrderItem = {
  _id: "12345",
  userId: "1234",
  serviceId: {
    _id: "1234",
    serviceId: 1234,
    name: "Service",
    type: "Service",
    category: "Service",
    rate: "0.90",
  },
  link: "https://instagram.com",
  quantity: 50,
  charge: 1500,
  startCount: 2,
  remains: 4,
  status: OrderStatus.COMPLETED,
  createdAt: "today",
  updatedAt: "today",
  orderId: 1234,
};

export const OrderList = () => {
  const items = useMemo(() => Array.from({ length: 30 }, (_, i) => i), []);
  return (
    <AdminCard className="gap-0 p-0">
      <div className="flex w-full items-center gap-4 bg-white p-4">
        <Searchbar
          className="w-85"
          onSendSearchValue={(value) => {
            console.log(value);
          }}
        />
      </div>

      <div className="flex h-full max-h-100 w-full flex-col">
        <div className="border-grey-text-200 w-full border-b bg-[#F7F7F7]">
          <div className="text-grey-text-950 grid grid-cols-8 gap-4 p-4 text-base font-semibold">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 size-4 rounded-sm" />
              <span>ID</span>
            </div>
            <div>Customer</div>
            <div>Charge</div>
            <div>Quantity</div>
            <div>Service</div>
            <div>Status</div>
            <div>Link</div>
            <div>Date</div>
          </div>
        </div>

        <div className="h-full max-h-80 w-full overflow-y-auto">
          <div className="h-full">
            {items.map((_, i) => (
              <OrderListItem key={`order-${i}`} order={sampleOrderItem} />
            ))}
          </div>
        </div>

        <div>pagination</div>
      </div>
    </AdminCard>
  );
};
