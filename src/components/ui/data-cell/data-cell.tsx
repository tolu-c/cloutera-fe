import { ComponentProps } from "react";
import { cn } from "@/utils/cn";

type DataCellProps = ComponentProps<"span">;

export const DataCell = ({ children, className, ...props }: DataCellProps) => {
  return (
    <span
      className={cn(
        "text-cloutera-black flex w-full items-center px-4 py-2 text-sm/5",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
