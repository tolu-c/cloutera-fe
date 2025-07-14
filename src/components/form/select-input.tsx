import { ComponentProps } from "react";
import Label from "@/components/form/label";
import { LabelValuePair } from "@/types";

interface SelectInputProps extends ComponentProps<"select"> {
  error?: string;
  label?: string;
  options: LabelValuePair[];
}

export const SelectInput = ({
  name,
  label,
  error,
  options,
  ...props
}: SelectInputProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-1">
      {label && name && <Label name={name}>{label}</Label>}

      <div className="flex w-full flex-col items-start gap-2">
        <select
          id={name}
          name={name}
          className="border-grey-300 h-13 w-full rounded-lg border bg-white p-4"
          {...props}
        >
          {options.map(({ label, value }) => (
            <option key={value} value={value} className="p-2">
              {label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-foundation-red-normal mt-1 text-xs font-medium">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};
