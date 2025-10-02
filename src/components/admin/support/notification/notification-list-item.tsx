"use client";

import { Fragment } from "react";
import { useDisclosure } from "@/hooks";
import { ConfirmationModal, DataCell, Modal, Popover } from "@/components/ui";
import { formatDateTime } from "@/utils";
import { DateTimeFormat } from "@/types/enums";
import { CancelIcon, EllipsisIcon, EyeIcon } from "@/assets/icons";

interface NotificationListItemProps {
  notification: {
    id: string;
    title: string;
    message: string;
    recipient: string;
    date: string;
    tab: string;
  };
}

export const NotificationListItem = ({
  notification,
}: NotificationListItemProps) => {
  const [viewNotification, { open, close }] = useDisclosure(false);
  const [
    deleteNotification,
    { open: openDeleteNotification, close: closeDeleteNotification },
  ] = useDisclosure(false);
  const [openActions, { toggle, close: closeActions }] = useDisclosure(false);

  return (
    <Fragment>
      <ConfirmationModal
        open={deleteNotification}
        close={closeDeleteNotification}
        action={() => {}}
        actionText={"Delete"}
        title={"Delete Notification"}
        description={"Are you sure your want to delete this notification?"}
      />

      <Modal open={viewNotification} close={close}>
        {notification.message}
      </Modal>

      <div className="grid w-full grid-cols-6 border-b border-gray-100 text-sm hover:bg-gray-50">
        <DataCell className="gap-4 truncate p-4">
          <input type="checkbox" className="mr-2 size-4 rounded-sm" />
          <span>{notification.title}</span>
        </DataCell>
        <DataCell className="col-span-2 p-4">{notification.message}</DataCell>
        <DataCell className="p-4">{notification.recipient}</DataCell>
        <DataCell className="p-4">
          {formatDateTime(notification.date, DateTimeFormat.MonthDateYear)}
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
                <p className="text-foundation-red-normal text-sm">
                  Disable Access
                </p>

                <CancelIcon className="text-foundation-red-normal size-5" />
              </button>
            </Popover>
          </div>
        </DataCell>
      </div>
    </Fragment>
  );
};
