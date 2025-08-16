import { AddFundForm } from "./AddFundForm";

export const AddFund = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
      <AddFundForm />

      <div className="flex w-full flex-col gap-2 rounded-lg p-8">
        <div className="bg-foundation-red-normal flex h-12 w-full items-center rounded-t-lg px-5">
          <p className="text-base font-bold text-white">How to fund account?</p>
        </div>

        <div className="bg-foundation-red-normal/10 flex h-70 w-full items-center justify-center">
          <p className="text-2xl font-bold text-white">video</p>
        </div>
      </div>
    </div>
  );
};
