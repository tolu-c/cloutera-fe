"use client";

import { Fragment, useState } from "react";
import { SupportCard } from "@/components/admin/support";
import { ApplicationNotificationIcon } from "@/assets/icons";
import { Searchbar } from "@/components/form";
import { AdminCard, Button, DataCell } from "@/components/ui";
import { AdminNotification } from "@/types/enums";
import { cn } from "@/utils/cn";
import { NotificationListItem } from "@/components/admin/support/notification/notification-list-item";
import Link from "next/link";
import { routes } from "@/utils/routes";
import { NotificationFilterForm } from "./notification-filter-form";

export const Notification = () => {
  const [activeTab, setActiveTab] = useState<AdminNotification>(
    AdminNotification.Sent,
  );
  const [filters, setFilters] = useState<{
    tab: AdminNotification | "";
    recipient: string;
  }>({
    tab: "",
    recipient: "",
  });
  const [searchValue, setSearchValue] = useState("");
  const tabs = Object.values(AdminNotification);

  // Example recipient options, replace with real data as needed
  const recipientOptions = [
    { label: "All", value: "" },
    { label: "User", value: "user" },
    { label: "Admin", value: "admin" },
  ];
  const tabOptions = tabs.map((tab) => ({ label: tab, value: tab }));

  function handleApplyFilter({
    tab,
    recipient,
  }: {
    tab: AdminNotification | "";
    recipient: string;
  }) {
    setFilters({ tab, recipient });
    if (tab) setActiveTab(tab as AdminNotification);
  }

  function handleClearFilter() {
    setFilters({ tab: "", recipient: "" });
    setActiveTab(AdminNotification.Sent);
  }

  const notifications = [
    {
      id: "1",
      title: "Security Alert",
      message: "Dear customers please setup your..",
      recipient: "All",
      date: "2022-08-20 16:17:34",
      tab: AdminNotification.Sent,
    },
    {
      id: "2",
      title: "System Update",
      message: "System will be down for maintenance.",
      recipient: "Admin",
      date: "2022-09-01 10:00:00",
      tab: AdminNotification.Scheduled,
    },
    // ...more notifications
  ];

  // Filtering logic
  const filteredNotifications = notifications.filter((n) => {
    const matchesTab = !filters.tab || n.tab === filters.tab;
    const matchesRecipient =
      !filters.recipient || n.recipient === filters.recipient;
    const matchesSearch =
      !searchValue ||
      n.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      n.message.toLowerCase().includes(searchValue.toLowerCase());
    return matchesTab && matchesRecipient && matchesSearch;
  });

  return (
    <Fragment>
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        <SupportCard
          title="Total Notifications Sent"
          value={100000}
          className="bg-foundation-red-white text-foundation-red-normal"
          Icon={ApplicationNotificationIcon}
        />
        <SupportCard
          title="Total Notifications Scheduled"
          value={40000}
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
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex w-full justify-between">
            <Searchbar
              onSendSearchValue={setSearchValue}
              filterComponent={
                <NotificationFilterForm
                  tabOptions={tabOptions}
                  recipientOptions={recipientOptions}
                  clearFilterAction={handleClearFilter}
                  applyFilterAction={handleApplyFilter}
                  closeAction={() => {}}
                />
              }
            />
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
            {/* loading */}
            <div className="h-full">
              {filteredNotifications.map((notification) => (
                <NotificationListItem
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </div>
            {/* pagination */}
          </div>
        </AdminCard>
      </div>
    </Fragment>
  );
};
