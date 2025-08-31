"use client";

import { useMemo } from "react";

import { AdminCard, Button, DataCell } from "@/components/ui";
import { Searchbar } from "@/components/form";
import { ExportAsIcon } from "@/assets/icons";
import { CustomerListItem } from "@/components/admin/customers";

export const CustomerList = () => {
  const items = useMemo(() => Array.from({ length: 20 }, (_, i) => i), []);

  return (
    <AdminCard className="gap-0 p-0">
      <div className="flex w-full items-center justify-between bg-white p-4">
        <Searchbar
          className="w-85"
          onSendSearchValue={(value) => {
            console.log(value);
          }}
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

        <div className="h-full">
          {items.map((_, i) => (
            <CustomerListItem key={i} />
          ))}
        </div>

        <div>pagination</div>
      </div>
    </AdminCard>
  );
};
