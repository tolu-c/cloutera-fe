import { Popover } from "@/components/ui";
import { ExitIcon } from "@/assets/icons";
import { AppNotification } from "@/types/notifications.types";
import { NotificationListPopoverItem } from "@/components/admin/support/notification/notification-list-popover-item";

interface NotificationListPopoverProps {
  open: boolean;
  close: () => void;
  notifications: AppNotification[];
}

export function NotificationListPopover({
  open,
  close,
  notifications,
}: NotificationListPopoverProps) {
  return (
    <Popover
      isOpen={open}
      close={close}
      className="w-94 gap-0 border-none p-0 shadow-lg"
    >
      <div className="bg-foundation-red-normal flex w-full items-center justify-between px-6 py-5">
        <p className="text-sm font-bold text-white">
          What’s New on Cloutera Hub
        </p>

        <ExitIcon
          className="size-6 cursor-pointer text-white"
          onClick={close}
        />
      </div>

      <div className="flex max-h-80 w-full flex-col gap-2 overflow-y-auto p-3">
        {notifications.length === 0 && (
          <p className="text-sm font-medium text-gray-900">
            You&apos;re all caught up for now!
          </p>
        )}

        {notifications.map((notification, index) => (
          <NotificationListPopoverItem
            key={notification._id}
            notification={notification}
            isNew={index === 0}
          />
        ))}
      </div>
    </Popover>
  );
}
