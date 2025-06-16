import ForgotPasswordForm from "@/components/auth/forgot-password/forgot-password-form";
import { AuthCard } from "@/components/ui";

const ForgotPasswordPage = () => {
  return (
    <AuthCard
      title="Forgot your password?"
      description={
        <p>
          Can&#39;t remember your password? Don&#39;t worry just enter your
          email we will send you rest password link.
        </p>
      }
      showSocialLogin={false}
    >
      <ForgotPasswordForm />
    </AuthCard>
  );
};

export default ForgotPasswordPage;
