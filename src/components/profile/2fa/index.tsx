"use client";

import { ChevronDownIcon, PasswordCheckIcon } from "@/assets/icons";
import { OutlineCard } from "@/components/ui";
import React from "react";
import { useRouter } from "next/navigation";

export const TwoFactorAuthentication = () => {
  const router = useRouter(); // Initialize the router

  const handleTriggerClick = () => {
    router.push("/2fa"); // Navigate to the dedicated /2fa page
  };
  return (
    <div className="w-full p-6 lg:p-8">
      <OutlineCard>
        <OutlineCard.Title title="2 Factor Authentication" />
        <button
          className="flex w-full items-center justify-between gap-7 rounded-lg bg-white px-4 py-3 transition-colors duration-200 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          onClick={handleTriggerClick} // Calls the prop function on click
        >
          <div className="flex flex-1 items-center gap-4">
            <span className="bg-foundation-red-light-active flex size-8 items-center justify-center rounded-full">
              <PasswordCheckIcon className="size-5 text-red-500" />
            </span>
            <p className="text-slate-700">
              Set up Two-factor authentication{" "}
              <span className="font-semibold">(For Email)</span>
            </p>
          </div>

          <ChevronDownIcon className="size-6 -rotate-90 text-slate-400" />
        </button>
      </OutlineCard>
    </div>
  );
};
