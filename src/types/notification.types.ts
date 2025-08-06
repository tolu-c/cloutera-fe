import { NotificationStatus } from "./enums";

export interface INotification {
  message: string;
  status: NotificationStatus;
}

export interface INotificationContext {
  notify: (notification: INotification) => void;
}
