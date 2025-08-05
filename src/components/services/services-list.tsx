import { ServiceListItem } from "@/components/services/service-list-item";
import { ServiceItem } from "@/types/services.types";

interface ServiceList {
  title?: string;
  services: ServiceItem[];
}

export const ServicesList = ({ title, services }: ServiceList) => {
  if (services.length === 0) {
    return (
      <p className="text-grey-800 text-center text-sm/6 font-medium">
        No services currently available. Please try again later.
      </p>
    );
  }

  return (
    <div className="flex w-full flex-col items-start gap-2">
      <div className="bg-foundation-red-white flex h-13 w-full items-center rounded-t-lg p-4">
        {title && (
          <h4 className="text-grey-900 text-base font-medium">{title}</h4>
        )}
      </div>

      {services.map((service, index) => (
        <ServiceListItem key={index} {...service} />
      ))}
    </div>
  );
};
