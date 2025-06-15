import Image from "next/image";

const ClouteraLogo = () => {
  return (
    <div className="flex items-center gap-1.5">
      <Image
        src="/images/cloutera-logo.svg"
        alt="cloutera logo"
        width={32}
        height={32}
      />
      <p className="text-foundation-red-light text-xl">Cloutera Hub</p>
    </div>
  );
};

export default ClouteraLogo;
