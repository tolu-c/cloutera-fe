"use client";

import { Fragment, useState } from "react";
import { HistoryTabs } from "./history-tabs";
import { Searchbar } from "@/components/form";
import { Button, DataCell, Pagination } from "@/components/ui";
import Link from "next/link";
import { HistoryList } from "./history-list";
import { VideoIcon } from "@/assets/icons";
import { useGetUserOrders } from "@/queries/orders";
import { OrderStatus } from "@/types/enums";
import { OrderHistoryFilterForm } from "./order-history-filter-form";

export const OrderHistory = () => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<OrderStatus | "">(OrderStatus.All);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [filters, setFilters] = useState<{ status: OrderStatus | "" }>({
    status: "",
  });

  const orderStatuses = Object.values(OrderStatus);
  const statusOptions = orderStatuses.map((s) => ({ label: s, value: s }));

  function handleApplyFilter({ status }: { status: OrderStatus | "" }) {
    setFilters({ status });
    setStatus(status || OrderStatus.All);
  }

  function handleClearFilter() {
    setFilters({ status: "" });
    setStatus(OrderStatus.All);
  }

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1); // Reset to first page when changing limit
  };

  const { isLoading, data } = useGetUserOrders({
    search,
    status:
      filters.status && filters.status !== OrderStatus.All
        ? filters.status
        : undefined,
    page,
    limit,
  });
  const pagination = data?.pagination;

  return (
    <Fragment>
      <div className="p-4 pb-0">
        <HistoryTabs
          currentTab={status || OrderStatus.All}
          setActiveTabAction={setStatus}
          tabs={orderStatuses}
        />
      </div>
      <div className="flex w-full flex-col items-start gap-4 p-4">
        <div className="flex h-14 w-full items-center justify-between gap-3">
          <Searchbar
            onSendSearchValue={(value) => setSearch(value)}
            filterComponent={
              <OrderHistoryFilterForm
                statusOptions={statusOptions}
                clearFilterAction={handleClearFilter}
                applyFilterAction={handleApplyFilter}
                closeAction={() => {}}
              />
            }
          />
          <div className="flex items-center gap-2">
            <Link href="/order">
              <Button width="max">New Order</Button>
            </Link>
            <Link href="https://www.youtube.com" target="_blank">
              <Button
                state="outline"
                icon={<VideoIcon className="text-current" />}
              >
                Watch Tutorial
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="bg-foundation-red-normal hidden h-13 w-full items-center overflow-hidden rounded-lg text-white lg:flex">
            <DataCell className="basis-1/9 text-current">ID</DataCell>
            <DataCell className="basis-2/9 text-current">Link</DataCell>
            <DataCell className="basis-1/9 text-current">Charge</DataCell>
            <DataCell className="basis-1/9 text-current">Quantity</DataCell>
            <DataCell className="basis-2/9 text-current">Service</DataCell>
            <DataCell className="basis-1/9 text-current">Status</DataCell>
            <DataCell className="basis-1/9 text-current">Date</DataCell>
          </div>

          {isLoading && <p>loading...</p>}

          {!isLoading && data?.data && <HistoryList orders={data.data} />}
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
      </div>
    </Fragment>
  );
};
