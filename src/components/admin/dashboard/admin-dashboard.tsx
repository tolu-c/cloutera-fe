import {
  DashboardGraph,
  DashboardStats,
  Greeting,
} from "@/components/admin/dashboard";

export const AdminDashboard = () => {
  return (
    <div className="flex w-full flex-col items-start gap-6">
      <Greeting />

      <DashboardStats />

      <DashboardGraph />
    </div>
  );
};
