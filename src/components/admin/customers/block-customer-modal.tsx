import { Button } from "@/components/ui";
import { ErrorInfoIcon } from "@/assets/icons";

interface BlockCustomerModalProps {
  customerId: string;
  customerName: string;
  successCallback: () => void;
  close: () => void;
}
export const BlockCustomerModal = ({
  successCallback,
  customerId,
  customerName,
  close,
}: BlockCustomerModalProps) => {
  const handleBlockCustomer = () => {
    console.log("blocking customer", customerId);
    successCallback();
  };

  return (
    <div className="flex w-full flex-col items-start gap-6">
      <div className="bg-error-50 flex size-11 items-center justify-center rounded-xl">
        <ErrorInfoIcon className="text-error-500 size-5" />
      </div>

      <div className="flex w-full flex-col gap-3">
        <p className="text-grey-text-950 text-sm font-semibold">Block User ?</p>

        <p className="text-grey-text-950 text-sm/5">
          Are you sure you want to block{" "}
          <span className="font-medium">{customerName}</span> access? They will
          no longer be able to log in .
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        <Button state="light" onClick={close}>
          Cancel
        </Button>

        <Button onClick={handleBlockCustomer}>Disable User</Button>
      </div>
    </div>
  );
};
