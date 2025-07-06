import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <div className="bg-foundation-red-white relative w-full overflow-hidden rounded-4xl px-6 py-6 shadow-lg">
      <div className="relative z-10 flex flex-col gap-4">
        <h3 className="text-dark text-3xl font-medium">{title}</h3>
        <p className="text-dark text-base">{description}</p>
      </div>
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 transform opacity-20"></div>
    </div>
  );
};

export const FeaturesSection = () => {
  const featuresData: FeatureCardProps[] = [
    {
      title: "Secure Payments",
      description:
        "Every Transaction Uses Advanced Encryption, Keeping Your Financial Data Safe And Compliant With Global Standards.",
    },
    {
      title: "Super Fast Delivery!",
      description:
        "Parents Can Monitor Fee Statuses, While Schools Get Real-Time Insights Into Collections And Outstanding Balances.",
    },
    {
      title: "365/24/7 Support",
      description:
        "We Offer Fast Delivery And 24/7 Customer Support, Ensuring Your Satisfaction Is Our Top Priority.",
    },
  ];

  return (
    <section className="">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5">
          <p className="text-foundation-red-normal text-xs font-semibold tracking-[0.47em]">
            FEATURES
          </p>
          <h2 className="text-dark text-4xl font-semibold">
            Why Should You Choose Us?
          </h2>
          <p className="text-dark max-w-2xl text-base font-light">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};
