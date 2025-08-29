"use client";

import Logo from "@/components/ui/logo";
import {
  CategoryIcon,
  CustomerIcon,
  Logout2Icon,
  ProfileIcon,
  SupportIcon,
} from "@/assets/icons";
import { routes } from "@/utils/routes";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { useDisclosure } from "@/hooks";
import { Fragment } from "react";
import { Modal } from "@/components/ui";
import { LogoutConfirmationModal } from "@/components/ui/layout/logout-confirmation-modal";

export const AdminSideBar = () => {
  const pathname = usePathname();
  const [logout, { open: openLogoutModal, close: closeLogoutModal }] =
    useDisclosure(false);

  const { dashboard, orders, services, support, customer } = routes.admin;

  const adminSidebarLinks = [
    { label: "Dashboard", link: dashboard, icon: <CategoryIcon /> },
    { label: "Services", link: services, icon: <ProfileIcon /> },
    { label: "Orders", link: orders, icon: <ProfileIcon /> },
    { label: "Comms & Support", link: support, icon: <SupportIcon /> },
    { label: "Customer Management", link: customer, icon: <CustomerIcon /> },
  ];

  return (
    <Fragment>
      <Modal open={logout} close={closeLogoutModal}>
        <LogoutConfirmationModal close={closeLogoutModal} />
      </Modal>

      <div className="bg-admin-black flex h-full w-full max-w-75 flex-none flex-col items-center gap-6 px-4 py-6 text-white">
        <Logo />

        <div className="flex w-full flex-col gap-2">
          {adminSidebarLinks.map(({ label, link, icon }) => (
            <Link
              href={link}
              key={link}
              className={cn(
                "flex h-12 items-center gap-3 rounded-lg bg-transparent px-3 py-3.5 text-white",
                {
                  "bg-foundation-red-normal": pathname === link,
                },
              )}
            >
              {icon}

              <p className="text-sm">{label}</p>
            </Link>
          ))}
        </div>

        <button
          onClick={openLogoutModal}
          className="flex h-10 w-full items-center gap-3 rounded-lg p-2 text-sm text-white"
        >
          <Logout2Icon className="text-foundation-red-normal size-6" />
          Log out
        </button>
      </div>
    </Fragment>
  );
};
