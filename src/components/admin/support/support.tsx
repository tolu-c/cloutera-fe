"use client";

import { Fragment, useState } from "react";
import { AdminSupportTab } from "@/types/enums";
import { SupportPageTabs } from "@/components/admin/support/support-page-tabs";
import { Notification } from "@/components/admin/support/notification";
import { SupportFaq } from "@/components/admin/support/faq";

export const Support = () => {
  const [tab, setTab] = useState<AdminSupportTab>(
    AdminSupportTab.NotificationsAnnouncements,
  );

  const tabs = Object.values(AdminSupportTab);

  const panel = {
    [AdminSupportTab.NotificationsAnnouncements]: <Notification />,
    [AdminSupportTab.Faq]: <SupportFaq />,
  };

  return (
    <Fragment>
      <SupportPageTabs tabs={tabs} setActiveTab={setTab} currentTab={tab} />

      {panel[tab]}
    </Fragment>
  );
};
