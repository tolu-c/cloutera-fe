import { GraphFilter } from "@/types/enums";
import { cn } from "@/utils/cn";

interface FilterButtonProps {
  label: string;
  value: GraphFilter;
  currentValue: GraphFilter;
  onChange: (value: GraphFilter) => void;
}
export const FilterButton = ({
  label,
  value,
  currentValue,
  onChange,
}: FilterButtonProps) => {
  return (
    <button
      className={cn(
        "flex flex-none cursor-pointer items-center justify-center rounded-lg px-3 py-2 text-xs",
        {
          "text-foundation-red-normal bg-white font-medium":
            value === currentValue,
          "text-foundation-grey-200 bg-transparent font-normal":
            value !== currentValue,
        },
      )}
      onClick={() => onChange(value)}
    >
      {label}
    </button>
  );
};
