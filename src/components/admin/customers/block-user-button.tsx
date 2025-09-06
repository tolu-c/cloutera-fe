"use client";

import { Fragment } from "react";
import { Button, Modal } from "@/components/ui";
import { useDisclosure } from "@/hooks";
import { BlockCustomerModal } from "@/components/admin/customers/block-customer-modal";

interface BlockUserButtonProps {
  customerId: string;
}

export const BlockUserButton = ({ customerId }: BlockUserButtonProps) => {
  const [blockUser, { open, close }] = useDisclosure(false);

  return (
    <Fragment>
      <Modal open={blockUser} close={close} className="lg:p-6" hideCloseIcon>
        <BlockCustomerModal
          customerId={customerId}
          customerName="Tolu Adeyemo"
          successCallback={close}
          close={close}
          isCustomerBlocked={false}
        />
      </Modal>

      <Button width="max" onClick={open}>
        Block User
      </Button>
    </Fragment>
  );
};
