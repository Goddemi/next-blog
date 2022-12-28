import axios from "axios";
import React, { useContext, useRef } from "react";
import { postContent } from "../../lib/postContent";
import { NotificationContext } from "../../store/notification-context";

const ContactForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const notificationCtx = useContext(NotificationContext);

  const contactHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailValue = emailRef.current?.value;
    const contentValue = contentRef.current?.value;

    notificationCtx.showNotification({
      title: "sending..",
      message: "its ongoing",
      status: "pending",
    });

    const reqBody = {
      email: emailValue,
      content: contentValue,
    };

    postContent("/api/contact", reqBody)
      .then(() =>
        notificationCtx.showNotification({
          title: "success",
          message: "its done",
          status: "success",
        })
      )
      .catch((error) =>
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message || "something wrong",
          status: "error",
        })
      );
  };

  return (
    <form onSubmit={contactHandler}>
      <div>
        <label htmlFor="email" className="border-2 border-black">
          이메일 :{" "}
        </label>
        <input
          id="email"
          type="email"
          ref={emailRef}
          className="border-2 border-black bg-gray-200 "
        />
      </div>
      <div>
        <label htmlFor="content" className="border-2 border-black">
          내용 :
        </label>
        <textarea
          id="content"
          rows={5}
          ref={contentRef}
          className=" bg-gray-200 border-2 border-black"
        ></textarea>
      </div>
      <button className="border-2 border-black">Submit</button>
    </form>
  );
};

export default ContactForm;
