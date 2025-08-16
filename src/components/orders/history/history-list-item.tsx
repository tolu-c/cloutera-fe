import { Badge, DataCell } from "@/components/ui";
import { OrderItem } from "@/types/orders.types";
import { formatAmount } from "@/utils";

interface HistoryListItemProps {
  order: OrderItem;
}

export const HistoryListItem = ({ order }: HistoryListItemProps) => {
  const { orderId, link, charge, quantity, serviceId, status, updatedAt } =
    order;

  return (
    <div className="border-grey-200 flex w-full flex-col items-start rounded-lg bg-white shadow-sm lg:h-14 lg:flex-row lg:items-center lg:border-b lg:shadow-none">
      <DataCell className="basis-1/9 text-current">{orderId}</DataCell>
      <DataCell className="basis-2/9 text-current">{link}</DataCell>
      <DataCell className="basis-1/9 text-current">
        {formatAmount(charge)}
      </DataCell>
      <DataCell className="basis-1/9 text-current">{quantity}</DataCell>
      <DataCell className="basis-2/9 text-current">{serviceId.name}</DataCell>
      <DataCell className="basis-1/9 text-current">
        <Badge status={status} />
      </DataCell>
      <DataCell className="basis-1/9 text-current">{updatedAt}</DataCell>
    </div>
  );
};
