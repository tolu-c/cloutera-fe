"use client";

import { useState } from "react";

import {
  AdminCard,
  Button,
  DataCell,
  Loading,
  Pagination,
} from "@/components/ui";
import { Searchbar } from "@/components/form";
import { ExportAsIcon } from "@/assets/icons";
import { CustomerListItem } from "@/components/admin/customers";
import { useGetCustomers } from "@/queries/customers";
import { usePagination } from "@/hooks";

export const CustomerList = () => {
  const [search, setSearch] = useState<string | undefined>(undefined);

  const { page, limit, handlePageChange, handleLimitChange } = usePagination();

  const { isLoading, data } = useGetCustomers({
    search,
    page,
    limit,
  });

  const pagination = data?.pagination;

  return (
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
          <div className="text-grey-text-950 grid grid-cols-7 text-base font-semibold">
            <DataCell className="col-span-2 gap-4 p-4">
              <input type="checkbox" className="size-4 rounded-sm" />
              <span>Customer</span>
            </DataCell>
            <DataCell className="p-4">Username</DataCell>
            <DataCell className="p-4">Status</DataCell>
            <DataCell className="col-span-2 p-4">Date of Creation</DataCell>
            <DataCell className="p-4">Action</DataCell>
          </div>
        </div>

        {isLoading && <Loading />}
        <div className="h-full">
          {!isLoading &&
            data?.data &&
            data.data.map((user) => (
              <CustomerListItem key={user._id} user={user} />
            ))}
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
