import { AuthCard } from "@/components/ui";
import SignupForm from "@/components/auth/signup/signup-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloutera | Sign up",
};

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
