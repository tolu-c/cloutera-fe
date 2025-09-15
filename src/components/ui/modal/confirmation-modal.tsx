import { Button, Modal } from "@/components/ui";
import { ErrorInfoIcon } from "@/assets/icons";

interface ConfirmationModalProps {
  open: boolean;
  close: () => void;
  action: () => void;
  actionText: string;
  title: string;
  description: string;
  actionPending?: boolean;
}

export const ConfirmationModal = ({
  open,
  close,
  action,
  actionText,
  title,
  description,
  actionPending,
}: ConfirmationModalProps) => {
  function handleAction() {
    action();
    close();
  }

  return (
    <Modal open={open} close={close} className="lg:p-6">
      <div className="flex w-full flex-col items-start gap-6">
        <div className="bg-error-50 flex size-11 items-center justify-center rounded-xl">
          <ErrorInfoIcon className="text-error-500 size-5" />
        </div>

        <div className="flex w-full flex-col gap-3">
          <p className="text-grey-text-950 text-sm font-semibold">{title}</p>

          <p className="text-grey-text-950 text-sm/5">{description}</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
          <Button state="light" onClick={close}>
            Cancel
          </Button>

          <Button onClick={handleAction} disabled={actionPending}>
            {actionText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
