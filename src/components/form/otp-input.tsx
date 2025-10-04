"use client";

import {
  ClipboardEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/utils/cn";

type OtpInputProps = {
  length: number;
  action: (otp: string) => void;
};
export const OtpInput = ({ length, action }: OtpInputProps) => {
  const [otpValues, setOtpValues] = useState<Array<string>>(
    Array(length).fill(""),
  );

  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array(length).fill(null),
  );

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // on delete / backspace
  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (event.key === "Backspace") {
      const newValues = [...otpValues];

      // If the current input is empty and it's not the first input
      if (index > 0 && newValues[index] === "") {
        newValues[index - 1] = "";
        setOtpValues(newValues);
        inputRefs.current[index - 1]?.focus();
        action(newValues.join(""));
      }
      // If the current input is not the first input and has a value
      else if (index === otpValues.length - 1 && newValues[index] !== "") {
        newValues[index] = "";
        setOtpValues(newValues);
        action(newValues.join(""));
      }
    }
  };

  // onChange
  const handleOtpChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (index < length - 1 && value !== "") {
      inputRefs.current[index + 1]?.focus();
    }
    action(newOtpValues.join(""));
  };

  // on paste
  const handleOtpPaste = (
    event: ClipboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    event.preventDefault();

    const pasteData = event.clipboardData
      .getData("text")
      .slice(0, length - index);
    const newValues = [...otpValues];

    for (let i = 0; i < pasteData.length; i++) {
      newValues[index + i] = pasteData[i];
      if (index + i < length - 1) {
        inputRefs.current[index + i + 1]?.focus();
      }
    }

    setOtpValues(newValues);
    action(newValues.join(""));
  };

  return (
    <div className="flex w-full flex-none items-center gap-2 lg:gap-4">
      {otpValues.map((value, index) => (
        <input
          key={`otp-input-${index}`}
          ref={(element) => {
            inputRefs.current[index] = element;
          }}
          type="text"
          inputMode="numeric"
          placeholder="*"
          maxLength={1}
          value={value}
          onChange={(e) => handleOtpChange(index, e.target.value)}
          onPaste={(e) => handleOtpPaste(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={cn(
            "focus:border-foundation-red-normal flex size-12 items-center justify-center rounded-lg border-[1.5px] border-slate-200 text-center focus:ring-0 focus:outline-none lg:size-16",
          )}
        />
      ))}
    </div>
  );
};
