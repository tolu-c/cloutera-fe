import { AddFundOptions, TransactionStatus, TransactionType } from "./enums";
import { TimeStamp } from "@/types/index";

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

export interface Transaction extends TimeStamp {
  _id: string;
  transactionId: string;
  userId: string;
  paymentMethod: string;
  amount: number;
  status: TransactionStatus;
  type: TransactionType;
  balanceBefore: number;
  balanceAfter: number;
}
