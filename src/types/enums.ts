export enum OrderService {
  All = "All Services",
  Nigerian = "Nigerian services",
  Instagram = "Instagram services",
  Twitter = "Twitter Services",
  Telegram = "Telegram Services",
  Tiktok = "Tiktok services",
}

export enum OrderCategory {
  All = "All",
  Instagram = "Instagram",
  Twitter = "Twitter",
  Telegram = "Telegram",
  Tiktok = "Tiktok",
}

export enum Status {
  Completed = "Completed",
  Processing = "Processing",
  InProgress = "In Progress",
  Cancelled = "Cancelled",
  Successful = "Successful",
}

export enum OrderStatus {
  All = "All",
  PENDING = "Pending",
  COMPLETED = "Completed",
  CANCELLED = "Cancelled",
  REFUNDED = "Refunded",
  Partial = "Partial",
  Processing = "Processing",
}

export enum ApiAuthModes {
  NoAuth,
  BearerToken,
}

export enum UserRole {
  Customer = "Customer",
  Admin = "Admin",
}

export enum NotificationStatus {
  Success = "success",
  Error = "error",
}

export enum FundHistoryCategory {
  All = "All",
  Successful = "Successful",
  Failed = "Failed",
}

export enum AddFundOptions {
  PayStack = "PayStack",
}

export enum TransactionStatus {
  PENDING = "pending",
  SUCCESSFUL = "successful",
  FAILED = "failed",
}

export enum TransactionType {
  CREDIT = "credit",
  DEBIT = "debit",
}

export enum DateTimeFormat {
  DayDateMonthYear = "ddd, D MMMM, YYYY",
  MonthDateYear = "MMM D, YYYY",
}

export enum GraphFilter {
  ThisWeek = "ThisWeek",
  LastWeek = "LastWeek",
}

export enum OrderStat {
  All = "All Orders",
  Completed = "Completed",
  Pending = "Pending",
  Cancelled = "Cancelled",
}

export enum CustomerStat {
  Total = "Total Customers",
  Active = "Active Customers",
  Inactive = "Inactive Customers",
}

export enum UserStatus {
  Active = "Active",
  Inactive = "Inactive",
  Blocked = "Blocked",
}

export enum Day {
  Sun = "Sun",
  Mon = "Mon",
  Tue = "Tue",
  Wed = "Wed",
  Thu = "Thu",
  Fri = "Fri",
  Sat = "Sat",
}

export enum AdminSupportTab {
  NotificationsAnnouncements = "Notifications & Announcements",
  Faq = "FAQs",
}

export enum AdminNotification {
  Sent = "Sent",
  Scheduled = "Scheduled",
}
