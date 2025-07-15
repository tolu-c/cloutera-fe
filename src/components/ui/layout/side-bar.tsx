"use client";

import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import ClouteraLogo from "../logo";
import { cn } from "@/utils/cn";
import {
  // AffiliatesIcon,
  FaqsIcon,
  FundsIcon,
  LogoutIcon,
  // MassOrderIcon,
  NewOrderIcon,
  OrdersIcon,
  ServicesIcon,
  SupportIcon,
} from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useLogout } from "@/mutations/auth/use-logout";

const sidebarLinks = [
  { label: "New Orders", href: "/order", icon: <NewOrderIcon /> },
  { label: "Services", href: "/services", icon: <ServicesIcon /> },
  { label: "Orders", href: "/order/history", icon: <OrdersIcon /> },
  { label: "Add Funds", href: "/add-funds", icon: <FundsIcon /> },
  { label: "FAQs", href: "/faq", icon: <FaqsIcon /> },
  { label: "Support", href: "/support", icon: <SupportIcon /> },
];

type SidebarProps = {
  open: boolean;
  close: VoidFunction;
  className?: string;
};

const Sidebar = ({ open, close, className }: SidebarProps) => {
  const pathname = usePathname();
  const { isPending, mutate: logout } = useLogout();

  const content = (
    <div className="fixed inset-0 z-[70] flex">
      <div
        className="absolute inset-0 z-[60] cursor-pointer bg-gray-600/70 backdrop-blur-[2px]"
        onClick={close}
      ></div>
      <div
        className={cn(
          "rounded-r-20 fixed top-0 bottom-0 left-0 z-[70] flex h-full w-66 flex-col gap-8 overflow-y-scroll bg-white px-6 py-8 shadow-lg transition-transform duration-300",
          {
            "translate-x-0": open,
            "-translate-x-full": !open,
          },
          className,
        )}
      >
        <div className="flex flex-col gap-8">
          <ClouteraLogo isBlack />
          <div className="flex items-center gap-5">
            <div className="border-foundation-red-white flex size-10 items-center justify-center rounded-full border-4 bg-white">
              <Image
                src="/images/user.svg"
                alt="user"
                width={24}
                height={24}
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-base font-medium text-gray-900">
                Oludotun
              </span>
              <div className="text-foundation-red-normal text-xs font-bold">
                #<span className="font-medium">3,000,000.00</span>
              </div>
            </div>
          </div>
        </div>
        <nav className="flex flex-1 flex-col gap-4">
          {sidebarLinks.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              onClick={close}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-xs font-medium text-[#A0AEC0]",
                {
                  "rounded-lg pr-5 pl-5 shadow-[0px_5px_14px_0px_#0000000D]":
                    pathname === href,
                },
              )}
            >
              <span
                className={cn(
                  "text-foundation-red-normal inline-flex size-7.5 items-center justify-center",
                  {
                    "bg-foundation-red-normal rounded-lg text-white":
                      pathname === href,
                  },
                )}
              >
                {icon}
              </span>
              {label}
            </Link>
          ))}

          <button
            onClick={async () => await logout()}
            disabled={isPending}
            className="flex items-center gap-3 px-4 py-3 text-xs font-medium text-[#A0AEC0]"
          >
            <LogoutIcon className="text-foundation-red-normal size-6" />
            Log out
          </button>
        </nav>
      </div>
    </div>
  );

  return open
    ? createPortal(content, document.getElementById("sidebar") as HTMLElement)
    : null;
};

export default Sidebar;
