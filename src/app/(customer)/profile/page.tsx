import { TwoFactorAuthentication } from "@/components/profile/2fa";
import { AccountSettingsForm } from "@/components/profile/details/account-settings-form";
import { ChangePasswordForm } from "@/components/profile/details/change-password-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloutera | Profile",
};

const ProfilePage = () => {
  return (
    <div className="grid w-full grid-cols-1 lg:grid-cols-2">
      <div className="flex w-full flex-col items-start gap-6 p-6 lg:p-8">
        <AccountSettingsForm />
        <ChangePasswordForm />
      </div>

      <TwoFactorAuthentication />
    </div>
  );
};

export default ProfilePage;
