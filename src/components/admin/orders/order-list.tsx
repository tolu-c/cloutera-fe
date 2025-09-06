"use client";

import { useState } from "react";

import { AdminCard, DataCell, Loading, Pagination } from "@/components/ui";
import { Searchbar } from "@/components/form";
import { OrderListItem } from "@/components/admin/orders";
import { usePagination } from "@/hooks";
import { useGetAdminOrders } from "@/queries/orders";

export const OrderList = () => {
  const [search, setSearch] = useState<string | undefined>(undefined);

  const { page, limit, handlePageChange, handleLimitChange } = usePagination();

  const { isLoading, data } = useGetAdminOrders({
    search,
    page,
    limit,
  });

  const pagination = data?.pagination;

  return (
    <AdminCard className="gap-0 p-0">
      <div className="flex w-full items-center gap-4 bg-white p-4">
        <Searchbar
          className="w-85"
          onSendSearchValue={(value) => {
            setSearch(value);
          }}
        />
      </div>

      <div className="flex h-full max-h-100 w-full flex-col">
        <div className="border-grey-text-200 w-full border-b bg-[#F7F7F7]">
          <div className="text-grey-text-950 grid grid-cols-8 gap-4 text-base font-semibold">
            <DataCell className="flex items-center p-4">
              <input type="checkbox" className="mr-2 size-4 rounded-sm" />
              <span>ID</span>
            </DataCell>
            <DataCell className="p-4">Customer</DataCell>
            <DataCell className="p-4">Charge</DataCell>
            <DataCell className="p-4">Quantity</DataCell>
            <DataCell className="p-4">Service</DataCell>
            <DataCell className="p-4">Status</DataCell>
            <DataCell className="p-4">Link</DataCell>
            <DataCell className="p-4">Date</DataCell>
          </div>
        </div>

        {isLoading && <Loading />}

        <div className="h-full">
          {!isLoading &&
            data?.data &&
            data.data.map((o) => <OrderListItem key={o._id} order={o} />)}
        </div>

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
    </AdminCard>
  );
};
