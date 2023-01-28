import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../lib/auth/auth";
import { getSession, useSession } from "../../lib/auth/getSession";
import { authModalOff } from "../../store/auth/authModal";
import { loggedIn } from "../../store/auth/loginOut";
import Notification from "../notification/Notification";
import InputForm from "./formElements/InputForm";

const LoginForm = ({ goToSignup, goToFindPassword }: any) => {
  const dispatch = useDispatch();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [loginRequestResult, setLoginRequestResult] = useState();

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await loginRequest(email, password);
    const { uid, message } = response;
    setLoginRequestResult(message);

    setTimeout(() => {
      if (uid && message === "로그인 성공") {
        dispatch(loggedIn(getSession()));
        dispatch(authModalOff());
      }
    }, 500);
  };

  return (
    <>
      <form onSubmit={loginHandler}>
        <InputForm label={"아이디(이메일)"} id={"email"} ref={emailRef} />
        <InputForm label={"비밀번호"} id={"password"} ref={passwordRef} />

        <div className="flex justify-between">
          <button type="submit" className="bg-orange-400 py-1 px-3 rounded-md">
            로그인
          </button>
          <button
            type="button"
            className="bg-gray-400 py-1 px-3 rounded-md"
            onClick={goToFindPassword}
          >
            비밀번호 찾기
          </button>
          <button
            type="button"
            className="bg-blue-400 py-1 px-3 rounded-md"
            onClick={goToSignup}
          >
            회원가입
          </button>
        </div>
        {loginRequestResult && (
          <Notification id="login" result={loginRequestResult} />
        )}
      </form>
    </>
  );
};

export default LoginForm;
