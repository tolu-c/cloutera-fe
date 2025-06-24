import { ServicesList } from "@/components/services/services-list";

interface ServicesGroupProps {
  serviceList: ServiceList[];
}

export const ServicesGroup = ({ serviceList }: ServicesGroupProps) => {
  if (serviceList.length === 0) {
    return (
      <p className="text-grey-800 text-center text-sm/6 font-medium">
        No services currently available. Please try again later.
      </p>
    );
  }

  return (
    <div className="flex w-full flex-col items-start gap-2">
      {serviceList.map(({ title, services }, index) => (
        <ServicesList key={index} title={title} services={services} />
      ))}
    </div>
  );
};
