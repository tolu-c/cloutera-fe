import { AuthCard } from "@/components/ui";
import SignupForm from "@/components/auth/signup/signup-form";

const SignupPage = () => {
  return (
    <AuthCard
      title="Sign Up!"
      description={<p>Get started in your social media success</p>}
    >
      <SignupForm />
    </AuthCard>
  );
};

export default SignupPage;
