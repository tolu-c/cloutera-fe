"use client";

import { useGetPageTitle, useLocalStorage } from "@/hooks";
import { User } from "@/types";
import { CLOUTERA_USER } from "@/types/constants";
import { formatDateTime } from "@/utils";
import { DateTimeFormat } from "@/types/enums";
import { ChevronDownIcon, NotificationIcon } from "@/assets/icons";
import Image from "next/image";

export const AdminTopBar = () => {
  const pageTitle = useGetPageTitle();

  const { getItem } = useLocalStorage<User>(CLOUTERA_USER);
  const user = getItem();

  const today = new Date();
  return (
    <div className="flex h-20 w-full items-center justify-between gap-6 px-6 py-3">
      <div className="flex flex-col items-start gap-1">
        <h4 className="text-foundation-red-normal text-lg font-medium capitalize">
          {pageTitle}
        </h4>

        <p className="text-grey-10 text-xs">
          {formatDateTime(today, DateTimeFormat.DayDateMonthYear)}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-general-white relative flex size-7.5 items-center justify-center rounded-full">
          <NotificationIcon className="text-cloutera-black size-4" />

          <span className="bg-accent-1 absolute top-2 right-2.5 size-1 rounded-full" />
        </div>

        <div className="bg-foundation-red-white text-foundation-red-normal flex rounded-sm py-1 pr-3 pl-2 text-xs font-medium">
          Admin
        </div>

        <div className="flex items-center gap-6 px-6">
          <Image
            src="/images/user.svg"
            alt="user"
            width={24}
            height={24}
            className="object-cover object-center"
          />

          <div className="flex flex-col gap-1">
            <p className="text-cloutera-black text-base font-medium capitalize">
              {user?.firstName} {user?.lastName}
            </p>

            <p className="text-grey-10 max-w-50 truncate text-sm">
              {user?.email}
            </p>
          </div>

          <ChevronDownIcon className="text-cloutera-black size-4" />
        </div>
      </div>
    </div>
  );
};
