import Link from "next/link";
import type { Metadata } from "next";

import { Searchbar } from "@/components/form";
import { Button, DataCell } from "@/components/ui";
import { VideoIcon } from "@/assets/icons";
import { HistoryList } from "@/components/orders/history/history-list";
import { orders } from "@/data/orders";
import { HistoryTabs } from "@/components/orders/history/history-tabs";

export const metadata: Metadata = {
  title: "Cloutera | Recent Orders",
};

const OrderHistory = () => {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <h2 className="text-heading px-4 text-2xl/4 font-medium">
        Recent Orders
      </h2>

      <div className="p-4 pb-0">
        <HistoryTabs />
      </div>

      <div className="flex w-full flex-col items-start gap-4 p-4">
        <div className="flex h-14 w-full items-center justify-between gap-3">
          <Searchbar />

          <div className="flex items-center gap-2">
            <Link href="/order">
              <Button width="max">New Order</Button>
            </Link>

            <Link href="https://www.youtube.com" target="_blank">
              <Button
                state="outline"
                icon={<VideoIcon className="text-current" />}
                width="max"
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

          <HistoryList orders={orders} />
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
