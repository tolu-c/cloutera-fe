import Image from "next/image";
import { Button } from "../ui";

export const Hero = () => {
  return (
    <div className="bg-foundation-red-white flex w-full flex-col items-center justify-between gap-1.5 p-8 md:flex-row">
      <div className="flex max-w-2xl flex-col gap-7">
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
        <div className="flex flex-col gap-7">
          <h1 className="text-dark text-6xl font-semibold">
            Boost Your Social Media Marketing
          </h1>
          <p className="text-dark text-lg font-light">
            From Unexpected Friendships, to Lasting Relationships. Our website
            is a Cheap SMM and SEO service Reseller Auto Panel Script. Fast,
            Reliable and Secure, offering World Best Quality and Cheapest
            Automatic Social Media Services which is specially developed for
            Resellers with High Speed order completion!.
          </p>
          <div className="flex items-center gap-7">
            <Button
              width={"max"}
              className="border-foundation-red-normal-hover rounded-[44px] border-b-4 shadow-[0px_5px_10px_0px_#DE374652]"
            >
              Get Started
            </Button>
            <p className="text-dark text-base underline">Watch Tutorial</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/images/heroImg.png"
          alt="hero image"
          width={800}
          height={800}
          className=""
        />
      </div>
    </div>
  );
};
