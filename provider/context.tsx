import React, { useState } from "react";
import { NotificationContext } from "../store/notification-context";

// interface Notification {
//   notification: any;
//   showNotification: any;
//   hideNotification: any;
// }

export const NotificationContextProvider = (props: React.PropsWithChildren) => {
  const [activeNotification, setActiveNotification] = useState(null);

  const showNotificationHandler = (notificationData: any) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};
