"use client";

import { Fragment, useMemo, useState } from "react";
import { SupportCard } from "@/components/admin/support";
import { ApplicationNotificationIcon } from "@/assets/icons";
import { Searchbar } from "@/components/form";
import {
  AdminCard,
  Button,
  DataCell,
  Loading,
  Pagination,
} from "@/components/ui";
import { AdminNotification } from "@/types/enums";
import { cn } from "@/utils/cn";
import { NotificationListItem } from "@/components/admin/support/notification/notification-list-item";
import Link from "next/link";
import { routes } from "@/utils/routes";
import {
  useGetNotificationStats,
  useGetScheduledNotifications,
  useGetSentNotifications,
} from "@/queries/notifications";
import { usePagination } from "@/hooks";

const tabs = Object.values(AdminNotification);

export const Notification = () => {
  const [activeTab, setActiveTab] = useState<AdminNotification>(
    AdminNotification.Sent,
  );
  const [search, setSearch] = useState<string | undefined>(undefined);

  const { page, limit, handlePageChange, handleLimitChange } = usePagination();

  const { data, isLoading } = useGetNotificationStats();

  const shouldFetchScheduled = activeTab === AdminNotification.Scheduled;
  const shouldFetchSent = activeTab === AdminNotification.Sent;

  const {
    data: scheduledNotifications,
    isLoading: scheduledNotificationsLoading,
  } = useGetScheduledNotifications(
    { search, page, limit },
    shouldFetchScheduled,
  );
  const { data: sentNotifications, isLoading: sentNotificationsLoading } =
    useGetSentNotifications(
      {
        search,
        page,
        limit,
      },
      shouldFetchSent,
    );

  const { notificationsData, notificationsPagination, notificationsLoading } =
    useMemo(() => {
      const loading = shouldFetchScheduled
        ? scheduledNotificationsLoading
        : sentNotificationsLoading;

      const data =
        activeTab === AdminNotification.Sent
          ? sentNotifications?.data || []
          : scheduledNotifications?.data || [];

      const pagination =
        activeTab === AdminNotification.Sent
          ? sentNotifications?.pagination
          : scheduledNotifications?.pagination;

      return {
        notificationsData: data,
        notificationsPagination: pagination,
        notificationsLoading: loading,
      };
    }, [
      activeTab,
      sentNotifications,
      scheduledNotifications,
      sentNotificationsLoading,
      scheduledNotificationsLoading,
      shouldFetchScheduled,
    ]);

  function handleTabChange(tab: AdminNotification) {
    setActiveTab(tab);
    setSearch("");
  }

  console.log("Scheduled Notifications:", scheduledNotifications);

  return (
    <Fragment>
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        {isLoading && <Loading />}
        <SupportCard
          title="Total Notifications Sent"
          value={data?.data.sent}
          className="bg-foundation-red-white text-foundation-red-normal"
          Icon={ApplicationNotificationIcon}
        />
        <SupportCard
          title="Total Notifications Scheduled"
          value={data?.data.scheduled}
          className="bg-pending-bg text-pending"
          Icon={ApplicationNotificationIcon}
        />
      </div>

      <div className="flex w-full flex-col gap-4">
        <p className="text-light-black text-xl font-semibold">
          All Notifications
        </p>

        <AdminCard>
          <div className="bg-grey-text-50 flex w-max items-center rounded-lg px-1 py-0.5">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={cn(
                  "text-grey-text-400 flex cursor-pointer rounded-lg bg-none px-3 py-1.5 font-medium",
                  {
                    "text-grey-text-800 tab-shadow bg-white": tab === activeTab,
                  },
                )}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex w-full justify-between">
            <Searchbar onSendSearchValue={setSearch} />

            <Link href={routes.admin.newNotification}>
              <Button width="max">Send New Notification</Button>
            </Link>
          </div>

          <div className="flex h-full w-full flex-col">
            <div className="border-grey-text-200 w-full border-b bg-[#F7F7F7]">
              <div className="text-grey-text-950 grid grid-cols-6 text-base font-semibold">
                <DataCell className="gap-4 p-4">
                  <input type="checkbox" className="size-4 rounded-sm" />
                  <span>Title</span>
                </DataCell>
                <DataCell className="col-span-2 p-4">Message</DataCell>
                <DataCell className="p-4">Recipient</DataCell>
                <DataCell className="p-4">Date</DataCell>
                <DataCell className="p-4">Action</DataCell>
              </div>
            </div>

            {notificationsLoading && <Loading />}
            {/* loading */}
            <div className="h-full">
              {!notificationsLoading &&
                notificationsData &&
                notificationsData.map((notification) => (
                  <NotificationListItem
                    key={notification._id}
                    notification={notification}
                  />
                ))}
            </div>

            {/* pagination */}
            {notificationsPagination && (
              <Pagination
                current={notificationsPagination.current}
                pages={notificationsPagination.pages}
                limit={notificationsPagination.limit}
                hasPrev={notificationsPagination.hasPrev}
                hasNext={notificationsPagination.hasNext}
                onLimitChange={handleLimitChange}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </AdminCard>
      </div>
    </Fragment>
  );
};
