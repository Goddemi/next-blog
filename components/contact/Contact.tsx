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
      .then((res) => console.log(res))
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
    <form onSubmit={contactHandler} className="w-2/3 p-20 border-2 border-gray">
      <div className="flex justify-center items-center ">
        <div className="p-10">
          <label htmlFor="email" className="text-2xl p-5">
            이메일{" "}
          </label>
          <input
            id="email"
            type="email"
            ref={emailRef}
            className=" bg-gray-800 "
          />
        </div>
        <div className="p-10 pl-14 flex justify-center items-center">
          <label htmlFor="content" className="text-2xl p-5">
            <span>내용 </span>
          </label>
          <textarea
            id="content"
            rows={5}
            ref={contentRef}
            className=" bg-gray-800 "
          ></textarea>
        </div>
      </div>
      <div className="text-center">
        <button className="p-5">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
