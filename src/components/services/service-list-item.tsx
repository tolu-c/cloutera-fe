"use client";

import { Fragment } from "react";

import { DataCell, Modal } from "@/components/ui";
import { EyeIcon } from "@/assets/icons";
import { useDisclosure } from "@/hooks/useDisclosure";
import { ServiceItem } from "@/types/services.types";
import { ServiceItemModal } from "./service-item-modal";

export const ServiceListItem = ({
  serviceId,
  name,
  rate,
  min,
  max,
  category,
}: ServiceItem) => {
  const [viewService, { close, open }] = useDisclosure(false);
  return (
    <Fragment>
      <div className="border-grey-200 flex w-full flex-col items-start rounded-lg bg-white shadow-sm lg:h-14 lg:flex-row lg:items-center lg:border-b lg:shadow-none">
        <DataCell className="basis-1/7">{serviceId}</DataCell>
        <DataCell className="basis-2/7">{name}</DataCell>
        <DataCell className="basis-1/7">{Number(rate).toFixed(4)}</DataCell>
        <DataCell className="basis-1/7">{min}</DataCell>
        <DataCell className="basis-1/7">{max}</DataCell>
        <DataCell className="basis-1/7">
          <button onClick={open} className="flex w-full justify-center">
            <EyeIcon className="text-foundation-red-normal size-6" />
          </button>
        </DataCell>
      </div>

      {viewService && (
        <Modal open={viewService} close={close} className="px-6">
          <ServiceItemModal
            serviceId={serviceId}
            name={name}
            category={category}
            closeAction={close}
          />
        </Modal>
      )}
    </Fragment>
  );
};
