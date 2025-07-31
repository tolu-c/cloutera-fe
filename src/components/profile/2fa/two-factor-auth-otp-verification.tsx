"use client";

import { ChevronDownIcon } from "@/assets/icons";
import { OutlineCard } from "@/components/ui";
import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";

interface TwoFactorAuthOTPVerificationProps {
  email: string; // Email to display for verification
  onVerify: () => void;
  onBack: () => void;
}

export const TwoFactorAuthOTPVerification = ({
  email,
  onVerify,
  onBack,
}: TwoFactorAuthOTPVerificationProps) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]); // 6-digit OTP
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) || value === "") {
      // Allow only single digit or empty
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if a digit is entered
      if (value !== "" && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move to previous input on Backspace if current is empty or at start
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, otp.length);
    const newOtp = pasteData
      .split("")
      .slice(0, otp.length)
      .map((char) => (/^[0-9]$/.test(char) ? char : ""));
    setOtp(newOtp.concat(Array(otp.length - newOtp.length).fill(""))); // Fill remaining with empty
    // Focus on the last filled input or the last input
    const lastFilledIndex = newOtp.length > 0 ? newOtp.length - 1 : 0;
    inputRefs.current[lastFilledIndex]?.focus();
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

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

        <p className="font-semibold text-slate-700">OTP verification</p>
        <p className="text-slate-700">
          Enter the 6-digit code sent to your email
        </p>
        <p className="font-semibold text-slate-700">{email}</p>

        <div className="flex justify-center space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              // FIX: Ensure the ref callback returns void
              ref={(el) => {
                if (el) {
                  // Ensure element exists before assigning
                  inputRefs.current[index] = el;
                }
              }}
              className="h-12 w-10 rounded-md border-2 border-gray-300 text-center text-2xl font-bold transition-colors duration-200 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              style={{ caretColor: "transparent" }} // Hide blinking cursor for cleaner look
            />
          ))}
        </div>

        <div className="text-center text-sm text-gray-600">
          Don&apos;t receive the code?{" "}
          <button className="rounded text-blue-600 hover:underline focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Resend OTP
          </button>
        </div>

        <button
          className="rounded-md bg-red-500 px-6 py-3 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          onClick={onVerify}
          disabled={!isOtpComplete}
        >
          Verify
        </button>
      </OutlineCard>
    </div>
  );
};
