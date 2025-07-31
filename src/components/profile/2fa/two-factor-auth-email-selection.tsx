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
        <div className="flex items-center gap-8">
          <button
            className="flex items-center gap-0.5 rounded p-2 text-blue-600 hover:underline focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onClick={onBack}
          >
            <ChevronDownIcon className="size-6 rotate-90 text-slate-400" />
            <span className="font-medium">Back</span>
          </button>
          <OutlineCard.Title title="2 Factor Authentication" />
        </div>

        <p className="text-slate-700">
          We&apos;ll send a one-time code via email.
        </p>

        <div className="space-y-4">
          {/* Registered Email Option */}
          <label className="flex cursor-pointer items-center rounded-lg border border-gray-300 bg-white p-4 transition-colors duration-200 hover:border-blue-500">
            <input
              type="radio"
              name="emailOption"
              value="registered"
              checked={selectedOption === "registered"}
              onChange={() => setSelectedOption("registered")}
              className="form-radio h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-3 text-slate-700">
              Use your registered email{" "}
              <span className="font-semibold">({email})</span>
            </span>
          </label>

          {/* Different Email Option */}
          <label className="flex cursor-pointer flex-col rounded-lg border border-gray-300 bg-white p-4 transition-colors duration-200 hover:border-blue-500">
            <div className="flex items-center">
              <input
                type="radio"
                name="emailOption"
                value="different"
                checked={selectedOption === "different"}
                onChange={() => setSelectedOption("different")}
                className="form-radio h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 text-slate-700">
                Use a different email address
              </span>
            </div>
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
      </OutlineCard>
    </div>
  );
};
