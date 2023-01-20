import React, { useRef, useState } from "react";
import { signupRequest } from "../../lib/auth/auth";
import { signupErrorHandler } from "../../lib/auth/error";
import AuthResult from "./formComponents/authResult";
import InputForm from "./formComponents/inputForm";

//어떻게 찢어서 분리할지 생각해보자.

//파이어베이스에서 회원가입시 어떤 결과값들이 나올 수 있는지 확인하고 그에 따른 결과문

const SignupForm = ({ goToLogin }: any) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);

  const [result, setResult] = useState();

  const signupHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const passwordCheck = passwordCheckRef.current?.value;

    const response = await signupRequest(email, password, passwordCheck);

    setResult(response);

    if (result === "회원가입 성공") {
      goToLogin();
    }
  };

  return (
    <form>
      <InputForm label={"아이디(이메일)"} id={"email"} ref={emailRef} />
      <InputForm label={"비밀번호"} id={"password"} ref={passwordRef} />
      <InputForm
        label={"비밀번호 확인"}
        id={"password"}
        ref={passwordCheckRef}
      />

      <div className="flex justify-center">
        <button
          type="button"
          className="bg-blue-400 mb-2 py-1 px-3 rounded-md"
          onClick={signupHandler}
        >
          회원가입
        </button>
      </div>
      {result && <AuthResult id={"signup"} result={result} />}
    </form>
  );
};

export default SignupForm;
