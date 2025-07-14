import Image from "next/image";
import { cn } from "@/utils/cn";

const ClouteraLogo = ({ isBlack }: { isBlack?: boolean }) => {
  return (
    <div className="flex items-center gap-1.5">
      <Image
        src="/images/cloutera-logo.svg"
        alt="cloutera logo"
        width={32}
        height={32}
      />
      <p
        className={cn("text-foundation-red-light text-xl", {
          "text-black": isBlack,
        })}
      >
        Cloutera Hub
      </p>
    </div>
  );
};

export default ClouteraLogo;
