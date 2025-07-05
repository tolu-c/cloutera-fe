import { Order } from "@/types";
import { Badge, DataCell } from "@/components/ui";

interface HistoryListItemProps {
  order: Order;
}

export const HistoryListItem = ({ order }: HistoryListItemProps) => {
  const { id, link, charge, quantity, service, status, date } = order;

  return (
    <div className="border-grey-200 flex w-full flex-col items-start rounded-lg bg-white shadow-sm lg:h-14 lg:flex-row lg:items-center lg:border-b lg:shadow-none">
      <DataCell className="basis-1/9 text-current">{id}</DataCell>
      <DataCell className="basis-2/9 text-current">{link}</DataCell>
      <DataCell className="basis-1/9 text-current">{charge}</DataCell>
      <DataCell className="basis-1/9 text-current">{quantity}</DataCell>
      <DataCell className="basis-2/9 text-current">{service}</DataCell>
      <DataCell className="basis-1/9 text-current">
        <Badge status={status} />
      </DataCell>
      <DataCell className="basis-1/9 text-current">{date}</DataCell>
    </div>
  );
};
