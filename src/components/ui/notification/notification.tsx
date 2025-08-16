import { CloseIcon } from "@/assets/icons";
import { NotificationStatus } from "@/types/enums";
import { cn } from "@/utils/cn";

interface NotificationProps {
  message: string;
  status: NotificationStatus;
  close: () => void;
}

export const Notification = ({ message, status, close }: NotificationProps) => {
  return (
    <div className="border-grey-200 fixed top-4 right-4 z-[999999] flex h-11 w-112 items-center gap-4 overflow-hidden rounded-sm border bg-white shadow-xs">
      <div
        className={cn("h-full w-1.5 rounded-l-sm", {
          "bg-error": status === NotificationStatus.Error,
          "bg-success-base": status === NotificationStatus.Success,
        })}
      />

      <div className="flex w-full flex-1 items-center gap-3 px-4 py-3">
        <p
          className={cn("flex-1 text-sm/5", {
            "text-error": status === NotificationStatus.Error,
            "text-success-base": status === NotificationStatus.Success,
          })}
        >
          {message}
        </p>

        <div
          className={cn("flex h-5 flex-none items-center border-l pl-3", {
            "border-error": status === NotificationStatus.Error,
            "border-success-base": status === NotificationStatus.Success,
          })}
        >
          <button onClick={close}>
            <CloseIcon className="size-5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};
