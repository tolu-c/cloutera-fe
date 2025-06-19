import { FaqsList } from "@/components/faqs";

const FaqsPage = () => (
  <div className="flex w-full flex-col items-center">
    <section className="w-full max-w-3xl">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-2xl font-semibold text-black">
            FAQS
          </h1>
          <p className="text-xl leading-7 text-gray-600">
            We answered some of the most frequently asked questions on our
            panel.
          </p>
        </div>

        <FaqsList />
      </div>
    </section>
  </div>
);

export default FaqsPage;
