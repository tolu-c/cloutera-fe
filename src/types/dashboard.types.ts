import { Day } from "@/types/enums";

export interface Stats {
  current: number;
  active: number;
  percentageChange: number;
}

export interface Trend {
  day: Day;
  orders: number;
  revenue: number;
  customers: number;
}

export interface DashboardStats {
  totalCustomers: Stats;
  totalOrders: Stats;
  totalRevenue: Stats;
}

export interface DashboardTrends {
  thisWeek: Trend[];
  lastWeek: Trend[];
}
