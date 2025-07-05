"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";

const tabs = [
  "All",
  "Completed",
  "In Progress",
  "Processing",
  "Pending",
  "Canceled",
];

export const HistoryTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex h-11 w-max items-end gap-4 border-b border-[#E7EFFF]">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={cn(
            "text-grey-10 flex h-full items-center justify-center p-3 text-base/5",
            {
              "text-foundation-red-normal border-foundation-red-normal border-b-2":
                tab === activeTab,
            },
          )}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
