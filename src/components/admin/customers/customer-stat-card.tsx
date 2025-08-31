import { CustomerStat } from "@/types/enums";
import { AdminCard } from "@/components/ui";
import { cn } from "@/utils/cn";
import { PeopleIcon } from "@/assets/icons";
import { formatNumber } from "@/utils";

interface CustomerStatCardProps {
  variant: CustomerStat;
  value: number;
}

export const CustomerStatCard = ({ variant, value }: CustomerStatCardProps) => {
  return (
    <AdminCard className="h-41 items-center justify-center">
      <div className="flex w-full items-center gap-3">
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-full",
            {
              "bg-foundation-red-white text-foundation-red-normal":
                variant === CustomerStat.Total,
              "bg-success-light text-emerald-700":
                variant === CustomerStat.Active,
              "bg-pending-bg text-pending": variant === CustomerStat.Inactive,
            },
          )}
        >
          <PeopleIcon className="size-6 text-current" />
        </div>

        <div className="flex flex-1 flex-col items-start gap-1">
          <p className="text-light-black text-base font-light">{variant}</p>

          <p className="text-light-black text-xl font-bold">
            {formatNumber(value ?? 0)}
          </p>
        </div>
      </div>
    </AdminCard>
  );
};
