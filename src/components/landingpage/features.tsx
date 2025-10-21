import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  ImageSrc: string;
}

export const FeatureCard = ({
  title,
  description,
  ImageSrc,
}: FeatureCardProps) => {
  return (
    <div className="bg-foundation-red-white flex h-full w-full flex-col justify-between gap-6 overflow-hidden rounded-4xl p-12 lg:px-4 lg:py-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-dark text-xl font-medium lg:text-3xl">{title}</h3>
        <p className="text-dark text-xs lg:text-base">{description}</p>
      </div>
      <div className="flex justify-end">
        <Image
          src={ImageSrc}
          alt="Feature Card Background"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export const FeaturesSection = () => {
  const featuresData: FeatureCardProps[] = [
    {
      title: "Secure Transactions",
      description:
        "Every transaction is protected with advanced encryption, ensuring your payments and account details remain safe while you enjoy seamless social media growth.",
      ImageSrc: "/images/card.svg",
    },
    {
      title: "Super Fast Delivery!",
      description:
        "Our automated system processes your orders within seconds, ensuring fast, reliable, and seamless delivery every time.",
      ImageSrc: "/images/rocket.svg",
    },
    {
      title: "365/24/7 Support",
      description:
        "We Offer Fast Delivery And 24/7 Customer Support, Ensuring Your Satisfaction Is Our Top Priority.",
      ImageSrc: "/images/user-group.svg",
    },
  ];

  return (
    <section className="">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-2 lg:px-8">
        <div className="flex flex-col gap-5">
          <p className="text-foundation-red-normal text-xs font-semibold tracking-[0.47em]">
            FEATURES
          </p>
          <h2 className="text-dark text-2xl font-semibold lg:text-4xl">
            Why Should You Choose Us?
          </h2>
          <p className="text-dark text-xs font-light lg:max-w-2xl lg:text-base">
            Lorem ipsum dolor sit amet consectetur. In elementum faucibus risus
            nisl vitae condimentum quam dolor eget. A lorem quisque semper
            consequat.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              ImageSrc={feature.ImageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
