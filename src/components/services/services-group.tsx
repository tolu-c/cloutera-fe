"use client";

import { ServicesList } from "@/components/services/services-list";
import { useGetServices } from "@/queries/get-services";
import { ServiceItem } from "@/types/services.types";
import { Loading, Pagination } from "../ui";
import { useState } from "react";

interface ServicesGroupProps {
  search: string;
  category: string;
}

export const ServicesGroup = ({ search, category }: ServicesGroupProps) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);

  const { data, isLoading } = useGetServices({
    page,
    limit,
    search,
    category,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.data) {
    return null;
  }

  const pagination = data.pagination;

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

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1); // Reset to first page when changing limit
  };

  return (
    <div className="flex w-full flex-col items-start gap-2">
      {result.map(({ category, services }, index) => (
        <ServicesList key={index} title={category} services={services} />
      ))}
      {pagination && (
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          limit={pagination.limit}
          hasPrev={pagination.hasPrev}
          hasNext={pagination.hasNext}
          onLimitChange={handleLimitChange}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
