import React from "react";
import type { Metadata } from "next";
import { AuthCard } from "@/components/ui";
import { Login2FaForm } from "@/components/auth/login/login-2fa-form";

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
      <Login2FaForm />
    </AuthCard>
  );
};

export default TwoFactorAuthPage;
