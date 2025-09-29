import { AppNotification } from "@/types/notifications.types";
import { Button, Modal } from "@/components/ui";
import { formatDateTime } from "@/utils";
import { DateTimeFormat } from "@/types/enums";
import { ApplicationNotificationIcon, ExitIcon } from "@/assets/icons";

interface NotificationItemModalProps {
  open: boolean;
  close: () => void;
  notification: AppNotification;
}

interface ContentProps {
  title: string;
  text: string;
}

function Content({ title, text }: ContentProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <p className="text-sm/4 text-slate-600">{title}</p>

      <p className="text-slate-800">{text}</p>
    </div>
  );
}

export function NotificationItemModal({
  open,
  close,
  notification,
}: NotificationItemModalProps) {
  const { title, message, createdAt, type } = notification;
  return (
    <Modal
      open={open}
      close={close}
      className="lg:w-160 lg:px-0 lg:pt-10 lg:pb-6"
      hideCloseIcon
    >
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col gap-4 px-8 pb-6">
          <div className="flex w-full items-center justify-between">
            <div className="bg-foundation-red-light flex size-12 items-center justify-center rounded-full">
              <ApplicationNotificationIcon className="text-foundation-red-normal size-6" />
            </div>

            <ExitIcon
              className="size-8 cursor-pointer text-gray-500"
              onClick={close}
            />
          </div>

          <p className="text-light-black text-2xl font-medium">
            Notification Information
          </p>
        </div>

        <div className="flex w-full flex-col gap-8 border-t border-slate-200 px-8 py-6">
          <div className="flex w-full gap-4">
            <Content
              title="Date"
              text={formatDateTime(createdAt, DateTimeFormat.DayDateMonthYear)}
            />
            <Content title="Title" text={title} />
          </div>

          <div className="flex w-full gap-4">
            <Content title="Channel" text={`Notification in the ${type}`} />
            <Content title="Target Audience" text="All" />
          </div>

          <Content title="Message" text={message} />
        </div>

        <div className="w-full border-t border-slate-200 px-8 pt-6">
          <Button onClick={close}>Okay</Button>
        </div>
      </div>
    </Modal>
  );
}
