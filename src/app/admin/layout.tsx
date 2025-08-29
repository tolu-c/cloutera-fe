import { ReactNode } from "react";
import { AdminPrivateRoute } from "@/components/private-route";
import { AdminSideBar, AdminTopBar } from "@/components/ui";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <AdminPrivateRoute>
      <div className="flex h-screen w-full items-start">
        <AdminSideBar />

        <main className="flex h-full w-full flex-1 flex-col items-start">
          <AdminTopBar />

          <div className="bg-bg-2 h-full w-full overflow-y-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </AdminPrivateRoute>
  );
};

export default AdminLayout;
