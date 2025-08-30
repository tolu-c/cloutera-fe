import { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { formatAmount, formatNumber } from "@/utils";
import { StatusArrowIcon } from "@/assets/icons";
import { AdminCard } from "@/components/ui";

interface StatCardProps {
  title: string;
  value: number;
  asCurrency?: boolean;
  icon: {
    icon: ReactNode;
    color: string;
  };
  active: number;
  lastWeek: {
    status: "up" | "down";
    percentage: number;
  };
}

export const StatCard = ({
  title,
  value,
  asCurrency,
  icon,
  active,
  lastWeek,
}: StatCardProps) => {
  return (
    <AdminCard>
      <div className="flex w-full items-center gap-3">
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-full",
            icon.color,
          )}
        >
          {icon.icon}
        </div>

        <div className="flex flex-col items-start gap-1">
          <p className="text-light-black font-light">{title}</p>

          <p className="text-light-black text-lg font-bold">
            {asCurrency ? formatAmount(value ?? 0) : formatNumber(value ?? 0)}
          </p>
        </div>
      </div>

      <div className="flex items-start justify-between">
        <div className="flex flex-col items-start gap-1">
          <p className="text-dark-bottom text-xs font-light">last 7 days</p>

          <div className="flex items-center gap-1">
            <span className="bg-success size-1.5 rounded-full" />

            <p className="text-light-black text-sm font-bold">
              {formatNumber(active ?? 0)}{" "}
              <span className="font-normal">active</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1">
          <p className="text-dark-bottom text-xs font-light">vs last week</p>

          <div
            className={cn("flex items-center gap-0.5", {
              "text-error": lastWeek.status === "down",
              "text-success": lastWeek.status === "up",
            })}
          >
            <StatusArrowIcon
              className={cn("size-6 text-current", {
                "rotate-90": lastWeek.status === "down",
              })}
            />

            <p className="text-sm font-medium">{lastWeek.percentage}%</p>
          </div>
        </div>
      </div>
    </AdminCard>
  );
};
