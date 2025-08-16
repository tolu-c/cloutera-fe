import { AddFund } from "./AddFund";
import { FundBalance } from "./FundBalance";
import { FundsHistory } from "./FundsHistory";

export const AddFunds = () => {
  return (
    <div className="flex w-full flex-col items-start gap-16">
      <FundBalance />
      <AddFund />
      <FundsHistory />
    </div>
  );
};
