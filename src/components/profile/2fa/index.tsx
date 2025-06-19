import { ChevronDownIcon, PasswordCheckIcon } from "@/assets/icons";
import { OutlineCard } from "@/components/ui";

export const TwoFactorAuthentication = () => {
  return (
    <div className="w-full p-6 lg:p-8">
      <OutlineCard>
        <OutlineCard.Title title="2 Factor Authentication" />

        <div className="flex w-full items-center justify-between gap-7 bg-white px-4 py-3">
          <div className="flex flex-1 items-center gap-4">
            <span className="bg-foundation-red-light flex size-8 items-center justify-center rounded-full">
              <PasswordCheckIcon className="text-foundation-red-normal size-5" />
            </span>
            <p className="text-slate-700">Two-factor authentication</p>
          </div>

          <ChevronDownIcon className="size-6 -rotate-90 text-slate-400" />
        </div>
      </OutlineCard>
    </div>
  );
};
