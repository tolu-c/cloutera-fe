interface StepProps {
  stepNumber: string;
  title: string;
}

const StepCard = ({ stepNumber, title }: StepProps) => {
  return (
    <div className="bg-foundation-red-white flex h-full flex-col items-start justify-center rounded-lg p-6 shadow-sm">
      <p className="mb-1 text-sm font-semibold text-gray-500 uppercase">
        {stepNumber}
      </p>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
  );
};

export const HowItWorksSection = () => {
  const steps: StepProps[] = [
    { stepNumber: "STEP ONE", title: "Create Account & Sign In" },
    { stepNumber: "STEP TWO", title: "Fund Wallet" },
    { stepNumber: "STEP THREE", title: "Select Category & service" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-2 text-sm font-semibold tracking-wider text-red-500 uppercase">
          GETTING STARTED
        </p>
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          It&apos;s Just 3 Easy Steps
        </h2>
        <p className="mb-12 text-lg text-gray-600">
          By following the processes below you can make any order you want.
        </p>

        <div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="w-full min-w-0 flex-1 md:w-auto">
                <StepCard stepNumber={step.stepNumber} title={step.title} />
              </div>
              {index < steps.length - 1 && (
                <div className="flex-shrink-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
