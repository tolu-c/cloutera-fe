"use client";

import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import ClouteraLogo from "../logo";
import { cn } from "@/utils/cn";

const sidebarLinks = [
  { label: "New Orders", href: "/new-orders" },
  { label: "Services", href: "/services" },
  { label: "Orders", href: "/orders" },
  { label: "Add Funds", href: "/add-funds" },
  { label: "Affiliates", href: "/affiliates" },
  { label: "Mass Order", href: "/mass-order" },
  { label: "FAQs", href: "/faqs" },
  { label: "Support", href: "/support" },
  { label: "Log Out", href: "/logout" },
];

type SidebarProps = {
  open: boolean;
  close: VoidFunction;
  hideCloseIcon?: boolean;
  className?: string;
};

const Sidebar = ({ open, close, className }: SidebarProps) => {
  const pathname = usePathname();

  const content = (
    <div className="fixed inset-0 z-[70] flex">
      <div
        className="absolute inset-0 z-[60] cursor-pointer bg-gray-600/70 backdrop-blur-[2px]"
        onClick={close}
      ></div>
      <div
        className={cn(
          "rounded-r-20 fixed top-0 bottom-0 left-0 z-[70] flex h-full w-[320px] flex-col gap-8 overflow-y-scroll bg-white px-6 py-8 shadow-lg transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
          className,
        )}
      >
        <div className="flex flex-col gap-8">
          <ClouteraLogo />
          <div className="flex items-center gap-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
              <span className="text-xl text-gray-400">👤</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-gray-900">
                Oludotun
              </span>
              <span className="text-xs text-gray-500">#3, 000, 000.00</span>
            </div>
          </div>
        </div>
        <nav className="flex flex-1 flex-col gap-4">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className={cn(
                  "text-gray-70 flex items-center gap-3 px-4 py-3 text-xs font-medium transition-colors",
                  isActive &&
                    "rounded-lg bg-white shadow-[0px_5px_14px_0px_#0000000D]",
                )}
              >
                <span className="inline-block h-4 w-4 rounded bg-gray-300" />
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );

  return open
    ? createPortal(content, document.getElementById("sidebar") as HTMLElement)
    : null;
};

export default Sidebar;
