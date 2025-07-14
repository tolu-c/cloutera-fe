import {
  InfoCircleIcon,
  ShiedYesFilledIcon,
  TimeFilledIcon,
  TimerIcon,
  TimerRoundedIcon,
} from "@/assets/icons";
import { ElementType } from "react";
import { LabelValuePair } from "@/types";

interface OrdersServiceDescriptionProps {
  startTime?: string;
  speed?: string;
  avgTime?: string;
  guaranteed?: string;
  serviceName?: string;
}

export const OrdersServiceDescription = ({
  startTime,
  avgTime,
  speed,
  guaranteed,
  serviceName,
}: OrdersServiceDescriptionProps) => {
  return (
    <div className="hidden h-max flex-col items-start gap-6 p-8 lg:col-span-2 lg:flex">
      <div className="bg-foundation-red-white flex w-full items-center gap-2 rounded p-2">
        <InfoCircleIcon className="text-foundation-red-normal size-4" />
        <p className="text-grey-900 text-base/5 font-medium">
          Service Description
        </p>
      </div>

      <p className="text-base font-medium text-slate-600">
        Service Name: {serviceName}
      </p>

      <div className="grid w-full grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
        <DescriptionLabel
          Icon={TimerRoundedIcon}
          label={"Start Time:"}
          value={startTime ?? "-"}
        />
        <DescriptionLabel
          Icon={TimerIcon}
          label={"Speed:"}
          value={speed ?? "-"}
        />

        <DescriptionLabel
          Icon={TimeFilledIcon}
          label={"Average Time:"}
          value={avgTime ?? "-"}
        />
        <DescriptionLabel
          Icon={ShiedYesFilledIcon}
          label={"Guaranteed:"}
          value={guaranteed ?? "-"}
        />
      </div>

      <div className="border-foundation-red-normal flex w-full flex-col items-start gap-4 rounded-lg border bg-white p-4">
        <p className="text-base text-slate-800">Start: 0-1 Hour</p>
        <p className="text-base text-slate-800">Delivery: 10k to 20k daily</p>
        <p className="text-base text-slate-800">Delivery: 10k to 20k daily</p>
        <p className="text-base text-slate-800">Delivery: 10k to 20k daily</p>
      </div>
    </div>
  );
};

interface DescriptionLabelProps extends LabelValuePair {
  Icon: ElementType;
}

const DescriptionLabel = ({ label, value, Icon }: DescriptionLabelProps) => {
  return (
    <div className="bg-fade/35 flex h-13 w-full items-center gap-4 rounded-lg p-4">
      <div className="flex items-center gap-2">
        <Icon className="size-4 text-black" />
        <p className="text-grey-800 text-base">{label}</p>
      </div>

      <p>{value}</p>
    </div>
  );
};
