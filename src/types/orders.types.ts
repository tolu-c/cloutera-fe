import { OrderStatus } from "./enums";

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
