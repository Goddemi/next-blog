import React, { useContext } from "react";
import { NotificationContext } from "../../store/notification-context";
import Notification from "../notification/Notification";
import Nav from "../nav/Nav";
import AuthModal from "../auth/Auth";

import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const Layout = (props: React.PropsWithChildren) => {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification: any = notificationCtx.notification;

  const authState = useSelector((state: RootState) => state.auth.active);

  return (
    <>
      {authState && <AuthModal />}
      <Nav />
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
