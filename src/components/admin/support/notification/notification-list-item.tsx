"use client";

import { Fragment } from "react";
import { useDisclosure } from "@/hooks";
import { ConfirmationModal, DataCell, Popover } from "@/components/ui";
import { formatDateTime } from "@/utils";
import { DateTimeFormat } from "@/types/enums";
import { CancelIcon, EllipsisIcon, EyeIcon } from "@/assets/icons";
import { AppNotification } from "@/types/notifications.types";
import { useDeleteNotification } from "@/mutations/notifications";
import { NotificationItemModal } from "@/components/admin/support/notification/notification-item-modal";

interface NotificationListItemProps {
  notification: AppNotification;
}

export const NotificationListItem = ({
  notification,
}: NotificationListItemProps) => {
  const { _id, title, message, createdAt } = notification;

  const [viewNotification, { open, close }] = useDisclosure(false);
  const [
    deleteNotification,
    { open: openDeleteNotification, close: closeDeleteNotification },
  ] = useDisclosure(false);
  const [openActions, { toggle, close: closeActions }] = useDisclosure(false);

  const { isPending, mutateAsync: submit } = useDeleteNotification(_id);

  return (
    <Fragment>
      <ConfirmationModal
        open={deleteNotification}
        close={closeDeleteNotification}
        action={submit}
        actionText="Delete"
        title="Delete Notification"
        description="Are you sure your want to delete this notification?"
        actionPending={isPending}
      />

      <NotificationItemModal
        open={viewNotification}
        close={close}
        notification={notification}
      />

      <div className="grid w-full grid-cols-6 border-b border-gray-100 text-sm hover:bg-gray-50">
        <DataCell className="gap-4 truncate p-4">
          <input type="checkbox" className="mr-2 size-4 rounded-sm" />
          <span>{title}</span>
        </DataCell>
        <DataCell className="col-span-2 p-4">{message}</DataCell>
        <DataCell className="p-4">All</DataCell>
        <DataCell className="p-4">
          {formatDateTime(createdAt, DateTimeFormat.MonthDateYear)}
        </DataCell>
        <DataCell className="p-4">
          <div className="relative cursor-pointer" onClick={toggle}>
            <EllipsisIcon className="text-grey-text-400 size-4" />

            <Popover isOpen={openActions} close={closeActions}>
              <div
                className="flex w-full cursor-pointer items-center justify-between pb-3"
                onClick={open}
              >
                <p className="text-grey-text-950 text-sm">View details</p>

                <EyeIcon className="text-grey-text-400 size-5" />
              </div>

              <button
                className="flex w-full cursor-pointer items-center justify-between"
                onClick={openDeleteNotification}
              >
                <p className="text-foundation-red-normal text-sm">Delete</p>

                <CancelIcon className="text-foundation-red-normal size-5" />
              </button>
            </Popover>
          </div>
        </DataCell>
      </div>
    </Fragment>
  );
};
