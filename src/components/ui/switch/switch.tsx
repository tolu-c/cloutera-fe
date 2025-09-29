import { cn } from "@/utils/cn";

interface SwitchProps {
  isActive: boolean;
  toggleIsActive: () => void;
  label?: string;
}

export function Switch({ isActive, toggleIsActive, label }: SwitchProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "bg-grey-10 relative flex h-6 w-11 cursor-pointer items-center justify-start rounded-full px-0.5 transition-all duration-300 ease-in-out",
          {
            "bg-foundation-red-normal justify-end": isActive,
          },
        )}
        onClick={toggleIsActive}
      >
        <span className="bg-general-white absolute size-5 rounded-full transition-all duration-300 ease-in-out" />
      </div>
      {label && <p className="text-base font-medium text-slate-500">{label}</p>}
    </div>
  );
}
