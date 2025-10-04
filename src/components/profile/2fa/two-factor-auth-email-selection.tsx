import { ChevronDownIcon } from "@/assets/icons";
import { OutlineCard } from "@/components/ui";
import React, { useState } from "react";

interface TwoFactorAuthEmailSelectionProps {
  email: string;
  onContinue: (email: string) => void;
  onBack: () => void;
  isPending: boolean;
}

export const TwoFactorAuthEmailSelection = ({
  email,
  onContinue,
  onBack,
  isPending,
}: TwoFactorAuthEmailSelectionProps) => {
  const [selectedOption, setSelectedOption] = useState<
    "registered" | "different"
  >("registered");
  const [customEmail] = useState<string>("");

  const handleContinue = () => {
    if (selectedOption === "registered") {
      onContinue(email);
    } else {
      console.error("Please enter a valid email address.");
    }
  };

  return (
    <div className="w-full p-6 lg:p-8">
      <OutlineCard>
        <div className="flex w-full items-center gap-8">
          <button
            className="text-foundation-red-normal flex items-center gap-0.5 rounded p-2 hover:underline focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onClick={onBack}
          >
            <ChevronDownIcon className="text-foundation-red-normal size-4 rotate-90" />
            <span className="text-[16px] leading-[120%] font-medium">Back</span>
          </button>
          <OutlineCard.Title title="2 Factor Authentication" />
        </div>

        <div className="flex w-full flex-col gap-6 rounded-xl border border-gray-200 p-2 lg:p-6">
          <p className="text-sm font-medium text-slate-800 lg:text-2xl">
            We&apos;ll send a one-time code via email.
          </p>

          <div className="space-y-4">
            {/* Registered Email Option */}
            <label
              className={`border-foundation-red-light focus:border-foundation-red-normal hover:border-foundation-red-normal flex cursor-pointer items-center justify-between gap-2 rounded-lg border p-4 transition-colors duration-200 ${
                selectedOption === "registered"
                  ? "bg-foundation-red-white"
                  : "bg-white"
              }`}
            >
              <span className="text-grey-900 w-full text-sm lg:text-base">
                Use your registered email{" "}
                <span className="font-medium">({email})</span>
              </span>
              <span
                className="border-foundation-red-normal flex size-4 flex-none items-center justify-center rounded-full border-2"
                onClick={() => setSelectedOption("registered")}
                tabIndex={0}
                role="radio"
                aria-checked={selectedOption === "registered"}
                aria-label="Use registered email"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    setSelectedOption("registered");
                }}
              >
                {selectedOption === "registered" && (
                  <span className="bg-foundation-red-normal block h-2 w-2 rounded-full" />
                )}
              </span>
              <input
                type="radio"
                name="emailOption"
                value="registered"
                checked={selectedOption === "registered"}
                onChange={() => setSelectedOption("registered")}
                className="sr-only"
                tabIndex={-1}
              />
            </label>
          </div>

          <button
            className="rounded-md bg-red-500 px-6 py-3 text-[#F6F9FF] hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handleContinue}
            disabled={
              isPending || (selectedOption === "different" && !customEmail)
            }
          >
            Continue
          </button>
        </div>
      </OutlineCard>
    </div>
  );
};
