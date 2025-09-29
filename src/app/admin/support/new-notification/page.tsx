import { PageSection } from "@/components/ui";
import { Metadata } from "next";
import { NewNotification } from "@/components/admin/support/notification";
import Link from "next/link";
import { ChevronIcon } from "@/assets/icons";
import { routes } from "@/utils/routes";

export const metadata: Metadata = {
  title: "Cloutera | Admin | New Notification",
};

const NewNotificationPage = () => {
  return (
    <PageSection>
      <Link
        href={routes.admin.support}
        className="border-grey-text-100 text-grey-text-950 flex h-12 items-center gap-2 rounded-lg border bg-white px-6 py-2 font-medium"
      >
        <ChevronIcon className="text-grey-text-400 size-5 -rotate-180" />
        Back
      </Link>

      <NewNotification />
    </PageSection>
  );
};

export default NewNotificationPage;
