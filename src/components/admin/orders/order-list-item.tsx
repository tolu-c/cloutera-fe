import { OrderItem } from "@/types/orders.types";
import { Badge } from "@/components/ui";
import { formatAmount } from "@/utils";

interface OrderListItemProps {
  order: OrderItem;
}
export const OrderListItem = ({ order }: OrderListItemProps) => {
  const { orderId, status, charge, quantity, createdAt, link, userId } = order;

  return (
    <div className="grid grid-cols-8 gap-4 border-b border-gray-100 px-4 py-3 text-sm hover:bg-gray-50">
      <div className="flex items-center">
        <input type="checkbox" className="mr-2 h-4 w-4" />
        <span className="text-gray-900">{orderId}</span>
      </div>
      <div className="flex items-center">
        <span className="truncate text-gray-900">{userId}</span>
      </div>
      <div className="flex items-center font-medium text-gray-900">
        {formatAmount(charge)}
      </div>
      <div className="flex items-center text-gray-900">{quantity}</div>
      <div className="flex items-center truncate text-gray-600">service</div>
      <div className="flex items-center">
        <Badge status={status} />
      </div>
      <div className="flex items-center truncate text-blue-600">{link}</div>
      <div className="flex items-center text-xs text-gray-600">{createdAt}</div>
    </div>
  );
};
