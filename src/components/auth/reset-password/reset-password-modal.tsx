import React from "react";
import Image from "next/image";
import { Button, Modal } from "@/components/ui";

interface ResetPasswordModalProps {
  open: boolean;
  handleClose: () => void;
  onProceedToLogin: () => void;
}

const ResetPasswordModal = ({
  open,
  handleClose,
  onProceedToLogin,
}: ResetPasswordModalProps) => {
  return (
    <Modal open={open} close={handleClose}>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-col items-center gap-6">
            <Image
              src="/images/success.png"
              alt="success"
              width={100}
              height={100}
            />
            <div className="flex w-full flex-col items-center gap-2">
              <h2 className="text-2xl leading-7 font-medium">Success</h2>
              <p className="text-center text-base leading-7">
                Your password has been reset successfully.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <Button onClick={onProceedToLogin}>Proceed to Login</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ResetPasswordModal;
