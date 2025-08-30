import { ComponentProps } from "react";

import { cn } from "@/utils/cn";

type PageSectionProps = ComponentProps<"div">;

export const PageSection = ({
  className,
  children,
  ...props
}: PageSectionProps) => {
  return (
    <div
      className={cn("flex w-full flex-col items-start gap-6", className)}
      {...props}
    >
      {children}
    </div>
  );
};
