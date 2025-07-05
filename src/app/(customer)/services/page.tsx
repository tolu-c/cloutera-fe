import Link from "next/link";

import { OrdersServiceList } from "@/components/orders";
import { Button, DataCell } from "@/components/ui";
import { VideoIcon } from "@/assets/icons";
import { Searchbar } from "@/components/form";
import { ServicesGroup } from "@/components/services";
import { serviceListData } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloutera | Services",
};

const Services = () => {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <h2 className="text-heading px-4 text-2xl/4 font-medium">
        Available Services
      </h2>

      <OrdersServiceList />

      <div className="flex w-full flex-col items-start gap-4 p-4">
        <div className="flex h-14 w-full items-center justify-between gap-3">
          <Searchbar />

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

          <ServicesGroup serviceList={serviceListData} />
        </div>
      </div>
    </div>
  );
};

export default Services;
