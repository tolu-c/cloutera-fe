import { OrderStatus } from "./enums";
import { TimeStamp } from "@/types/index";

export interface AddOrderRequest {
  serviceId: string;
  link: string;
  quantity: number;
}

export interface GetOrdersParams {
  page?: number;
  limit?: number;
  status?: OrderStatus;
  search?: string;
}

export interface OrderItem {
  _id: string;
  userId: string;
  serviceId: {
    _id: string;
    serviceId: number;
    name: string;
    type: string;
    category: string;
    rate: string;
  };
  link: string;
  quantity: number;
  charge: number;
  startCount: number;
  remains: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  orderId: number;
}

export interface AdminOrdersStats {
  total: number;
  completed: number;
  pending: number;
  cancelled: number;
}

export interface AdminOrderItem extends TimeStamp {
  _id: string;
  userId: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  serviceId: string | null;
  link: string;
  quantity: number;
  charge: number;
  startCount: number;
  remains: number;
  status: OrderStatus;
  orderId: number;
}
