import { Metadata } from "next";

import { PageSection } from "@/components/ui";
import { CustomerList, CustomersStats } from "@/components/admin/customers";

export const metadata: Metadata = {
  title: "Cloutera | Admin | Customer Management",
};

const CustomerPage = () => {
  return (
    <PageSection>
      <CustomersStats />

      <CustomerList />
    </PageSection>
  );
};

export default CustomerPage;
