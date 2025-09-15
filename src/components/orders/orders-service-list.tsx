"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { useGetServiceCategories } from "@/queries/services/get-service-categories";
import { Loading } from "../ui";

interface ServiceListProps {
  onSelectService?: (service: string) => void;
}
export const OrdersServiceList = ({ onSelectService }: ServiceListProps) => {
  const [categoriesLength, setCategoriesLength] = useState(5);
  const [selectedService, setSelectedService] = useState<string>("");

  const { data, isLoading } = useGetServiceCategories();

  const selectService = (service: string) => {
    setSelectedService(service);
    if (onSelectService) {
      onSelectService(service);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.data.categories) {
    return null;
  }

  return (
    <div className="flex w-full flex-wrap items-start gap-2 p-4">
      <button
        className="text-foundation-red-normal h-11 rounded-full bg-white px-4 py-2 text-sm/5 font-semibold shadow-md"
        onClick={() => setSelectedService("")}
      >
        All
      </button>
      {data.data.categories.slice(0, categoriesLength).map((service, index) => (
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
      <button
        className="text-foundation-red-normal h-11 rounded-full bg-white px-4 py-2 text-sm/5 font-semibold shadow-md"
        onClick={() => setCategoriesLength((prev) => prev + 10)}
      >
        Load more...
      </button>
    </div>
  );
};
