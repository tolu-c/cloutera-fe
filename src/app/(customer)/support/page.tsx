import { SupportForm } from "@/components/support";

const SupportPage = () => (
  <div className="flex w-full flex-col gap-16">
    <section className="grid w-full grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-6 bg-white px-4 py-8">
        <h1 className="bg-foundation-red-normal flex w-full items-center rounded-lg px-4 py-2.5 text-base/4 text-white">
          Create a New Ticket
        </h1>
        <SupportForm />
      </div>
    </section>
  </div>
);

export default SupportPage;
