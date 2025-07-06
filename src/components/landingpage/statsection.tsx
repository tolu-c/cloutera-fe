import {
  ActiveUsersIcon,
  SupportHoursIcon,
  TotalOrdersIcon,
} from "@/assets/icons";

type Stat = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

const stats: Stat[] = [
  {
    icon: <ActiveUsersIcon />,
    label: "Active Users",
    value: "45,000",
  },
  {
    icon: <TotalOrdersIcon />,
    label: "Total Orders",
    value: "500,000",
  },
  {
    icon: <SupportHoursIcon />,
    label: "Hours of support",
    value: "45,000",
  },
];

const StatCard = ({ icon, label, value }: Stat) => (
  <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white px-8 py-6 text-center shadow-[0px_2px_4px_0px_#ABBED133]">
    <div className="text-foundation-red-normal size-11">{icon}</div>
    <p className="text-grey-900 text-base">{label}</p>
    <p className="text-grey-900 text-3xl font-bold">{value}</p>
  </div>
);

export const StatsSection = () => (
  <section className="bg-white py-16">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
    </div>
  </section>
);
