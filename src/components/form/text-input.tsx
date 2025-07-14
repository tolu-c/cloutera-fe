"use client";

import { ComponentProps, ReactNode, useState } from "react";
import Label from "./label";
import { EyeSlashIcon } from "@/assets/icons";
import { cn } from "@/utils/cn";

interface TextInputProps extends ComponentProps<"input"> {
  error?: string;
  label?: string;
  description?: string;
  icon?: ReactNode;
  rightSection?: ReactNode;
  width?: string;
}

const TextInput = ({
  name,
  label,
  type,
  description,
  error,
  icon,
  rightSection,
  className,
  width,
  ...props
}: TextInputProps) => {
  const [inputType, setInputType] = useState(type || "text");
  const isPassword = type === "password";

  const togglePasswordVisibility = () => {
    if (isPassword) {
      if (inputType === "password") {
        setInputType("text");
      } else {
        setInputType("password");
      }
    }
  };

  return (
    <div className="flex w-full flex-col items-start gap-1">
      {label && name && <Label name={name}>{label}</Label>}

      <div className="flex w-full flex-col items-start gap-2">
        <div className={cn("relative w-full", width)}>
          {icon && (
            <div className="absolute top-1/2 left-3 -translate-y-1/2">
              {icon}
            </div>
          )}

          <input
            id={name}
            type={inputType}
            name={name}
            className={cn(
              "border-grey-300 focus:border-grey-800 placeholder:text-placeholder h-13 w-full rounded-lg border bg-white p-4 text-sm/5 focus:ring-0 focus:outline-none",
              className,
              {
                "pr-10": rightSection,
                "pl-10": icon,
                "border-foundation-red-normal": error,
              },
            )}
            {...props}
          />

          {rightSection && (
            <div className="absolute top-1/2 right-3 -translate-y-1/2">
              {rightSection}
            </div>
          )}

          {isPassword && (
            <button
              type="button"
              className="absolute top-1/2 right-4 -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              <EyeSlashIcon className="text-color-grey-500 size-5" />
            </button>
          )}
        </div>
        {description && (
          <span className="text-xs/4 text-slate-300">{description}</span>
        )}
        {error && (
          <p className="text-foundation-red-normal mt-1 text-xs font-medium">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextInput;
