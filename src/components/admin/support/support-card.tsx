import { AdminCard } from "@/components/ui";
import { ComponentType } from "react";
import { formatNumber } from "@/utils";
import { cn } from "@/utils/cn";

interface SupportCardProps {
  title: string;
  value: number;
  className: string;
  Icon: ComponentType<{ className: string }>;
}
export const SupportCard = ({
  title,
  value,
  className,
  Icon,
}: SupportCardProps) => {
  return (
    <AdminCard className="h-41 items-center justify-center rounded-lg">
      <div className="flex w-full items-center gap-3">
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-full",
            className,
          )}
        >
          <Icon className="size-6 text-current" />
        </div>

        <div className="flex flex-1 flex-col items-start gap-1">
          <p className="text-light-black text-base font-light">{title}</p>

          <p className="text-light-black text-xl font-bold">
            {formatNumber(value)}
          </p>
        </div>
      </div>
    </AdminCard>
  );
};
