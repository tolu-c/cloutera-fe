import { BaseParams, TimeStamp } from "@/types/index";

export interface AppNotification extends TimeStamp {
  _id: string;
  title: string;
  message: string;
  type: NotificationEnum;
  isRead: boolean;
  isRecurring: boolean;
  scheduledDate: Date | null;
  endDate: Date | null;
  status: NotificationStatusEnum;
}

export interface NotificationStats {
  sent: number;
  scheduled: number;
}

export enum NotificationEnum {
  NotificationBar = "bar",
  FullScreen = "fullScreen",
  All = "all",
}

export enum NotificationFreqEnum {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
}

export enum NotificationStatusEnum {
  Sent = "sent",
  Scheduled = "scheduled",
}

export interface AddNotificationReq {
  title: string;
  message: string;
  type: NotificationEnum;
}

export interface AddScheduledNotificationReq extends AddNotificationReq {
  date: string;
  time: string;
}

export interface AddRecurringNotificationReq
  extends AddScheduledNotificationReq {
  endDate: string;
  freq: NotificationFreqEnum;
}

export interface NotificationParams extends BaseParams {
  search?: string;
  page?: number;
  limit?: number;
}

export const Time = {
  "12 AM": "00:00",
  "1 AM": "01:00",
  "2 AM": "02:00",
  "3 AM": "03:00",
  "4 AM": "04:00",
  "5 AM": "05:00",
  "6 AM": "06:00",
  "7 AM": "07:00",
  "8 AM": "08:00",
  "9 AM": "09:00",
  "10 AM": "10:00",
  "11 AM": "11:00",
  "12 PM": "12:00",
  "1 PM": "13:00",
  "2 PM": "14:00",
  "3 PM": "15:00",
  "4 PM": "16:00",
  "5 PM": "17:00",
  "6 PM": "18:00",
  "7 PM": "19:00",
  "8 PM": "20:00",
  "9 PM": "21:00",
  "10 PM": "22:00",
  "11 PM": "23:00",
} as const;
