"use client";

import {
  INotification,
  INotificationContext,
} from "@/types/notification.types";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Notification } from "../ui";

export const NotificationContext = createContext<INotificationContext | null>(
  null,
);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<INotification | null>(null);

  const showNotifcation = (notification: INotification) => {
    setNotification(notification);
  };

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => {
      setNotification(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [notification]);

  const clearNotification = () => setNotification(null);

  return (
    <NotificationContext.Provider
      value={{
        notify: showNotifcation,
      }}
    >
      {notification && (
        <Notification {...notification} close={clearNotification} />
      )}

      {children}
    </NotificationContext.Provider>
  );
};
