"use client";

import { ServicesList } from "@/components/services/services-list";
import { useGetServices } from "@/queries/get-services";
import { ServiceItem } from "@/types/services.types";
import { Loading, Pagination } from "../ui";
import { usePagination } from "@/hooks";
import { useMemo } from "react";

interface ServicesGroupProps {
  search: string;
  category: string;
}

export const ServicesGroup = ({ search, category }: ServicesGroupProps) => {
  const { page, limit, handleLimitChange, handlePageChange } = usePagination();
  const { data, isLoading } = useGetServices({
    page,
    limit,
    search,
    category,
  });

  const groupedData = useMemo(() => {
    return (
      data?.data?.reduce(
        (acc: { [key: string]: ServiceItem[] }, service: ServiceItem) => {
          if (!acc[service.category]) {
            acc[service.category] = [];
          }
          acc[service.category].push(service);
          return acc;
        },
        {},
      ) || {}
    );
  }, [data?.data]);

  const result = useMemo(() => {
    return Object.entries(groupedData).map(([cat, services]) => ({
      category: cat,
      services,
    }));
  }, [groupedData]);

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.data) {
    return <div>No services found</div>;
  }

  const pagination = data.pagination;

  return (
    <div className="flex w-full flex-col items-start gap-2">
      {result.map(({ category, services }) => (
        <ServicesList key={category} title={category} services={services} />
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
