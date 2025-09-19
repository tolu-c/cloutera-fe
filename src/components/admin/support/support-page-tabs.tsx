import { AdminSupportTab } from "@/types/enums";
import { cn } from "@/utils/cn";

interface SupportPageTabsProps {
  tabs: AdminSupportTab[];
  setActiveTab: (tab: AdminSupportTab) => void;
  currentTab: AdminSupportTab;
}

export const SupportPageTabs = ({
  tabs,
  setActiveTab,
  currentTab,
}: SupportPageTabsProps) => {
  return (
    <div className="flex items-start gap-2">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={cn(
            "shadow-2 text-grey-text-400 flex h-9 cursor-pointer items-center justify-center rounded-sm bg-transparent px-3 py-1.5",
            {
              "bg-foundation-red-normal stat-card font-medium text-white":
                currentTab === tab,
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
