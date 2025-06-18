import { AuthCard } from "@/components/ui";
import SignupForm from "@/components/auth/signup/signup-form";

const SignupPage = () => {
  return (
    <AuthCard
      title="Sign Up!"
      description="Get started in your social media success"
    >
      <SignupForm />
    </AuthCard>
  );
};

export default SignupPage;
