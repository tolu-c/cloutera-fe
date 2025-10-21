"use client";

import Link from "next/link";
import { Searchbar } from "../form";
import { Button, DataCell } from "../ui";
import { VideoIcon } from "@/assets/icons";
import { ServicesGroup } from "./services-group";
import { Fragment, useState } from "react";
import { OrdersServiceList } from "../orders";
import { ServiceFilterForm } from "./service-filter-form";

interface ServicesProps {
  showList?: boolean;
}

export const Services = ({ showList = true }: ServicesProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [filters, setFilters] = useState<{ category: string; status: string }>({
    category: "",
    status: "",
  });

  // Example options, replace with real data as needed
  const categoryOptions = [
    { label: "All", value: "" },
    { label: "Social", value: "social" },
    { label: "SEO", value: "seo" },
  ];
  const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  function handleApplyFilter({
    category,
    status,
  }: {
    category: string;
    status: string;
  }) {
    setFilters({ category, status });
    setCurrentCategory(category); // Optionally update category
  }

  function handleClearFilter() {
    setFilters({ category: "", status: "" });
    setCurrentCategory("");
  }

  const handleSearch = (value: string) => {
    setCurrentCategory("");
    setSearchValue(value);
  };

  const handleSetCategory = (value: string) => {
    setSearchValue("");
    setCurrentCategory(value);
  };

  return (
    <Fragment>
      {showList && (
        <OrdersServiceList
          onSelectService={(category) => handleSetCategory(category || "")}
        />
      )}
      <div className="flex w-full flex-col items-start gap-4 p-4">
        <div className="flex h-full w-full flex-col items-start justify-between gap-3 lg:h-14 lg:flex-row lg:items-center">
          <Searchbar
            onSendSearchValue={handleSearch}
            filterComponent={
              <ServiceFilterForm
                categoryOptions={categoryOptions}
                statusOptions={statusOptions}
                clearFilterAction={handleClearFilter}
                applyFilterAction={handleApplyFilter}
                closeAction={() => {}}
              />
            }
          />
          <Link href="https://www.youtube.com" target="_blank">
            <Button icon={<VideoIcon className="text-white" />} width="max">
              Watch Tutorial
            </Button>
          </Link>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="bg-foundation-red-normal hidden h-13 w-full items-center overflow-hidden rounded-lg text-white lg:flex">
            <DataCell className="basis-1/7 text-current">ID</DataCell>
            <DataCell className="basis-2/7 text-current">Service</DataCell>
            <DataCell className="basis-1/7 text-current">Rate/100</DataCell>
            <DataCell className="basis-1/7 text-current">Min Order</DataCell>
            <DataCell className="basis-1/7 text-current">Max Order</DataCell>
            <DataCell className="basis-1/7 text-current">Description</DataCell>
          </div>
          <ServicesGroup
            search={searchValue}
            category={filters.category || currentCategory}
          />
        </div>
      </div>
    </Fragment>
  );
};
