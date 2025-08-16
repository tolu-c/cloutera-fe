import { EmptyWalletIcon } from "@/assets/icons";
import { Card } from "../ui";

export const FundBalance = () => {
  return (
    <div>
      <Card
        title="Balance"
        value="₦45,000"
        icon={<EmptyWalletIcon className="text-foundation-red-normal size-4" />}
      />
    </div>
  );
};
