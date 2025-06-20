"use client";

import { ComponentProps } from "react";
import Label from "./label";

interface TextareaInputProps extends ComponentProps<"textarea"> {
  error?: string;
  label?: string;
  description?: string;
}

export const TextareaInput = ({
  name,
  label,
  description,
  error,
  ...props
}: TextareaInputProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-1">
      {label && name && <Label name={name}>{label}</Label>}

      <div className="flex w-full flex-col items-start gap-2">
        <textarea
          id={name}
          name={name}
          className="border-grey-300 placeholder:text-placeholder h-32 w-full resize-none rounded-lg border bg-white p-4 text-sm/5"
          {...props}
        />
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
