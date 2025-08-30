import {
  DashboardGraph,
  DashboardStats,
  Greeting,
} from "@/components/admin/dashboard";
import { PageSection } from "@/components/ui";

export const AdminDashboard = () => {
  return (
    <PageSection>
      <Greeting />

      <DashboardStats />

      <DashboardGraph />
    </PageSection>
  );
};
