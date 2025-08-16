import { OrderStatus, Status } from "@/types/enums";
import { cn } from "@/utils/cn";

interface BadgeProps {
  status: Status | OrderStatus;
}

export const Badge = ({ status }: BadgeProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full px-2 py-1 text-xs/3",
        {
          "bg-status-bg-green text-status-text-green":
            status === Status.Completed || status === Status.Successful,
          "text-foundation-blue-normal bg-foundation-blue-light":
            status === Status.Processing,
          "text-status-in-progress bg-[#FFB69780]":
            status === Status.InProgress || status === OrderStatus.PENDING,
          "bg-status-error-container text-status-error":
            status === Status.Cancelled,
        },
      )}
    >
      <span
        className={cn("size-2 rounded-full", {
          "bg-status-text-green":
            status === Status.Completed || status === Status.Successful,
          "bg-foundation-blue-normal": status === Status.Processing,
          "bg-status-in-progress":
            status === Status.InProgress || status === OrderStatus.PENDING,
          "bg-status-error": status === Status.Cancelled,
        })}
      />
      {status}
    </div>
  );
};
