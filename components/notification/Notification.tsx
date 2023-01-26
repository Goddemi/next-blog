import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  loginErrorHandler,
  signupErrorHandler,
  errorHandler,
} from "../../lib/auth/error";

interface Props {
  id: string;
  result: string;
}

const Notification = ({ id, result }: Props) => {
  const [requestResult, setRequestResult] = useState({
    success: false,
    fail: false,
  });
  const { success, fail } = requestResult;

  const [errorMessage, setErrorMessage] = useState<string | null>();

  const requestSuccess = () => {
    setRequestResult({ success: true, fail: false });
  };

  const requestFail = () => {
    setRequestResult({ success: false, fail: true });
  };

  const signupHandler = (result: string | undefined) => {
    if (result === "회원가입 성공") {
      requestSuccess();
    } else {
      requestFail();
      const message = signupErrorHandler(result);
      setErrorMessage(message);
    }
  };

  const loginHandler = (result: string | undefined) => {
    if (result === "로그인 성공") {
      requestSuccess();
    } else {
      requestFail();
      const message = loginErrorHandler(result);
      setErrorMessage(message);
    }
  };

  const requestHandler = (result: string | undefined) => {
    if (result === "성공") {
      requestSuccess();
    } else {
      requestFail();
      const message = errorHandler(result);
      setErrorMessage(message);
    }
  };

  const initiation = () => {
    if (id === "signup") {
      signupHandler(result);
      return;
    }

    if (id === "login") {
      loginHandler(result);
      return;
    }

    if (
      id === "findPassword" ||
      id === "recheckPassword" ||
      id === "contact" ||
      id === "cart"
    ) {
      requestHandler(result);
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

export default Notification;
