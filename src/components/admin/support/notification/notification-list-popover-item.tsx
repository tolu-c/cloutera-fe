import { AppNotification } from "@/types/notifications.types";
import { useMarkNotificationAsRead } from "@/mutations/notifications";
import { formatDateTime } from "@/utils";
import { DateTimeFormat } from "@/types/enums";

interface NotificationListPopoverItemProps {
  notification: AppNotification;
  isNew?: boolean;
}

export function NotificationListPopoverItem({
  notification,
  isNew,
}: NotificationListPopoverItemProps) {
  const { _id, title, message, createdAt } = notification;

  const { mutateAsync: markAsRead } = useMarkNotificationAsRead(_id);

  return (
    <button
      onClick={markAsRead}
      className="border-foundation-red-light flex w-full cursor-pointer flex-col gap-2 rounded-lg border p-4"
    >
      <div className="flex justify-between">
        <p className="text-foundation-grey-200 text-xs/5">
          {formatDateTime(createdAt, DateTimeFormat.MonthDateYear)}
        </p>

        {isNew && (
          <p className="bg-foundation-red-light text-foundation-red-normal flex h-4 w-10 items-center justify-center rounded-full px-2 py-1 text-[10px] font-semibold">
            New
          </p>
        )}
      </div>

      <p className="text-foundation-red-normal line-clamp-2 text-sm/5 font-semibold">
        {title}
      </p>

      <p className="text-xs/5 text-green-900">{message}</p>
    </button>
  );
}
