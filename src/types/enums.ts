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
