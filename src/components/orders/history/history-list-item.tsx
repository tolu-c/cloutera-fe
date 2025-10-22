import { Badge, DataCell } from "@/components/ui";
import { OrderItem } from "@/types/orders.types";
import { formatAmount, formatDateTime } from "@/utils";
import { DateTimeFormat } from "@/types/enums";

interface HistoryListItemProps {
  order: OrderItem;
}

export const HistoryListItem = ({ order }: HistoryListItemProps) => {
  const { orderId, link, charge, quantity, serviceId, status, updatedAt } =
    order;

  return (
    <div className="border-grey-200 flex w-full flex-col items-start rounded-lg bg-white shadow-sm lg:h-14 lg:flex-row lg:items-center lg:border-b lg:shadow-none">
      <DataCell className="basis-1/9 text-current">{orderId}</DataCell>
      <DataCell className="line-clamp-2 basis-2/9 text-current">
        {link}
      </DataCell>
      <DataCell className="basis-1/9 text-current">
        {formatAmount(charge)}
      </DataCell>
      <DataCell className="basis-1/9 text-current">{quantity}</DataCell>
      <DataCell className="basis-2/9 text-current">
        {serviceId?.name || ""}
      </DataCell>
      <DataCell className="basis-1/9 text-current">
        <Badge status={status} />
      </DataCell>
      <DataCell className="basis-1/9 text-current">
        {formatDateTime(updatedAt, DateTimeFormat.DayDateMonthYear)}
      </DataCell>
    </div>
  );
};
