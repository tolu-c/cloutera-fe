"use client";

import { Fragment } from "react";

import { DataCell, Modal } from "@/components/ui";
import { EyeIcon } from "@/assets/icons";
import { useDisclosure } from "@/hooks/useDisclosure";
import { Service } from "@/types";

export const ServiceListItem = ({
  id,
  service,
  rate,
  minOrder,
  maxOrder,
  description,
}: Service) => {
  const [viewService, { close, open }] = useDisclosure(false);
  return (
    <Fragment>
      <div className="border-grey-200 flex w-full flex-col items-start rounded-lg bg-white shadow-sm lg:h-14 lg:flex-row lg:items-center lg:border-b lg:shadow-none">
        <DataCell className="basis-1/7">{id}</DataCell>
        <DataCell className="basis-2/7">{service}</DataCell>
        <DataCell className="basis-1/7">{rate}</DataCell>
        <DataCell className="basis-1/7">{minOrder}</DataCell>
        <DataCell className="basis-1/7">{maxOrder}</DataCell>
        <DataCell className="basis-1/7">
          <button onClick={open} className="flex w-full justify-center">
            <EyeIcon className="text-foundation-red-normal size-6" />
          </button>
        </DataCell>
      </div>

      {viewService && (
        <Modal open={viewService} close={close}>
          {description}
        </Modal>
      )}
    </Fragment>
  );
};
