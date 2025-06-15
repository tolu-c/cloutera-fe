import { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "h-14 flex items-center justify-center gap-4 rounded-lg w-full text-base font-semibold",
  {
    variants: {
      state: {
        primary: "bg-foundation-red-normal text-white",
        outline: "border-[1.5px] text-grey-700 border-grey-300",
      },
      radius: {
        lg: "rounded-lg",
        md: "rounded-sm",
      },
    },
    defaultVariants: {
      state: "primary",
      radius: "lg",
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  className,
  children,
  state,
  radius,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ state, radius, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
