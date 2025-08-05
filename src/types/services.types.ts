export interface ServiceItem {
  _id: string;
  serviceId: number;
  name: string;
  type: string;
  category: string;
  rate: string;
  min: string;
  max: string;
  refill: boolean;
  cancel: boolean;
  isActive: boolean;
  lastUpdated: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceParams {
  search?: string;
  page?: number;
  limit?: number;
  category?: string;
}

export interface ServiceCategories {
  categories: string[];
}
