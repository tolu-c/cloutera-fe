"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { SELECTED_SERVICE_CATEGORIES } from "@/types/constants";

interface ServiceListProps {
  onSelectService?: (service: string) => void;
}
export const OrdersServiceList = ({ onSelectService }: ServiceListProps) => {
  const [selectedService, setSelectedService] = useState<string | undefined>(
    undefined,
  );

  const selectService = (service: string) => {
    setSelectedService(service);
    if (onSelectService) {
      console.log("service", service);
      console.log("decode service", decodeURIComponent(service));
      onSelectService(decodeURIComponent(service));
    }
  };

  return (
    <div className="flex w-full flex-wrap items-start gap-2 px-2 lg:p-4">
      <button
        className="text-foundation-red-normal h-11 rounded-full bg-white px-4 py-2 text-sm/5 font-semibold shadow-md"
        onClick={() => setSelectedService(undefined)}
      >
        All
      </button>
      {SELECTED_SERVICE_CATEGORIES.map((service, index) => (
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
