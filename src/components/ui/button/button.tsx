import { ComponentProps, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "h-13 p-3 flex items-center cursor-pointer justify-center gap-4 rounded-lg flex-none w-full text-base font-semibold transition-transform duration-200 active:translate-y-1 disabled:cursor-not-allowed",
  {
    variants: {
      state: {
        primary:
          "bg-foundation-red-normal disabled:bg-foundation-red-normal/40 text-white",
        outline:
          "border-[1.5px] text-foundation-red-normal border-foundation-red-normal",
        light: "text-error-500 bg-error-50",
      },
      radius: {
        lg: "rounded-lg",
        md: "rounded-sm",
      },
      width: {
        full: "w-full",
        max: "w-max",
      },
    },
    defaultVariants: {
      state: "primary",
      radius: "lg",
      width: "full",
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode;
}

const Button = ({
  className,
  children,
  state,
  radius,
  width,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ state, radius, width, className }))}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
