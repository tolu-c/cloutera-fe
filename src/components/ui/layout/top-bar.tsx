"use client";

import {
  ChevronDownIcon,
  DashboardFillIcon,
  NotificationIcon,
} from "@/assets/icons";
import { Fragment, useState } from "react";
import Sidebar from "./side-bar";
import Image from "next/image";
import { useDisclosure, useGetPageTitle, useLocalStorage } from "@/hooks";
import { CLOUTERA_USER } from "@/types/constants";
import { User } from "@/types";
import Link from "next/link";
import { useGetNotifications } from "@/queries/notifications";
import { NotificationListPopover } from "@/components/admin/support/notification";

const TopBar = () => {
  const pageTitle = useGetPageTitle();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewNotifications, { open, close }] = useDisclosure();

  const { data } = useGetNotifications();

  const { getItem } = useLocalStorage<User>(CLOUTERA_USER);
  const user = getItem();

  return (
    <Fragment>
      <div className="lg:bg-foundation-red-normal flex h-12 w-full items-center justify-center bg-white lg:h-22">
        <div className="flex h-10 w-full max-w-7xl items-center justify-between px-6 lg:px-2">
          <div className="flex items-center gap-4">
            <button
              className="cursor-pointer"
              onClick={() => setSidebarOpen(true)}
            >
              <DashboardFillIcon className="text-foundation-red-normal size-6 lg:text-white" />
            </button>
            <p className="text-xl text-black capitalize lg:text-white">
              {pageTitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative" onClick={open}>
              <NotificationIcon className="size-4 text-black lg:text-white" />

              {data?.data && data.data.length > 0 && (
                <span className="bg-accent-1 absolute top-2 right-2.5 size-1 rounded-full" />
              )}

              <NotificationListPopover
                open={viewNotifications}
                close={close}
                notifications={data?.data || []}
              />
            </div>

            <div className="hidden items-center gap-2 px-3 lg:flex">
              <p className="text-base/5 font-medium text-white capitalize">
                {user?.firstName}
              </p>
              <Link
                href="/profile"
                className="flex cursor-pointer items-center gap-2"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-white">
                  <Image
                    src="/images/user.svg"
                    alt="user"
                    width={24}
                    height={24}
                    className="object-cover object-center"
                  />
                </div>
                <ChevronDownIcon className="size-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Sidebar open={sidebarOpen} close={() => setSidebarOpen(false)}></Sidebar>
    </Fragment>
  );
};

export default TopBar;
