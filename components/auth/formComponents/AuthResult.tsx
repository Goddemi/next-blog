import React from "react";
import { signupErrorHandler } from "../../../lib/auth/error";

interface Props {
  success: boolean;
  fail: boolean;
  message: string | undefined | null;
}

const AuthResult = ({ success, fail, message }: Props) => {
  return (
    <div>
      {success && <p className="text-center text-green-400">성공 !</p>}
      {fail && <p className="text-center text-red-400">실패 ({message}) </p>}
    </div>
  );
};

export default AuthResult;
