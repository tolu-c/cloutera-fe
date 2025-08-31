import { AdminCard, Card, Divider, Info } from "@/components/ui";
import {
  AccountStatusIcon,
  EmptyWalletIcon,
  ShoppingCartIcon,
  VerifiedTickIcon,
} from "@/assets/icons";
import { formatAmount } from "@/utils";

interface CustomerInformationProps {
  customerId: string;
}

export const CustomerInformation = ({
  customerId,
}: CustomerInformationProps) => {
  console.log(customerId);
  return (
    <AdminCard className="gap-3 p-4">
      <p className="text-grey-text-950 text-lg/6 font-medium">
        Customer Information
      </p>

      <Divider />

      <div className="flex w-full items-center gap-3">
        <div className="flex grow flex-col items-center gap-3 py-3">
          <div className="bg-foundation-red-light relative flex size-16 items-center justify-center rounded-full">
            <p className="text-grey-900 text-xl/7 font-medium">PA</p>

            <VerifiedTickIcon className="text-success-500 absolute right-0 bottom-0 z-50 size-5" />
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="text-grey-900 font-semibold">Pamela Anderson</p>

            <div className="bg-success-25 text-success-500 flex items-center justify-center rounded-sm px-4 py-1 text-xs">
              Active
            </div>
          </div>
        </div>

        <Divider vertical />

        <div className="grid grow grid-cols-1 content-start items-start gap-3 px-4 py-3 lg:grid-cols-2">
          <Info title="Username" value="webdevtolu" />
          <Info title="Email" value="webdevtolu@protonmail.com" />
          <Info title="Created On" value="Apr 12, 2025" />
        </div>

        <Divider vertical />

        <div className="flex grow flex-col gap-3">
          <Card
            title="Account Status"
            value={`Level 1`}
            icon={<AccountStatusIcon className="size-4 text-white" />}
            gradient
          />

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Card
              title="Total Orders"
              value={formatAmount(45000)}
              icon={
                <ShoppingCartIcon className="text-foundation-red-normal size-4" />
              }
              className="min-w-full p-4 shadow-none"
              amountSize="text-lg/7"
            />
            <Card
              title="Balance"
              value={formatAmount(45000)}
              icon={
                <EmptyWalletIcon className="text-foundation-red-normal size-4" />
              }
              className="min-w-full shadow-none"
              amountSize="text-lg/7"
            />
          </div>
        </div>
      </div>

      <Divider />
    </AdminCard>
  );
};
