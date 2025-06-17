"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { OrderService } from "@/types/enums";

export const OrdersServiceList = () => {
  const [selectedService, setSelectedService] = useState(OrderService.All);

  const servicesList = Object.values(OrderService);

  const selectService = (service: string) => {
    setSelectedService(service);
  };

  return (
    <div className="flex w-full flex-wrap items-start gap-2 p-4">
      {servicesList.map((service, index) => (
        <button
          key={index}
          onClick={() => selectService(service)}
          className={cn(
            "text-foundation-red-normal h-11 rounded-full bg-white px-4 py-2 text-sm/5 font-semibold",
            {
              "bg-foundation-red-normal text-white":
                service === selectedService,
              "shadow-sm": service !== selectedService,
            },
          )}
        >
          {service}
        </button>
      ))}
    </div>
  );
};
