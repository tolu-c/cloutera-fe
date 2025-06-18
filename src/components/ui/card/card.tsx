import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps {
  title: string;
  value: string;
  gradient?: boolean;
  icon: ReactNode;
  extraIcon?: ReactNode;
}

const Card = ({ title, value, gradient, icon, extraIcon }: CardProps) => {
  return (
    <div
      className={cn(
        "flex h-30 min-w-68 flex-col gap-2 rounded-3xl bg-white p-6",
        {
          "card--gradient text-white": gradient,
          "shadow-5 text-grey-900": !gradient,
        },
      )}
    >
      <div className="flex w-full items-start gap-2">
        <p className="flex-1 text-base">{title}</p>

        <span>{icon}</span>
      </div>

      <div className="flex w-full items-start gap-2">
        <p className="flex-1 text-[32px] leading-10 font-semibold">{value}</p>
        {extraIcon}
      </div>
    </div>
  );
};

export default Card;
