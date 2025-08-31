import { cn } from "@/utils/cn";

interface DividerProps {
  vertical?: boolean;
  className?: string;
}
export const Divider = ({ vertical, className }: DividerProps) => {
  return (
    <div
      className={cn("bg-grey-200", className, {
        "w-[1px] self-stretch": vertical,
        "h-[1px] w-full": !vertical,
      })}
    />
  );
};
