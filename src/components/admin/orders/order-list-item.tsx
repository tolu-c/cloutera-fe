import { AdminOrderItem } from "@/types/orders.types";
import { Badge, DataCell } from "@/components/ui";
import { formatAmount, formatDateTime } from "@/utils";
import { DateTimeFormat } from "@/types/enums";

interface OrderListItemProps {
  order: AdminOrderItem;
}
export const OrderListItem = ({ order }: OrderListItemProps) => {
  const {
    orderId,
    status,
    charge,
    quantity,
    createdAt,
    link,
    userId,
    serviceId,
  } = order;

  return (
    <div className="grid grid-cols-8 gap-4 border-b border-gray-100 text-sm hover:bg-gray-50">
      <DataCell className="gap-4 p-4">
        <input type="checkbox" className="h-4 w-4" />
        <span className="text-gray-900">{orderId}</span>
      </DataCell>
      <DataCell className="p-4">
        {userId.firstName} {userId.lastName}
      </DataCell>
      <DataCell className="p-4">{formatAmount(charge)}</DataCell>
      <DataCell className="p-4">{quantity}</DataCell>
      <DataCell className="p-4">{serviceId?.serviceId ?? "-"}</DataCell>
      <DataCell className="p-4">
        <Badge status={status} />
      </DataCell>
      <DataCell className="truncate p-4 text-blue-600">{link}</DataCell>
      <DataCell className="p-4">
        {formatDateTime(createdAt, DateTimeFormat.MonthDateYear)}
      </DataCell>
    </div>
  );
};
