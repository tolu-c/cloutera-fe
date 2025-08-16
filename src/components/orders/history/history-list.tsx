import Link from "next/link";
import { HistoryListItem } from "@/components/orders/history/history-list-item";
import { OrderItem } from "@/types/orders.types";

interface HistoryListProps {
  orders: OrderItem[];
}
export const HistoryList = ({ orders }: HistoryListProps) => {
  if (!orders.length) {
    return (
      <p className="text-grey-800 text-center text-sm/6 font-medium">
        You have no orders now.{" "}
        <Link href="/order" className="text-foundation-red-normal">
          Place an order now.
        </Link>
      </p>
    );
  }

  return (
    <div className="flex w-full flex-col items-start gap-2">
      {orders.map((order) => (
        <HistoryListItem order={order} key={order._id} />
      ))}
    </div>
  );
};
