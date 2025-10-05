"use client";

import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import ClouteraLogo from "../logo";
import { cn } from "@/utils/cn";
import {
  BriefCaseIcon,
  FaqsIcon,
  FundsIcon,
  LogoutIcon,
  NewOrderIcon,
  OrdersIcon,
  SupportIcon,
} from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useDisclosure, useLocalStorage } from "@/hooks";
import { Fragment } from "react";
import { Modal } from "../modal";
import { LogoutConfirmationModal } from "./logout-confirmation-modal";
import { useGetAccountStatus } from "@/queries/account";
import { formatAmount } from "@/utils";
import { User } from "@/types";
import { CLOUTERA_USER } from "@/types/constants";
import { routes } from "@/utils/routes";

const sidebarLinks = [
  { label: "New Orders", href: "/order", icon: <NewOrderIcon /> },
  { label: "Services", href: "/services", icon: <BriefCaseIcon /> },
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

  const [logout, { open: openLogoutModal, close: closeLogoutModal }] =
    useDisclosure(false);

  const { getItem } = useLocalStorage<User>(CLOUTERA_USER);
  const user = getItem();
  const { data } = useGetAccountStatus();
  const account = data?.data;

  const content = (
    <Fragment>
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
              <Link
                href={routes.customer.profile}
                className="flex flex-col gap-0.5"
              >
                <span className="text-base font-medium text-gray-900">
                  {user?.firstName || ""}
                </span>
                <div className="text-foundation-red-normal text-xs font-bold">
                  <span className="font-medium">
                    {formatAmount(account?.accountBalance || 0)}
                  </span>
                </div>
              </Link>
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
              onClick={openLogoutModal}
              className="flex cursor-pointer items-center gap-3 px-4 py-3 text-xs font-medium text-[#A0AEC0]"
            >
              <LogoutIcon className="text-foundation-red-normal size-6" />
              Log out
            </button>
          </nav>
        </div>
      </div>

      <Modal open={logout} close={closeLogoutModal}>
        <LogoutConfirmationModal close={closeLogoutModal} />
      </Modal>
    </Fragment>
  );

  return open
    ? createPortal(content, document.getElementById("sidebar") as HTMLElement)
    : null;
};

export default Sidebar;
