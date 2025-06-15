import { ReactNode } from "react";
import { AuthLayoutContainer } from "@/components/ui";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <AuthLayoutContainer>{children}</AuthLayoutContainer>;
};

export default AuthLayout;
