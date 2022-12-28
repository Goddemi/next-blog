import React from "react";

import ReactDOM from "react-dom";

interface Props {
  title: string;
  message: string;
  status: string;
}

const Notification = (props: Props) => {
  const { title, message, status } = props;
  const modalRoot: any = document.querySelector("#notification");

  return ReactDOM.createPortal(
    <>
      <div>{title}</div>
      <div>{message}</div>
      <div>{status}</div>
    </>,
    modalRoot
  );
};

export default Notification;
