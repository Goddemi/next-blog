import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { loginErrorHandler, signupErrorHandler } from "../../../lib/auth/error";

interface Props {
  id: string;
  result: string;
}

const AuthResult = ({ id, result }: Props) => {
  const [authResult, setAuthResult] = useState({
    success: false,
    fail: false,
  });
  const { success, fail } = authResult;

  const [errorMessage, setErrorMessage] = useState<string | null>();

  const authSuccess = () => {
    setAuthResult({ success: true, fail: false });
  };

  const authFail = () => {
    setAuthResult({ success: false, fail: true });
  };

  const signupHandler = (result: string | undefined) => {
    if (result === "회원가입 성공") {
      authSuccess();
    } else {
      authFail();
      const message = signupErrorHandler(result);
      setErrorMessage(message);
    }
  };

  const loginHandler = (result: string | undefined) => {
    if (result === "로그인 성공") {
      authSuccess();
    } else {
      authFail();
      const message = loginErrorHandler(result);
      setErrorMessage(message);
    }
  };

  const initiation = () => {
    if (id === "signup") {
      signupHandler(result);
      console.log("signup");
    }

    if (id === "login") {
      loginHandler(result);
    }
  };

  useEffect(initiation, [result]);

  return (
    <div>
      {success && <p className="text-center text-green-400">성공 !</p>}
      {fail && (
        <p className="text-center text-red-400">실패 ({errorMessage}) </p>
      )}
    </div>
  );
};

export default AuthResult;
