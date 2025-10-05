"use client";

import { useState, useMemo } from "react";

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
import { CustomerFilterForm } from "./customer-filter-form";
import { UserStatus } from "@/types/enums";

export const CustomerList = () => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [filters, setFilters] = useState<{
    status: UserStatus | "";
    role: string;
  }>({
    status: "",
    role: "",
  });

  const { page, limit, handlePageChange, handleLimitChange } = usePagination();

  const statusOptions = [
    { label: "Active", value: UserStatus.Active },
    { label: "Inactive", value: UserStatus.Inactive },
    { label: "Blocked", value: UserStatus.Blocked },
  ];
  const roleOptions = [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
  ];

  const { isLoading, data } = useGetCustomers({
    search,
    page,
    limit,
    status: filters.status ? filters.status : undefined,
    role: filters.role ? filters.role : undefined,
  });

  const pagination = data?.pagination;

  // Memoize filtered customer data
  const filteredCustomers = useMemo(() => {
    if (!data?.data) return [];
    return data.data.filter((user) => {
      const searchValue = search?.toLowerCase() || "";
      const matchesSearch =
        !search ||
        user.firstName?.toLowerCase().includes(searchValue) ||
        user.lastName?.toLowerCase().includes(searchValue) ||
        user.email?.toLowerCase().includes(searchValue) ||
        user.username?.toLowerCase().includes(searchValue);
      const matchesStatus = !filters.status || user.status === filters.status;
      const matchesRole = !filters.role || user.role === filters.role;
      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [data, search, filters]);

  function handleApplyFilter({
    status,
    role,
  }: {
    status: UserStatus | "";
    role: string;
  }) {
    setFilters({ status, role });
    // Optionally refetch or filter data here
  }

  function handleClearFilter() {
    setFilters({ status: "", role: "" });
    // Optionally reset filter here
  }

  return (
    <AdminCard className="gap-0 p-0">
      <div className="flex w-full items-center justify-between bg-white p-4">
        <Searchbar
          className="w-85"
          onSendSearchValue={(value) => setSearch(value)}
          filterComponent={
            <CustomerFilterForm
              statusOptions={statusOptions}
              roleOptions={roleOptions}
              clearFilterAction={handleClearFilter}
              applyFilterAction={handleApplyFilter}
              closeAction={() => {}}
            />
          }
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
            filteredCustomers &&
            filteredCustomers.map((user) => (
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
