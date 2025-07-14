import type { Metadata } from "next";

import { FaqSection } from "@/components/faqs";

export const metadata: Metadata = {
  title: "Cloutera | FAQ",
};

const FaqsPage = () => <FaqSection />;

export default FaqsPage;
