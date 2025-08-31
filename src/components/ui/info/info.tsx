interface InfoProps {
  title: string;
  value: string;
}

export const Info = ({ title, value }: InfoProps) => {
  return (
    <div className="flex w-full flex-col gap-0.5">
      <p className="text-grey-text-400 text-sm/5 capitalize">{title}</p>

      <p className="text-grey-text-950 text-sm/5 font-medium">{value}</p>
    </div>
  );
};
