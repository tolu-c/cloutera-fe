import React from "react";
import type { Metadata } from "next";
import { AuthCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cloutera | Verify Login",
};

const TwoFactorAuthPage = () => {
  return (
    <AuthCard
      title="Two-Factor Authentication"
      description="Enter the 6-digit code sent to your email"
      showSocialLogin={false}
    >
      login 2fa
    </AuthCard>
  );
};

export default TwoFactorAuthPage;
