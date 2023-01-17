import React, { useRef, useState } from "react";
import { signupEmail } from "../../lib/auth";
import Exit from "./formComponents/Exit";
import InputForm from "./formComponents/inputForm";

//어떻게 찢어서 분리할지 생각해보자.

//파이어베이스에서 회원가입시 어떤 결과값들이 나올 수 있는지 확인하고 그에 따른 결과문

const SignupForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);

  const [signupState, setSignupState] = useState({
    signupSuccess: false,
    signupFail: false,
  });
  const { signupSuccess, signupFail } = signupState;

  const [errorMessage, setErrorMessage] = useState();

  const inputClear = () => {
    if (emailRef.current && passwordRef.current && passwordCheckRef.current) {
      emailRef.current.value = "";
      passwordRef.current.value = "";
      passwordCheckRef.current.value = "";
    }
  };

  const signupHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const result = await signupEmail(emailRef, passwordRef);

    if (result == "회원가입 성공") {
      setSignupState({ signupFail: false, signupSuccess: true });
      inputClear();
    } else {
      setSignupState({ signupSuccess: false, signupFail: true });
    }
  };

  return (
    <form className="p-5 relative">
      <Exit />
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
          className="bg-blue-400 md-2 py-1 px-3 rounded-md"
          onClick={(e) => {
            signupHandler(e);
          }}
        >
          회원가입
        </button>
      </div>
      {signupSuccess && (
        <p className="text-center text-green-400">회원가입 성공 !</p>
      )}
      {signupFail && <p className="text-center text-red-400">회원가입 실패</p>}
      {errorMessage}
    </form>
  );
};

export default SignupForm;
