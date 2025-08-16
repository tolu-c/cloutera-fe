import { Services } from "@/components/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloutera | Services",
};

const ServicesPage = () => {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <h2 className="text-heading px-4 text-2xl/4 font-medium">
        Available Services
      </h2>

      <Services />
    </div>
  );
};

export default ServicesPage;
