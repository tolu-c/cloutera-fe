"use client";

import {
  AdminCard,
  Button,
  DataCell,
  Loading,
  Pagination,
} from "@/components/ui";
import { useState } from "react";
import { usePagination } from "@/hooks";
import { useGetUserActivities } from "@/queries/activity";
import { Searchbar } from "@/components/form";
import { ExportAsIcon } from "@/assets/icons";
import { formatDateTime } from "@/utils";

interface CustomerUserActivityProps {
  customerId: string;
}

export function CustomerUserActivity({
  customerId,
}: CustomerUserActivityProps) {
  const [search, setSearch] = useState<string | undefined>(undefined);

  const { page, limit, handleLimitChange, handlePageChange } = usePagination();

  const { isLoading, data } = useGetUserActivities(customerId, {
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
          <div className="text-grey-text-950 grid grid-cols-6 text-base font-semibold">
            <DataCell className="col-span-5 gap-4 p-4">
              <input type="checkbox" className="size-4 rounded-sm" />
              <span>Action</span>
            </DataCell>
            <DataCell className="col-span-1 p-4">Date</DataCell>
          </div>
        </div>

        {isLoading && <Loading />}

        <div className="h-full">
          {Array.isArray(data?.data) && data?.data.length > 0 ? (
            data.data.map(({ _id, action, createdAt }) => (
              <div
                key={_id}
                className="grid w-full grid-cols-6 border-b border-gray-100 text-sm hover:bg-gray-50"
              >
                <DataCell className="col-span-5 gap-4 p-4">
                  <input type="checkbox" className="size-4 rounded-sm" />
                  <span>{action}</span>
                </DataCell>
                <DataCell className="col-span-1 p-4">
                  {formatDateTime(createdAt)}
                </DataCell>
              </div>
            ))
          ) : (
            <p>No activity.</p>
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
  );
}
