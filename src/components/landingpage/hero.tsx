import Image from "next/image";

export const Hero = () => {
  return (
    <div className="bg-foundation-red-white w-full p-8">
      <div className="flex flex-col gap-7">
        <div className="flex items-center gap-2">
          <Image
            src="/images/heroAvatar.png"
            alt="hero avatar"
            width={164}
            height={44}
          />
          <div className="flex flex-col gap-1.5">
            <Image src="/images/stars.png" alt="stars" width={98} height={18} />
            <p className="text-dark text-xs">10k+ Positive reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};
