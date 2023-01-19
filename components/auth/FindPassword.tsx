import React from "react";
import { useRef } from "react";
import InputForm from "./formComponents/inputForm";

const FindPassword = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <form className="relative p-5">
      <InputForm label={"아이디(이메일)"} id={"email"} ref={emailRef} />
      <button className="bg-orange-400 py-1 px-3 rounded-md">
        비밀번호 찾기
      </button>
      <span>이메일로 비밀번호 변경 메일을 보내드립니다.</span>
      <span>전송완료!</span>
    </form>
  );
};

export default FindPassword;
