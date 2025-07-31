"use client";

import React, { useState } from "react";
import { TwoFactorAuthOTPVerification } from "./two-factor-auth-otp-verification";
import { TwoFactorAuthEmailSelection } from "./two-factor-auth-email-selection";
import { useRouter } from "next/navigation";

// Define the steps in the 2FA setup flow
type TwoFactorAuthStep = "emailSelection" | "otpVerification" | "completed";

interface TwoFactorAuthenticationFlowProps {
  initialEmail: string;
}

export const TwoFactorAuthenticationFlow = ({
  initialEmail,
}: TwoFactorAuthenticationFlowProps) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] =
    useState<TwoFactorAuthStep>("emailSelection");
  const [selectedEmail, setSelectedEmail] = useState<string>(initialEmail);

  const handleNextStep = (step: TwoFactorAuthStep, email?: string) => {
    if (email) {
      setSelectedEmail(email);
    }
    setCurrentStep(step);
  };

  const handleBack = () => {
    if (currentStep === "emailSelection") {
      router.push("/profile"); // Navigate back to the profile page
    } else if (currentStep === "otpVerification") {
      setCurrentStep("emailSelection");
    }
  };

  let content;
  switch (currentStep) {
    case "emailSelection":
      content = (
        <TwoFactorAuthEmailSelection
          email={selectedEmail}
          onContinue={(email) => handleNextStep("otpVerification", email)}
          onBack={handleBack}
        />
      );
      break;
    case "otpVerification":
      content = (
        <TwoFactorAuthOTPVerification
          email={selectedEmail}
          onVerify={() => handleNextStep("completed")}
          onBack={handleBack}
        />
      );
      break;
    case "completed":
      content = (
        <div className="rounded-lg border border-gray-200 bg-white p-10 text-center shadow-md">
          <h3 className="mb-4 text-2xl font-bold text-green-600">
            2FA Setup Complete!
          </h3>
          <p className="text-gray-700">
            Your Two-Factor Authentication has been successfully set up for{" "}
            {selectedEmail}.
          </p>
          <button
            className="mt-6 rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            onClick={() => router.push("/profile")}
          >
            Go Back to Profile
          </button>
        </div>
      );
      break;
    default:
      content = (
        <div className="rounded-lg border border-gray-200 bg-white p-10 text-center shadow-md">
          <p className="text-gray-700">
            Something went wrong. Please try again.
          </p>
          <button
            className="mt-6 rounded-md bg-red-500 px-6 py-3 text-white hover:bg-red-600"
            onClick={() => router.push("/profile")}
          >
            Go Back
          </button>
        </div>
      );
  }

  return <>{content}</>;
};
