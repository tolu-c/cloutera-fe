import { OrderStat } from "@/types/enums";
import { AdminCard } from "@/components/ui";
import { formatNumber } from "@/utils";
import { cn } from "@/utils/cn";
import { ShoppingCartIcon } from "@/assets/icons";

interface OrderCardProps {
  variant: OrderStat;
  value: number;
}
export const OrderCard = ({ variant, value }: OrderCardProps) => {
  return (
    <AdminCard className="h-41 items-center justify-center">
      <div className="flex w-full items-center gap-3">
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-full",
            {
              "bg-foundation-red-white text-foundation-red-normal":
                variant === OrderStat.All,
              "bg-success-light text-emerald-700":
                variant === OrderStat.Completed,
              "bg-pending-bg text-pending": variant === OrderStat.Pending,
              "bg-error/8 text-error": variant === OrderStat.Cancelled,
            },
          )}
        >
          <ShoppingCartIcon className="size-6 text-current" />
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
