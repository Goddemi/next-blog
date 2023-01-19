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

  const authModalOpen = useSelector((state: RootState) => state.auth.isOpen);

  return (
    <>
      {authModalOpen && <AuthModal />}
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
