import React from "react";
import Exit from "./formComponents/Exit";
import InputForm from "./formComponents/inputForm";

const SignupForm = () => {
  return (
    <form className="p-5 relative">
      <Exit />
      <InputForm label={"아이디(이메일)"} id={"email"} />
      <InputForm label={"비밀번호"} id={"password"} />
      <InputForm label={"비밀번호 확인"} id={"password"} />

      <div className="flex justify-center">
        <button type="button" className="bg-blue-400 py-1 px-3 rounded-md">
          회원가입
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
