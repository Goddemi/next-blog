import axios from "axios";
import React, { useRef } from "react";

const Contact = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const contactHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailValue = emailRef.current?.value;
    const contentValue = contentRef.current?.value;

    const reqBody = {
      email: emailValue,
      content: contentValue,
    };

    axios
      .post("/api/contact", reqBody)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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

export default Contact;
