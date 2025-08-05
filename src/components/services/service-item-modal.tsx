import { Button } from "../ui";

interface ServiceItemModalProps {
  serviceId: number;
  name: string;
  category: string;
  close: () => void;
}

export const ServiceItemModal = ({
  serviceId,
  name,
  category,
  close,
}: ServiceItemModalProps) => {
  return (
    <div className="flex w-full flex-col gap-8">
      <p className="text-xs font-medium text-slate-800">
        #{serviceId} - {category} - {name}
      </p>

      <Button onClick={close}>Buy now</Button>
    </div>
  );
};
