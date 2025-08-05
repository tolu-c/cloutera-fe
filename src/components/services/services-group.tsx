"use client";

import { ServicesList } from "@/components/services/services-list";
import { useGetServices } from "@/queries/get-services";
import { ServiceItem } from "@/types/services.types";
import { Loading } from "../ui";

interface ServicesGroupProps {
  search: string;
  category: string;
}

export const ServicesGroup = ({ search, category }: ServicesGroupProps) => {
  const { data, isLoading } = useGetServices({
    limit: 50,
    search,
    category,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.data) {
    return null;
  }

  const groupedData = data?.data?.reduce(
    (acc: { [key: string]: ServiceItem[] }, service: ServiceItem) => {
      if (!acc[service.category]) {
        acc[service.category] = [];
      }
      acc[service.category].push(service);
      return acc;
    },
    {},
  );

  const result = Object.entries(groupedData).map(([category, services]) => ({
    category,
    services,
  }));

  return (
    <div className="flex w-full flex-col items-start gap-2">
      {result.map(({ category, services }, index) => (
        <ServicesList key={index} title={category} services={services} />
      ))}
    </div>
  );
};
