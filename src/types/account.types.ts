import { AddFundOptions } from "./enums";

export interface AddFundRequest {
  amount: number;
  paymentMethod: AddFundOptions;
  status: string;
  tx_reference: string;
}

export interface AddFundResponse {
  newBalance: number;
  amountAdded: number;
  accountLevel: number;
}

export interface AccountStatusResponse {
  accountStatus: number;
  accountBalance: number;
  orders: {
    totalOrders: number;
    totalSuccessfulOrders: number;
    totalAmount: number;
  };
}
