import { ComponentProps } from "react";
import { cn } from "@/utils/cn";

type OutlineCardProps = ComponentProps<"div">;

export const OutlineCard = ({
  children,
  className,
  ...props
}: OutlineCardProps) => {
  return (
    <div
      className={cn(
        "border-fade-light flex w-full flex-col items-start gap-8 rounded-xl border bg-white p-6 px-4 lg:px-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const OutlineCardTitle = ({ title }: { title: string }) => (
  <h3 className="text-neutral-black text-xl font-semibold">{title}</h3>
);

OutlineCard.Title = OutlineCardTitle;
