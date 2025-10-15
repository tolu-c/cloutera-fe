import ForgotPasswordForm from "@/components/auth/forgot-password/forgot-password-form";
import { AuthCard } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloutera | Forgot Password",
};

const ForgotPasswordPage = () => {
  return (
    <AuthCard
      title="Forgot your password?"
      description="Can&#39;t remember your password? Don&#39;t worry just enter your
          email we will send you reset password link."
      showSocialLogin={false}
    >
      <ForgotPasswordForm />
    </AuthCard>
  );
};

export default ForgotPasswordPage;
