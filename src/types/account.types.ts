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

export interface InitializePaymentRequest {
  email: string;
  amount: string;
}

export interface InitializePaymentResponse {
  authorization_url: string;
  access_code: string;
  reference: string;
}

const PayStackPaymentStatus = [
  "success",
  "abandoned",
  "ongoing",
  "pending",
  "processing",
  "queued",
  "reversed",
] as const;

export type PayStackPaymentStatus = (typeof PayStackPaymentStatus)[number];

export interface VerifyPaymentResponse {
  id: number;
  domain: string;
  status: PayStackPaymentStatus;
  reference: string;
  receipt_number: string | null;
  amount: number;
  message: string | null;
  gateway_response: string;
  paid_at: string | null;
  created_at: string;
  channel: string;
  currency: string;
  ip_address: string;
  metadata: string | null;
  log: {
    start_time: number;
    time_spent: number;
    attempts: number;
    errors: number;
    success: boolean;
    mobile: boolean;
    input: unknown[];
    history?: Array<{
      type: string;
      message: string;
      time: number;
    }>;
  };
  fees: number;
  fees_split: number | null;
  authorization: {
    authorization_code: string;
    bin: string;
    last4: string;
    exp_month: string;
    exp_year: string;
    channel: string;
    card_type: string;
    bank: string;
    country_code: string;
    brand: string;
    reusable: boolean;
    signature: string;
    account_name: string | null;
  } | null;
  customer: {
    id: number;
    first_name: string | null;
    last_name: string | null;
    email: string;
    customer_code: string;
    phone: string | null;
    metadata: unknown | null;
    risk_action: string;
    international_format_phone: string | null;
  };
  plan: unknown | null;
  split: Record<string, unknown>;
  order_id: string | null;
  paidAt: string | null;
  createdAt: string;
  requested_amount: number;
  pos_transaction_data: unknown | null;
  source: unknown | null;
  fees_breakdown: unknown | null;
  connect: unknown | null;
  transaction_date: string;
  plan_object: Record<string, unknown>;
  subaccount: Record<string, unknown>;
}
