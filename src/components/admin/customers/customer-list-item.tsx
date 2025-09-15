"use client";

import Link from "next/link";
import { Fragment } from "react";

import { DataCell, Modal, Popover } from "@/components/ui";
import { CancelIcon, EllipsisIcon, EyeIcon } from "@/assets/icons";
import { useDisclosure } from "@/hooks";
import { routes } from "@/utils/routes";
import { BlockCustomerModal } from "@/components/admin/customers";
import { User } from "@/types";
import { formatDateTime } from "@/utils";
import { DateTimeFormat } from "@/types/enums";

interface CustomerListItemProps {
  user: User;
}

export const CustomerListItem = ({ user }: CustomerListItemProps) => {
  const { firstName, lastName, username, _id, status, createdAt, isBlocked } =
    user;

  const [openActions, { toggle, close }] = useDisclosure(false);
  const [blockUser, { open: openBlockUserModal, close: closeBlockUserModal }] =
    useDisclosure(false);

  const { singleCustomer } = routes.admin;

  const fullName = `${firstName} ${lastName}`;
  return (
    <Fragment>
      <Modal
        open={blockUser}
        close={closeBlockUserModal}
        className="lg:p-6"
        hideCloseIcon
      >
        <BlockCustomerModal
          customerId={_id}
          customerName={fullName}
          successCallback={closeBlockUserModal}
          close={closeBlockUserModal}
          isCustomerBlocked={isBlocked}
        />
      </Modal>

      <div className="grid w-full grid-cols-7 border-b border-gray-100 text-sm hover:bg-gray-50">
        <DataCell className="col-span-2 gap-4 p-4">
          <input type="checkbox" className="mr-2 size-4 rounded-sm" />
          <span>{fullName}</span>
        </DataCell>
        <DataCell className="p-4">{username}</DataCell>
        <DataCell className="p-4">
          <div>{status}</div>
        </DataCell>
        <DataCell className="col-span-2 p-4">
          {formatDateTime(createdAt, DateTimeFormat.MonthDateYear)}
        </DataCell>
        <DataCell className="p-4">
          <div className="relative cursor-pointer" onClick={toggle}>
            <EllipsisIcon className="text-grey-text-400 size-4" />

            <Popover isOpen={openActions} close={close}>
              <Link href={singleCustomer(_id)}>
                <div className="flex w-full cursor-pointer items-center justify-between pb-3">
                  <p className="text-grey-text-950 text-sm">View details</p>

                  <EyeIcon className="text-grey-text-400 size-5" />
                </div>
              </Link>

              <button
                className="flex w-full cursor-pointer items-center justify-between"
                onClick={openBlockUserModal}
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
