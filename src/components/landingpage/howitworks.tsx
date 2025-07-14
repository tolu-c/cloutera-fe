interface StepProps {
  stepNumber: string;
  title: string;
}

const StepCard = ({ stepNumber, title }: StepProps) => {
  return (
    <div className="bg-foundation-red-white flex h-full flex-col items-start justify-center gap-1.5 rounded-[40px] p-8">
      <p className="text-dark text-sm font-light uppercase">{stepNumber}</p>
      <h3 className="text-dark text-2xl">{title}</h3>
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
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5">
          <p className="text-foundation-red-normal text-xs font-semibold tracking-[0.47em]">
            GETTING STARTED
          </p>
          <h2 className="text-dark text-4xl font-semibold sm:text-2xl">
            It&apos;s Just 3 Easy Steps
          </h2>
          <p className="text-dark text-base font-light">
            By following the processes below you can make any order you want.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center md:flex-row">
              <div className="w-full min-w-0 flex-1 md:w-auto">
                <StepCard stepNumber={step.stepNumber} title={step.title} />
              </div>
              {index < steps.length - 1 && (
                <div className="my-4 flex flex-shrink-0 items-center justify-center md:mx-4 md:my-0">
                  {/* Arrow Button */}
                  <button
                    type="button"
                    className="bg-foundation-red-normal hover:bg-foundation-red-dark rounded-full p-2 shadow-md transition-colors"
                    aria-label="Next Step"
                    tabIndex={0}
                  >
                    {/* Right Arrow SVG */}
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
