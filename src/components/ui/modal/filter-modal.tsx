import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { ExitIcon, FilterIcon } from "@/assets/icons";

interface FilterModalProps {
  children: ReactNode;
  open: boolean;
  close: () => void;
}

export const FilterModal = ({ children, open, close }: FilterModalProps) => {
  const content = (
    <div className="fixed inset-0 z-[90] flex items-end justify-center lg:items-center">
      <div
        className="absolute inset-0 z-[60] cursor-pointer bg-gray-600/70 backdrop-blur-[2px]"
        onClick={close}
      ></div>

      <div className="relative z-[70] flex w-full flex-col items-start gap-6 rounded-[16px] bg-white px-5 py-9 lg:w-[436px] lg:p-12">
        <button className="absolute -top-14 right-0 flex size-11 items-center justify-center rounded-xl bg-white shadow-md">
          <ExitIcon className="size-8 cursor-pointer" onClick={close} />
        </button>

        <div className="bg-grey-text-50 flex size-11 items-center justify-center rounded-xl">
          <FilterIcon className="text-foundation-red-normal size-5" />
        </div>

        <div className="flex w-full flex-col items-start gap-3">
          <p className="text-grey-text-950 text-sm/5 font-semibold">
            Filter by
          </p>

          {children}
        </div>
      </div>
    </div>
  );

  return open
    ? createPortal(
        content,
        document.getElementById("filter-modal") as HTMLElement,
      )
    : null;
};
