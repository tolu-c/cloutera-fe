import { useError } from "@/hooks";
import { useAxiosApi } from "@/api/api-client";
import { ApiAuthModes } from "@/types/enums";
import { endpoints } from "@/api/endpoints";
import { AxiosResponse } from "axios";
import {
  ApiDataResponse,
  ApiMessageResponse,
  PaginatedResponse,
} from "@/types";
import {
  NotificationStats,
  AppNotification,
  AddNotificationReq,
  AddScheduledNotificationReq,
  AddRecurringNotificationReq,
  NotificationParams,
} from "@/types/notifications.types";
import { appendQueryParams } from "@/utils";

export function useNotifications() {
  const { handleError } = useError();

  const authApi = useAxiosApi(ApiAuthModes.BearerToken, handleError);
  const {
    add,
    addSchedule,
    addRecurring,
    stats,
    sentNotifications,
    scheduledNotifications,
    deleteNotification,
  } = endpoints.admin.notifications;
  const { list, view, markAsRead } = endpoints.notifications;

  async function getNotificationStats() {
    const res: AxiosResponse<ApiDataResponse<NotificationStats>> =
      await authApi.get(stats);
    return res.data;
  }

  async function getNotifications() {
    const res: AxiosResponse<ApiDataResponse<AppNotification[]>> =
      await authApi.get(list);
    return res.data;
  }

  async function viewNotification(id: string) {
    const res: AxiosResponse<ApiDataResponse<AppNotification>> =
      await authApi.get(view(id));
    return res.data;
  }

  async function markNotificationAsRead(id: string) {
    const res: AxiosResponse<ApiMessageResponse> = await authApi.get(
      markAsRead(id),
    );
    return res.data;
  }

  async function getSentNotifications(params: NotificationParams) {
    const url = appendQueryParams(sentNotifications, params);

    const res: AxiosResponse<PaginatedResponse<AppNotification>> =
      await authApi.get(url);
    return res.data;
  }

  async function getScheduledNotifications(params: NotificationParams) {
    const url = appendQueryParams(scheduledNotifications, params);

    const res: AxiosResponse<PaginatedResponse<AppNotification>> =
      await authApi.get(url);
    return res.data;
  }

  async function handleDeleteNotification(id: string) {
    const res: AxiosResponse<ApiMessageResponse> = await authApi.delete(
      deleteNotification(id),
    );
    return res.data;
  }

  async function addNotification(data: AddNotificationReq) {
    const res: AxiosResponse<ApiMessageResponse> = await authApi.post(
      add,
      data,
    );
    return res.data;
  }

  async function scheduleNotification(data: AddScheduledNotificationReq) {
    const res: AxiosResponse<ApiMessageResponse> = await authApi.post(
      addSchedule,
      data,
    );
    return res.data;
  }

  async function scheduleRecurringNotification(
    data: AddRecurringNotificationReq,
  ) {
    const res: AxiosResponse<ApiMessageResponse> = await authApi.post(
      addRecurring,
      data,
    );
    return res.data;
  }

  return {
    getNotificationStats,
    getNotifications,
    viewNotification,
    markNotificationAsRead,
    getSentNotifications,
    getSentNotifications,
    getScheduledNotifications,
    handleDeleteNotification,
    addNotification,
    scheduleNotification,
    scheduleRecurringNotification,
  };
}
