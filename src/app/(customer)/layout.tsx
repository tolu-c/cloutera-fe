import { ReactNode } from "react";
import { TopBar } from "@/components/ui";
import { PrivateRoute } from "@/components/private-route";

interface CustomerLayoutProps {
  children: ReactNode;
}

const CustomerLayout = ({ children }: CustomerLayoutProps) => {
  return (
    <PrivateRoute>
      <div className="flex w-full flex-col items-center">
        <TopBar />

        <main className="w-full max-w-7xl py-9">{children}</main>
      </div>
    </PrivateRoute>
  );
};

export default CustomerLayout;
