import ResetPasswordForm from "@/components/auth/reset-password/reset-password-form";
import { AuthCard } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloutera | Reset Password",
};

const ResetPasswordPage = () => {
  return (
    <AuthCard
      title="Create New Password"
      description="Enter your new password below to reset your account."
      showSocialLogin={false}
    >
      <ResetPasswordForm />
    </AuthCard>
  );
};

export default ResetPasswordPage;
