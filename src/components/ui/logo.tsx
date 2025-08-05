import Image from "next/image";
import { cn } from "@/utils/cn";

const ClouteraLogo = ({
  isBlack,
  isGradient,
  className,
}: {
  isBlack?: boolean;
  isGradient?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <Image
        src="/images/cloutera-logo.svg"
        alt="cloutera logo"
        width={32}
        height={32}
      />
      <p
        className={cn("text-foundation-red-light text-xl", {
          "text-black": isBlack,
          "from-foundation-red-normal to-foundation-red-light bg-linear-to-r bg-clip-text text-transparent":
            isGradient,
        })}
      >
        Cloutera Hub
      </p>
    </div>
  );
};

export default ClouteraLogo;
