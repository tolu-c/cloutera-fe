import { Metadata } from "next";
import { PageSection } from "@/components/ui";
import { Support } from "@/components/admin/support";

export const metadata: Metadata = {
  title: "Cloutera | Admin | Support",
};

const AdminSupportPage = () => {
  return (
    <PageSection>
      <Support />
    </PageSection>
  );
};
export default AdminSupportPage;
