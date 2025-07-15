import type { Metadata } from "next";
import { VerifyAccount } from "@/components/auth/verify-account";

export const metadata: Metadata = {
  title: "Cloutera | Verify Your Account",
};

const VerifyAccountPage = () => {
  return <VerifyAccount />;
};

export default VerifyAccountPage;
