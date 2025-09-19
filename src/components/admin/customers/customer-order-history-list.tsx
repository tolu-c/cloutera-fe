"use client";

import { Searchbar } from "@/components/form";
import {
  AdminCard,
  Button,
  DataCell,
  Loading,
  Pagination,
} from "@/components/ui";
import { ExportAsIcon } from "@/assets/icons";
import { CustomerOrderHistoryListItem } from "@/components/admin/customers";
import { usePagination } from "@/hooks";
import { useGetCustomerOrders } from "@/queries/customers";
import { useState } from "react";

interface CustomerOrderHistoryListProps {
  customerId: string;
}

export const CustomerOrderHistoryList = ({
  customerId,
}: CustomerOrderHistoryListProps) => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const { page, limit, handleLimitChange, handlePageChange } = usePagination();

  const { isLoading, data } = useGetCustomerOrders(customerId, {
    page,
    limit,
    search,
  });

  const pagination = data?.pagination;

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <div className="bg-grey-text-50 flex items-center rounded-lg px-1 py-0.5">
        <button
          type="button"
          className="tab-shadow text-grey-text-800 flex rounded-lg bg-white px-3 py-1.5 font-medium"
        >
          Orders
        </button>
      </div>

      <AdminCard className="gap-0 p-0">
        <div className="flex w-full items-center justify-between bg-white p-4">
          <Searchbar
            className="w-85"
            onSendSearchValue={(value) => setSearch(value)}
          />

          <Button
            width="max"
            icon={<ExportAsIcon className="size-4 text-current" />}
          >
            Export as CSV
          </Button>
        </div>

        <div className="flex h-full w-full flex-col">
          <div className="border-grey-text-200 w-full border-b bg-[#F7F7F7]">
            <div className="text-grey-text-950 grid grid-cols-10 text-base font-semibold">
              <DataCell className="gap-4 p-4">
                <input type="checkbox" className="size-4 rounded-sm" />
                <span>ID</span>
              </DataCell>
              <DataCell className="col-span-2 p-4">Link</DataCell>
              <DataCell className="p-4">Charge</DataCell>
              <DataCell className="p-4">Quantity</DataCell>
              <DataCell className="col-span-2 p-4">Service</DataCell>
              <DataCell className="p-4">Status</DataCell>
              <DataCell className="col-span-2 p-4">Date</DataCell>
            </div>
          </div>

          {isLoading && <Loading />}

          <div className="h-full">
            {Array.isArray(data?.data) && data?.data.length > 0 ? (
              data.data.map((o) => (
                <CustomerOrderHistoryListItem key={o._id} order={o} />
              ))
            ) : (
              <p>No orders.</p>
            )}
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
    </div>
  );
};
