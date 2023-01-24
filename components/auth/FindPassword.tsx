import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { findPasswordRequest } from "../../lib/auth/auth";
import AuthResultNotification from "./formComponents/AuthResult";
import InputForm from "./formComponents/InputForm";

const FindPassword = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const [findPasswordRequestResult, setfindPasswordRequestResult] = useState();

  const findPasswordHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const email = emailRef.current?.value;

    const response = await findPasswordRequest(email);
    setfindPasswordRequestResult(response);
  };

  return (
    <>
      <form>
        <InputForm label={"아이디(이메일)"} id={"email"} ref={emailRef} />
        <div className="flex flex-col justify-center">
          <button
            className="bg-orange-400 py-1 px-3 mb-7 rounded-md"
            onClick={findPasswordHandler}
          >
            비밀번호 찾기
          </button>
          <div>이메일로 비밀번호 변경 메일을 보내드립니다.</div>
        </div>
      </form>

      {findPasswordRequestResult && (
        <AuthResultNotification
          id={"findPassword"}
          result={findPasswordRequestResult}
        />
      )}
    </>
  );
};

export default FindPassword;
