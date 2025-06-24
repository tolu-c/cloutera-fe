"use client";

import {
  ChevronDownIcon,
  DashboardFillIcon,
  NotificationIcon,
} from "@/assets/icons";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import Sidebar from "./side-bar";
import Image from "next/image";

const TopBar = () => {
  const pathname = usePathname();
  const pageTitle = pathname.split("/").filter(Boolean).pop() || "";
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Fragment>
      <div className="bg-foundation-red-normal flex h-22 w-full items-center justify-center">
        <div className="flex h-10 w-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)}>
              <DashboardFillIcon className="size-6 text-white" />
            </button>
            <p className="text-xl text-white capitalize">{pageTitle}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <NotificationIcon className="size-4 text-white" />
            </div>
            <div className="flex items-center gap-2 px-3">
              <p className="text-base/5 font-medium text-white">Emmanuel</p>
              <div className="flex items-center gap-2">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar open={sidebarOpen} close={() => setSidebarOpen(false)}></Sidebar>
    </Fragment>
  );
};

export default TopBar;
