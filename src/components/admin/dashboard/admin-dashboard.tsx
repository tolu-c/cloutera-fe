import {
  DashboardGraph,
  DashboardStats,
  Greeting,
  UserActivities,
} from "@/components/admin/dashboard";
import { PageSection } from "@/components/ui";

export const AdminDashboard = () => {
  return (
    <PageSection>
      <Greeting />

      <DashboardStats />

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
        <DashboardGraph />

        <UserActivities />
      </div>
    </PageSection>
  );
};
