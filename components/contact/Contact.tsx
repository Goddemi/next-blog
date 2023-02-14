import { useRef, useState } from "react";
import { postContent } from "../../lib/products/postContent";
import Notification from "../notification/Notification";

const ContactForm = () => {
  const [contactResult, setContactResult] = useState<string | undefined>();

  const emailRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const contactHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailValue = emailRef.current?.value;
    const contentValue = contentRef.current?.value;

    if (!contentValue) {
      setContactResult("내용을 입력해 주세요");
      return;
    }

    const reqBody = {
      email: emailValue,
      content: contentValue,
    };

    const response = await postContent("/api/contact", reqBody);

    if (response === "POST 에러") {
      return <div>{response}</div>;
    }

    setContactResult(response.data);
  };

  return (
    <>
      <form
        onSubmit={contactHandler}
        className="block w-2/3 p-20 border-2 border-gray"
      >
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
          <button className="p-5 mb-3">Submit</button>
        </div>
        {contactResult && <Notification id="contact" result={contactResult} />}
      </form>
    </>
  );
};

export default ContactForm;
