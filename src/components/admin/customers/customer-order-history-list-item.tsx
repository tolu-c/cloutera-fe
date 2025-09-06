import { Badge, DataCell } from "@/components/ui";
import { formatAmount, formatDateTime, formatNumber } from "@/utils";
import { DateTimeFormat } from "@/types/enums";
import { OrderItem } from "@/types/orders.types";

interface CustomerOrderHistoryListItemProps {
  order: OrderItem;
}

export const CustomerOrderHistoryListItem = ({
  order,
}: CustomerOrderHistoryListItemProps) => {
  const { orderId, link, charge, quantity, serviceId, status, createdAt } =
    order;

  return (
    <div className="grid w-full grid-cols-10 border-b border-gray-100 text-sm hover:bg-gray-50">
      <DataCell className="gap-4 p-4">
        <input type="checkbox" className="size-4 rounded-sm" />
        <span>{orderId}</span>
      </DataCell>
      <DataCell className="col-span-2 truncate p-4">{link}</DataCell>
      <DataCell className="p-4">{formatAmount(charge)}</DataCell>
      <DataCell className="p-4">{formatNumber(quantity)}</DataCell>
      <DataCell className="col-span-2 p-4">{serviceId?.name || "-"}</DataCell>
      <DataCell className="p-4">
        <Badge status={status} />
      </DataCell>
      <DataCell className="col-span-2 p-4">
        {formatDateTime(createdAt, DateTimeFormat.MonthDateYear)}
      </DataCell>
    </div>
  );
};
