import type { Metadata } from "next";
import TwoFactorAuthClientWrapper from "@/components/profile/2fa/two-factor-auth-wrapper";

export const metadata: Metadata = {
  title: "Cloutera | 2FA Setup",
};

const TwoFAPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-8 font-sans antialiased">
      <div className="mx-auto w-full">
        {/* Render the client wrapper which handles fetching user data and the 2FA flow */}
        <TwoFactorAuthClientWrapper />
      </div>
    </div>
  );
};

export default TwoFAPage;
