import { Badge, DataCell } from "@/components/ui";
import { formatAmount, formatNumber } from "@/utils";
import { OrderStatus } from "@/types/enums";

export const CustomerOrderHistoryListItem = () => {
  return (
    <div className="grid w-full grid-cols-10 border-b border-gray-100 text-sm hover:bg-gray-50">
      <DataCell className="gap-4 p-4">
        <input type="checkbox" className="size-4 rounded-sm" />
        <span>123456</span>
      </DataCell>
      <DataCell className="col-span-2 truncate p-4">
        https://www.instagram.com/
      </DataCell>
      <DataCell className="p-4">{formatAmount(3500)}</DataCell>
      <DataCell className="p-4">{formatNumber(500)}</DataCell>
      <DataCell className="col-span-2 p-4">
        Instagram Followers - [ Max: 100K ]
      </DataCell>
      <DataCell className="p-4">
        <Badge status={OrderStatus.COMPLETED} />
      </DataCell>
      <DataCell className="col-span-2 p-4">2022-08-20 16:17:34</DataCell>
    </div>
  );
};
