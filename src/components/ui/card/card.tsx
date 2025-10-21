import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps {
  title: string;
  value: string;
  gradient?: boolean;
  icon: ReactNode;
  extraIcon?: ReactNode;
  className?: string;
  amountSize?: string;
}

const Card = ({
  title,
  value,
  gradient,
  icon,
  extraIcon,
  className,
  amountSize,
}: CardProps) => {
  return (
    <div
      className={cn(
        "flex h-23 w-full flex-col gap-2 rounded-3xl bg-white p-6 lg:h-30 lg:min-w-68",
        className,
        {
          "card--gradient text-white": gradient,
          "shadow-5 text-grey-900": !gradient,
        },
      )}
    >
      <div className="flex w-full items-start gap-2">
        <p className="flex-1 text-xs lg:text-base">{title}</p>

        <span>{icon}</span>
      </div>

      <div className="flex w-full items-start justify-between gap-2">
        <p
          className={cn(
            "max-w-3/4 flex-1 text-base/6 font-semibold lg:text-[32px] lg:leading-10",
            amountSize,
          )}
        >
          {value}
        </p>
        {extraIcon}
      </div>
    </div>
  );
};

export default Card;
