import { BaseParams } from "@/types/index";
import { UserStatus } from "@/types/enums";

export interface CustomerStats {
  total: number;
  active: number;
  inactive: number;
  blocked: number;
}

export interface GetCustomersParams extends BaseParams {
  search?: string;
  status?: UserStatus;
  page?: number;
  limit?: number;
}

export interface GetCustomerOrdersParams extends BaseParams {
  search?: string;
  // status?:UserStatus
  page?: number;
  limit?: number;
}
