import {
  AccountStatusIcon,
  EmptyWalletIcon,
  ShoppingCartIcon,
} from "@/assets/icons";
import { Card } from "@/components/ui";

export const OrdersAccountInfo = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 p-6 lg:w-auto lg:grid-cols-3">
      <Card
        title="Account Status"
        value="Level 1"
        icon={<AccountStatusIcon className="size-4 text-white" />}
        gradient
      />
      <Card
        title="Total Orders"
        value="45,000"
        icon={
          <ShoppingCartIcon className="text-foundation-red-normal size-4" />
        }
      />
      <Card
        title="Balance"
        value="₦45,000"
        icon={<EmptyWalletIcon className="text-foundation-red-normal size-4" />}
      />
    </div>
  );
};
