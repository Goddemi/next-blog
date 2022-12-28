import React, { useContext } from "react";
import { NotificationContext } from "../../store/notification-context";
import Notification from "../notification/Notification";

const Layout = (props: any) => {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification: any = notificationCtx.notification;

  return (
    <>
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
