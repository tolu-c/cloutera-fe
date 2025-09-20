"use client";

import { ChevronDownIcon } from "@/assets/icons";
import { OutlineCard } from "@/components/ui";
import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { useVerify2fa } from "@/mutations/profile";

interface TwoFactorAuthOTPVerificationProps {
  email: string; // Email to display for verification
  onVerifyAction: () => void;
  onBackAction: () => void;
}

export const TwoFactorAuthOTPVerification = ({
  email,
  onVerifyAction,
  onBackAction,
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

  const { mutateAsync: submit, isPending } = useVerify2fa();

  const handleVerify2fa = async () => {
    if (isOtpComplete) {
      await submit({
        secretCode: otp.join(""),
      });
      onVerifyAction();
    }
  };

  return (
    <div className="w-full p-6 lg:p-8">
      <OutlineCard>
        <div className="flex w-full items-center gap-8">
          <button
            className="text-foundation-red-normal flex items-center gap-0.5 rounded p-2 hover:underline focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onClick={onBackAction}
          >
            <ChevronDownIcon className="text-foundation-red-normal size-4 rotate-90" />
            <span className="text-[16px] leading-[120%] font-medium">Back</span>
          </button>
          <OutlineCard.Title title="2 Factor Authentication" />
        </div>
        <div className="flex flex-col gap-12 rounded-2xl border border-slate-100 px-12 py-10">
          <div className="flex flex-col items-start gap-6">
            <div className="fle flex-col gap-1">
              <p className="text-[20px] leading-[120%] font-semibold text-slate-800">
                OTP verification
              </p>
              <div className="flex flex-col gap-1 text-base text-slate-500">
                Enter the 6-digit code sent to your email
                <span className="font-semibold text-slate-800">{email}</span>
              </div>
            </div>

            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit !== "" ? "*" : ""}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  ref={(el) => {
                    if (el) {
                      inputRefs.current[index] = el;
                    }
                  }}
                  className="focus:border-foundation-red-normal focus:ring-foundation-red-normal-hover size-16 rounded-lg border-[1.5px] border-slate-200 text-center text-2xl font-bold transition-colors duration-200 focus:bg-slate-50 focus:outline-none"
                  style={{ caretColor: "transparent" }}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                />
              ))}
            </div>

            <div className="flex w-full items-center justify-center gap-2 text-base text-slate-500">
              Don&apos;t receive the code?{" "}
              <button
                className="text-foundation-red-normal font-medium underline transition-all duration-300 ease-in-out"
                onClick={() => {}}
              >
                Resend OTP
              </button>
            </div>
          </div>

          <button
            className="rounded-md bg-red-500 px-6 py-3 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handleVerify2fa}
            disabled={!isOtpComplete || isPending}
          >
            Verify
          </button>
        </div>
      </OutlineCard>
    </div>
  );
};
