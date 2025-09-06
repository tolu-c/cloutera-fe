import { Button } from "@/components/ui";
import { ErrorInfoIcon } from "@/assets/icons";
import { useToggleBlockCustomer } from "@/queries/customers";

interface BlockCustomerModalProps {
  customerId: string;
  customerName: string;
  successCallback: () => void;
  close: () => void;
  isCustomerBlocked: boolean;
}
export const BlockCustomerModal = ({
  successCallback,
  customerId,
  customerName,
  close,
  isCustomerBlocked,
}: BlockCustomerModalProps) => {
  const { isPending, mutateAsync: submit } = useToggleBlockCustomer(customerId);

  const handleBlockCustomer = () => {
    submit().then(() => {
      successCallback();
    });
  };

  return (
    <div className="flex w-full flex-col items-start gap-6">
      <div className="bg-error-50 flex size-11 items-center justify-center rounded-xl">
        <ErrorInfoIcon className="text-error-500 size-5" />
      </div>

      <div className="flex w-full flex-col gap-3">
        <p className="text-grey-text-950 text-sm font-semibold">
          {isCustomerBlocked ? "Unblock" : "Block"} User ?
        </p>

        <p className="text-grey-text-950 text-sm/5">
          Are you sure you want to {isCustomerBlocked ? "unblock" : "block"}{" "}
          <span className="font-medium">{customerName}</span> access? They will{" "}
          {isCustomerBlocked ? null : "no longer "}
          be able to log in .
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        <Button state="light" onClick={close}>
          Cancel
        </Button>

        <Button
          onClick={handleBlockCustomer}
          state={isCustomerBlocked ? "outline" : "primary"}
          disabled={isPending}
        >
          Disable User
        </Button>
      </div>
    </div>
  );
};
