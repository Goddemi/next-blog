import { useState, createContext } from "react";

export const NotificationContext = createContext({
  notification: null, // {title, message, status} 가 들어올 예정.
  showNotification: function (notificationData: any) {},
  hideNotification: function () {},
});
