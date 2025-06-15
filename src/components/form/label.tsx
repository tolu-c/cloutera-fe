import { ReactNode } from "react";

interface LabelProps {
  name: string;
  children: ReactNode;
}

const Label = ({ name, children }: LabelProps) => {
  return (
    <label className="text-grey-800 text-sm/5 font-medium" htmlFor={name}>
      {children}
    </label>
  );
};

export default Label;
