import { useHandleLogout } from "@/hooks/useHandleLogout";
import { Button } from "../button";

interface LogoutConfirmationModalProps {
  close: () => void;
}

export const LogoutConfirmationModal = ({
  close,
}: LogoutConfirmationModalProps) => {
  const { handleLogout, isPending } = useHandleLogout();

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl font-medium text-slate-800">Logout</p>
        <p className="text-base text-slate-600">
          Are you sure you want to Logout?
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        <Button state="light" onClick={close}>
          Cancel
        </Button>

        <Button disabled={isPending} onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
