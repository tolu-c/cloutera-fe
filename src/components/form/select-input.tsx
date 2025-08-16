import { ComponentProps } from "react";
import Label from "@/components/form/label";
import { LabelValuePair } from "@/types";
import { ArrowDownIcon } from "@/assets/icons";

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
        <div className="relative flex w-full">
          <select
            id={name}
            name={name}
            className="border-grey-300 h-13 w-full appearance-none rounded-lg border bg-white p-4"
            {...props}
          >
            {options.map(({ label, value }) => (
              <option key={value} value={value} className="p-2">
                {label}
              </option>
            ))}
          </select>
          <ArrowDownIcon className="text-grey-500 absolute top-1/2 right-4 size-4 -translate-y-1/2" />
        </div>
        {error && (
          <p className="text-foundation-red-normal mt-1 text-xs font-medium">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};
