import { cn } from "@/utils/cn";
import { OrderStatus } from "@/types/enums";

interface HistoryTabsProps {
  tabs: OrderStatus[];
  setActiveTabAction: (tab: OrderStatus) => void;
  currentTab: OrderStatus;
}

export const HistoryTabs = ({
  tabs,
  setActiveTabAction,
  currentTab,
}: HistoryTabsProps) => {
  return (
    <div className="flex h-11 w-full items-end gap-4 overflow-x-auto border-b border-[#E7EFFF] lg:w-max">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={cn(
            "text-grey-10 flex h-full items-center justify-center p-3 text-base/5",
            {
              "text-foundation-red-normal border-foundation-red-normal border-b-2":
                tab === currentTab,
            },
          )}
          onClick={() => setActiveTabAction(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
