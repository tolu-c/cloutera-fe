"use client";

import { FundHistoryCategory, TransactionStatus } from "@/types/enums";
import { useState } from "react";
import { Searchbar } from "../form";
import { cn } from "@/utils/cn";
import { Badge, DataCell, Pagination } from "../ui";
import { formatAmount } from "@/utils";
import { useGetFundHistory } from "@/queries/account/get-fund-history";
import { usePagination } from "@/hooks";
import { FundsHistoryFilterForm } from "./funds-history-filter-form";

export const FundsHistory = () => {
  const [filters, setFilters] = useState<{
    category: FundHistoryCategory | "";
    status: TransactionStatus | "";
  }>({
    category: "",
    status: "",
  });
  const [searchValue, setSearchValue] = useState("");
  const [currentCategory, setCurrentCategory] = useState<FundHistoryCategory>(
    FundHistoryCategory.All,
  );
  const { handleLimitChange, handlePageChange } = usePagination();
  const tabs = Object.values(FundHistoryCategory);

  // Fetch all fund history data
  const { data, isLoading } = useGetFundHistory();
  const pagination = data?.pagination;

  // Client-side filtering
  const filteredData =
    data?.data?.filter((item) => {
      const matchesSearch =
        searchValue === "" ||
        item.transactionId.toLowerCase().includes(searchValue.toLowerCase());
      const matchesCategory =
        !filters.category ||
        item.type.toString() === filters.category.toString();
      const matchesStatus = !filters.status || item.status === filters.status;
      return matchesSearch && matchesCategory && matchesStatus;
    }) || [];

  const categoryOptions = tabs.map((tab) => ({ label: tab, value: tab }));
  const statusOptions = Object.values(TransactionStatus).map((s) => ({
    label: s,
    value: s,
  }));

  function handleApplyFilter({
    category,
    status,
  }: {
    category: FundHistoryCategory | "";
    status: TransactionStatus | "";
  }) {
    setFilters({ category, status });
    setCurrentCategory(category || FundHistoryCategory.All);
  }

  function handleClearFilter() {
    setFilters({ category: "", status: "" });
    setCurrentCategory(FundHistoryCategory.All);
  }

  return (
    <div className="flex w-full flex-col gap-4 px-6 py-4">
      <div className="flex h-11 w-max items-end gap-4 border-b border-[#E7EFFF]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={cn(
              "text-grey-10 flex h-full items-center justify-center p-3 text-base/5",
              {
                "text-foundation-red-normal border-foundation-red-normal border-b-2":
                  tab === currentCategory,
              },
            )}
            onClick={() => setCurrentCategory(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <Searchbar
        onSendSearchValue={setSearchValue}
        filterComponent={
          <FundsHistoryFilterForm
            categoryOptions={categoryOptions}
            statusOptions={statusOptions}
            clearFilterAction={handleClearFilter}
            applyFilterAction={handleApplyFilter}
            closeAction={() => {}}
          />
        }
      />
      <div className="flex w-full flex-col gap-2">
        <div className="bg-foundation-red-normal hidden h-13 w-full items-center overflow-hidden rounded-lg text-white lg:flex">
          <DataCell className="basis-1/6 text-current">ID</DataCell>
          <DataCell className="basis-2/6 text-current">Payment Method</DataCell>
          <DataCell className="basis-1/6 text-current">Amount</DataCell>
          <DataCell className="basis-1/6 text-current">Status</DataCell>
          <DataCell className="basis-1/6 text-current">Date</DataCell>
        </div>

        {isLoading && <p>loading...</p>}

        {!isLoading && filteredData && (
          <div className="flex w-full flex-col items-start gap-2">
            {filteredData.map(
              ({
                _id,
                transactionId,
                amount,
                status,
                createdAt,
                paymentMethod,
              }) => (
                <div
                  key={_id}
                  className="border-grey-200 flex w-full flex-col items-start rounded-lg bg-white shadow-sm lg:h-14 lg:flex-row lg:items-center lg:border-b lg:shadow-none"
                >
                  <DataCell className="basis-1/6">{transactionId}</DataCell>
                  <DataCell className="basis-2/6">{paymentMethod}</DataCell>
                  <DataCell className="basis-1/6">
                    {formatAmount(amount)}
                  </DataCell>
                  <DataCell className="basis-1/6">
                    <Badge status={status as TransactionStatus} />
                  </DataCell>
                  <DataCell className="basis-1/6">{createdAt}</DataCell>
                </div>
              ),
            )}
          </div>
        )}
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
  );
};
