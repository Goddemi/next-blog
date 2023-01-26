import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { loginErrorHandler, signupErrorHandler } from "../../lib/auth/error";

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

  const findPasswordHandler = (result: string | undefined) => {
    if (result === "변경 성공") {
      requestSuccess();
    } else {
      requestFail();
      const message = loginErrorHandler(result);
      setErrorMessage(message);
    }
  };

  const recheckPasswordHandler = (result: string | undefined) => {
    if (result === "확인 성공") {
      requestSuccess();
    } else {
      requestFail();
      const message = loginErrorHandler(result);
      setErrorMessage(message);
    }
  };

  const contactRequestHandler = (result: string | undefined) => {
    if (result === "전송 성공") {
      requestSuccess();
    } else {
      requestFail();
      const message = loginErrorHandler(result);
      setErrorMessage(message);
    }
  };

  const initiation = () => {
    if (id === "signup") {
      signupHandler(result);
    }

    if (id === "login") {
      loginHandler(result);
    }

    if (id === "findPassword") {
      findPasswordHandler(result);
    }

    if (id === "recheckPassword") {
      recheckPasswordHandler(result);
    }

    if (id === "contact") {
      contactRequestHandler(result);
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
