"use client";

import { Button } from "../ui";
import { useRouter } from "next/navigation";

interface ServiceItemModalProps {
  serviceId: number;
  name: string;
  category: string;
  closeAction: () => void;
}

export const ServiceItemModal = ({
  serviceId,
  name,
  category,
  closeAction: close,
}: ServiceItemModalProps) => {
  const router = useRouter();

  const orderService = async () => {
    router.push("/order?serviceId=" + serviceId);
    close();
  };

  return (
    <div className="flex w-full flex-col gap-8">
      <p className="text-xs font-medium text-slate-800">
        #{serviceId} - {category} - {name}
      </p>

      <Button onClick={orderService}>Buy now</Button>
    </div>
  );
};
