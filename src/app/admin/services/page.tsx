import { Metadata } from "next";

import { PageSection } from "@/components/ui";
import { Services } from "@/components/services";

export const metadata: Metadata = {
  title: "Cloutera | Admin | Services",
};

const ServicesPage = () => {
  return (
    <PageSection>
      <Services showList={false} />
    </PageSection>
  );
};
export default ServicesPage;
