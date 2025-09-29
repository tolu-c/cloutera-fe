import { BaseParams } from "@/types/index";

export interface Activity {
  _id: string;
  userId: string;
  action: string;
  createdAt: string;
  updatedAt: string;
}

export interface ActivityParams extends BaseParams {
  search?: string;
  page?: number;
  limit?: number;
}
