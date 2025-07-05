import { ServiceListItem } from "@/components/services/service-list-item";
import { ServiceList } from "@/types";

export const ServicesList = ({ title, services }: ServiceList) => {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <div className="bg-foundation-red-white flex h-13 w-full items-center rounded-t-lg p-4">
        <h4 className="text-grey-900 text-base font-medium">{title}</h4>
      </div>

      {services.map((service, index) => (
        <ServiceListItem key={index} {...service} />
      ))}
    </div>
  );
};
