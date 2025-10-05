import { AuthCard } from "@/components/ui";
import Link from "next/link";
import LoginForm from "@/components/auth/login/login-form";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Cloutera | Login",
};

const LoginPage = () => {
  return (
    <Suspense>
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
    </Suspense>
  );
};

export default LoginPage;
