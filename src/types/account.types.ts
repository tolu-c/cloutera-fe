export interface AddFundRequest {
  amount: number;
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
