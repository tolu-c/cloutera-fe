import { ReactNode } from "react";
import { Button } from "@/components/ui";

interface AuthCardProps {
  children: ReactNode;
  title: string;
  description: ReactNode;
}

const AuthCard = ({ children, title, description }: AuthCardProps) => {
  return (
    <div className="flex w-full max-w-[454px] flex-col items-start gap-8">
      <div className="flex flex-col items-start gap-2">
        <h3 className="text-cloutera-black text-4xl/11 font-semibold">
          {title}
        </h3>
        <div className="text-office-brown-700 flex items-center gap-1 text-sm">
          {description}
        </div>
      </div>

      {children}

      <div className="flex w-full flex-col items-center gap-6">
        <div className="bg bg-grey-100 relative h-[1px] w-full">
          <span className="text-grey-500 absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm">
            OR
          </span>
        </div>

        <Button state="outline" radius="md">
          Google
        </Button>
      </div>
    </div>
  );
};

export default AuthCard;
