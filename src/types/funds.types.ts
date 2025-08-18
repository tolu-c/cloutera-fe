export interface FlutterwaveResponse {
  amount: number;
  charge_response_code: string;
  charge_response_message: string;
  charged_amount: number;
  created_at: string; // ISO timestamp
  currency: string;
  flw_ref: string;
  redirectstatus?: string | null; // can be undefined or null
  status: string;
  transaction_id: number;
  tx_ref: string | number; // sometimes it's numeric, sometimes string
  customer: {
    email: string;
    name: string;
    phone_number: string;
  };
}
