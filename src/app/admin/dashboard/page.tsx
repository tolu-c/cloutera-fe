import { Metadata } from "next";

import { AdminDashboard } from "@/components/admin/dashboard";

export const metadata: Metadata = {
  title: "Cloutera | Admin | Dashboard",
};

const AdminDashboardPage = () => {
  return <AdminDashboard />;
};

export default AdminDashboardPage;
