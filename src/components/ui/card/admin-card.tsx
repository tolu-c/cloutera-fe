import { ComponentProps } from "react";
import { cn } from "@/utils/cn";

type AdminCardProps = ComponentProps<"div">;

export const AdminCard = ({
  className,
  children,
  ...props
}: AdminCardProps) => {
  return (
    <div
      className={cn(
        "stat-card flex w-full flex-col gap-6 rounded-lg bg-white px-4 py-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
