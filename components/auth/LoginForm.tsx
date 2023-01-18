import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { loginRequest } from "../../lib/auth/auth";
import { loginErrorHandler } from "../../lib/auth/error";
import AuthResult from "./formComponents/authResult";
import Exit from "./formComponents/Exit";
import InputForm from "./formComponents/inputForm";

const LoginForm = ({
  setLoginSignup,
}: {
  setLoginSignup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const loginSignup = () => {
    setLoginSignup(false);
  };

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [loginResult, setLoginResult] = useState({
    loginSuccess: false,
    loginFail: false,
  });
  const { loginSuccess, loginFail } = loginResult;

  const [errorMessage, setErrorMessage] = useState<string | null>();

  const loginHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const result = await loginRequest(emailRef, passwordRef);

    if (result == "로그인 성공") {
      setLoginResult({ loginFail: false, loginSuccess: true });
      inputClear();
    } else {
      const errorResult = loginErrorHandler(result);
      setLoginResult({ loginSuccess: false, loginFail: true });
      setErrorMessage(errorResult);
    }
  };

  const inputClear = () => {
    if (emailRef.current && passwordRef.current) {
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };

  return (
    <>
      <form className="relative p-5">
        <Exit />
        <InputForm label={"아이디(이메일)"} id={"email"} ref={emailRef} />
        <InputForm label={"비밀번호"} id={"password"} ref={passwordRef} />

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-orange-400 py-1 px-3 rounded-md"
            onClick={loginHandler}
          >
            로그인
          </button>
          <button
            onClick={loginSignup}
            type="button"
            className="bg-blue-400 py-1 px-3 rounded-md"
          >
            회원가입
          </button>
        </div>
        <AuthResult
          success={loginSuccess}
          fail={loginFail}
          message={errorMessage}
        />
      </form>
    </>
  );
};

export default LoginForm;
