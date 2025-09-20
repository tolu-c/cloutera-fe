import { ChevronDownIcon } from "@/assets/icons";
import { OutlineCard } from "@/components/ui";
import React, { useState } from "react";

interface TwoFactorAuthEmailSelectionProps {
  email: string;
  onContinue: (email: string) => void;
  onBack: () => void;
}

export const TwoFactorAuthEmailSelection = ({
  email,
  onContinue,
  onBack,
}: TwoFactorAuthEmailSelectionProps) => {
  const [selectedOption, setSelectedOption] = useState<
    "registered" | "different"
  >("registered");
  const [customEmail, setCustomEmail] = useState<string>("");

  const handleContinue = () => {
    if (selectedOption === "registered") {
      onContinue(email);
    } else if (selectedOption === "different" && customEmail) {
      onContinue(customEmail);
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
            <ChevronDownIcon className="size-6 rotate-90 text-slate-400" />
            <span className="font-medium">Back</span>
          </button>
          <OutlineCard.Title title="2 Factor Authentication" />
        </div>
        <div className="flex max-w-[589px] flex-col gap-6 rounded-lg border border-gray-300 p-6">
          <p className="text-2xl font-medium text-slate-800">
            We&apos;ll send a one-time code via email.
          </p>

          <div className="space-y-4">
            {/* Registered Email Option */}
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white p-4 transition-colors duration-200 hover:border-blue-500">
              <span className="text-slate-700">
                Use your registered email{" "}
                <span className="font-semibold">({email})</span>
              </span>
              <span
                className="border-foundation-red-normal ml-2 flex h-4 w-4 items-center justify-center rounded-full border-2"
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

            {/* Different Email Option */}
            <label className="bg-foundation-red-white flex h-[123px] cursor-pointer flex-col rounded-lg border border-gray-300 p-4 transition-colors duration-200 hover:border-blue-500">
              <div className="flex w-full items-center justify-between">
                <span className="text-slate-700">
                  Use a different email address
                </span>
                <span
                  className="border-foundation-red-normal flex h-4 w-4 items-center justify-center rounded-full border-2"
                  onClick={() => setSelectedOption("different")}
                  tabIndex={0}
                  role="radio"
                  aria-checked={selectedOption === "different"}
                  aria-label="Use different email address"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setSelectedOption("different");
                  }}
                >
                  {selectedOption === "different" && (
                    <span className="bg-foundation-red-normal block h-2 w-2 rounded-full" />
                  )}
                </span>
              </div>
              <input
                type="radio"
                name="emailOption"
                value="different"
                checked={selectedOption === "different"}
                onChange={() => setSelectedOption("different")}
                className="sr-only"
                tabIndex={-1}
              />
              {selectedOption === "different" && (
                <input
                  type="email"
                  className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
                  placeholder="Enter email address"
                  value={customEmail}
                  onChange={(e) => setCustomEmail(e.target.value)}
                />
              )}
            </label>
          </div>

          <button
            className="rounded-md bg-red-500 px-6 py-3 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handleContinue}
            disabled={selectedOption === "different" && !customEmail}
          >
            Continue
          </button>
        </div>
      </OutlineCard>
    </div>
  );
};
