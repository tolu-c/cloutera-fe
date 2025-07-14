import { FaqsFooter, FaqsList } from "@/components/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloutera | FAQ",
};

const FaqsPage = () => (
  <div className="flex w-full flex-col items-center">
    <section className="w-full">
      <div className="flex flex-col gap-8 p-4 lg:gap-16 lg:p-0">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-2xl font-semibold text-black">
            FAQS
          </h1>
          <p className="mb-5 text-center text-base text-gray-600 lg:text-xl lg:leading-7">
            We answered some of the most frequently asked questions on our
            panel.
          </p>
        </div>

        <FaqsList />
        <FaqsFooter />
      </div>
    </section>
  </div>
);

export default FaqsPage;
