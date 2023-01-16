import React from "react";
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

  return (
    <>
      <form className="relative p-5">
        <Exit />
        <InputForm label={"아이디(이메일)"} id={"email"} />
        <InputForm label={"비밀번호"} id={"password"} />

        <div className="flex justify-between">
          <button type="submit" className="bg-orange-400 py-1 px-3 rounded-md">
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
      </form>
    </>
  );
};

export default LoginForm;
