import { AuthCard } from "@/components/ui";
import Link from "next/link";
import LoginForm from "@/components/auth/login/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloutera | Login",
};

const LoginPage = () => {
  return (
    <AuthCard
      title="Welcome back!"
      description={
        <p>
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-foundation-red-normal font-semibold"
          >
            Sign Up
          </Link>
        </p>
      }
    >
      <LoginForm />
    </AuthCard>
  );
};

export default LoginPage;
