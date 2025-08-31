import { Metadata } from "next";
import Link from "next/link";

import { PageSection } from "@/components/ui";
import { routes } from "@/utils/routes";
import { ChevronIcon } from "@/assets/icons";
import {
  BlockUserButton,
  CustomerInformation,
  CustomerOrderHistoryList,
} from "@/components/admin/customers";

export const metadata: Metadata = {
  title: "Cloutera | Admin | Single Customer",
};

const SingleCustomerPage = async ({
  params,
}: {
  params: Promise<{ customerId: string }>;
}) => {
  const { customerId } = await params;
  const { customer } = routes.admin;

  return (
    <PageSection>
      <div className="flex w-full justify-between">
        <Link
          href={customer}
          className="border-grey-text-100 text-grey-text-950 flex h-12 items-center gap-2 rounded-lg border bg-white px-6 py-2 font-medium"
        >
          <ChevronIcon className="text-grey-text-400 size-5 -rotate-180" />
          Back
        </Link>

        <BlockUserButton customerId={customerId} />
      </div>

      <CustomerInformation customerId={customerId} />

      <CustomerOrderHistoryList customerId={customerId} />
    </PageSection>
  );
};
export default SingleCustomerPage;
