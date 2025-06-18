"use client";

import { ExitIcon } from "@/assets/icons";
import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

type ModalProps = PropsWithChildren & {
  open: boolean;
  close: VoidFunction;
  hideCloseIcon?: boolean;
  className?: string;
};

const Modal = ({
  open,
  close,
  children,
  hideCloseIcon,
  className,
}: ModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center lg:items-center">
      {/* Backdrop */}
      <div
        className="bg-secondary-600/70 absolute inset-0 z-[60] cursor-pointer backdrop-blur-[2px]"
        onClick={close}
      ></div>

      {/* Modal Content */}
      <div
        className={cn(
          "relative z-[70] flex w-full flex-col items-center rounded-[16px] bg-white px-5 py-9 lg:w-[436px] lg:p-12",
          className,
        )}
      >
        {!hideCloseIcon && (
          <div className="flex w-full justify-end">
            <ExitIcon className="size-8 cursor-pointer" onClick={close} />
          </div>
        )}
        <div className="flex w-full flex-col items-center">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
