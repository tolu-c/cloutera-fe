import { ReactNode } from "react";
import { TopBar } from "@/components/ui";

interface CustomerLayoutProps {
  children: ReactNode;
}

const CustomerLayout = ({ children }: CustomerLayoutProps) => {
  return (
    <div className="flex w-full flex-col items-center">
      <TopBar />

      <main className="w-full max-w-7xl py-9">{children}</main>
    </div>
  );
};

export default CustomerLayout;
