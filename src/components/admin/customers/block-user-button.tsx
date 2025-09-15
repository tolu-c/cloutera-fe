"use client";

import { Fragment } from "react";
import { Button, ConfirmationModal, Modal, Popover } from "@/components/ui";
import { useDisclosure } from "@/hooks";
import { BlockCustomerModal } from "@/components/admin/customers/block-customer-modal";
import { useDeleteCustomer, useGetCustomer } from "@/queries/customers";
import { CancelIcon, ChevronDownIcon, DeleteIcon } from "@/assets/icons";
import { useRouter } from "next/navigation";
import { routes } from "@/utils/routes";

interface BlockUserButtonProps {
  customerId: string;
}

export const BlockUserButton = ({ customerId }: BlockUserButtonProps) => {
  const [blockUser, { open, close }] = useDisclosure(false);
  const [deleteUser, { open: openDeleteUser, close: closeDeleteUser }] =
    useDisclosure(false);
  const [actions, { toggle }] = useDisclosure(false);

  const router = useRouter();

  const { data } = useGetCustomer(customerId);
  const { mutateAsync: deleteCustomer, isPending } =
    useDeleteCustomer(customerId);

  async function handleDeleteCustomer() {
    await deleteCustomer().then(() => {
      router.push(routes.admin.customer);
    });
  }

  const user = data?.data;
  return (
    <Fragment>
      {user && (
        <Fragment>
          <Modal
            open={blockUser}
            close={close}
            className="lg:p-6"
            hideCloseIcon
          >
            <BlockCustomerModal
              customerId={customerId}
              customerName={`${user.firstName} ${user.lastName}`}
              successCallback={close}
              close={close}
              isCustomerBlocked={user.isBlocked}
            />
          </Modal>

          <ConfirmationModal
            open={deleteUser}
            close={closeDeleteUser}
            action={handleDeleteCustomer}
            actionText={"Delete"}
            title={"Delete User?"}
            description={`Are you sure you want to delete ${user.firstName} ${user.lastName} account?`}
            actionPending={isPending}
          />
        </Fragment>
      )}

      <div className="relative">
        <Button width="max" onClick={toggle}>
          Actions
          <ChevronDownIcon className="size-4 text-current" />
        </Button>

        <Popover isOpen={actions} close={toggle} className="top-14">
          <button
            className="flex w-full cursor-pointer items-center justify-between"
            onClick={open}
          >
            <p className="text-grey-text-950 text-sm">
              {user?.isBlocked ? "Unblock" : "Block"} User
            </p>

            <CancelIcon className="text-foundation-red-normal size-5" />
          </button>

          <button
            className="flex w-full cursor-pointer items-center justify-between"
            onClick={openDeleteUser}
          >
            <p className="text-foundation-red-normal text-sm">Delete Account</p>

            <DeleteIcon className="text-foundation-red-normal size-5" />
          </button>
        </Popover>
      </div>
    </Fragment>
  );
};
