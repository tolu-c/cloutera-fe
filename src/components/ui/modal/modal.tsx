import { ExitIcon } from "@/assets/icons";
import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

type ModalProps = PropsWithChildren & {
  open: boolean;
  close: VoidFunction;
  hideCloseIcon?: boolean;
  className?: string;
};

export const Modal = ({
  open,
  close,
  children,
  hideCloseIcon,
  className,
}: ModalProps) => {
  const content = (
    <div className="fixed inset-0 z-[70] flex items-end justify-center lg:items-center">
      <div
        className="absolute inset-0 z-[60] cursor-pointer bg-gray-600/70 backdrop-blur-[2px]"
        onClick={close}
      ></div>
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

  return open
    ? createPortal(content, document.getElementById("modal") as HTMLElement)
    : null;
};
