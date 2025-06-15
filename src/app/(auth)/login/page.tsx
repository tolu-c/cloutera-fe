import { AuthCard } from "@/components/ui";
import Link from "next/link";
import LoginForm from "@/components/auth/login/login-form";

const LoginPage = () => {
  return (
    <AuthCard
      title="Welcome back!"
      description={
        <p>
          Don’t have an account?{" "}
          <Link href="/" className="text-foundation-red-normal font-semibold">
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
