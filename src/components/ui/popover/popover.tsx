"use client";

import { ReactNode, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

interface PopoverProps {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
}
export const Popover = ({ isOpen, close, children }: PopoverProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside([dropdownRef], close, isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={dropdownRef}
      className="absolute top-5 right-0 z-50 flex w-60 flex-col gap-4 rounded-lg border border-[#F0F1F1] bg-white p-4"
    >
      {children}
    </div>
  );
};
