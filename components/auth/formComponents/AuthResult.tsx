import React from "react";

interface Props {
  success: boolean;
  fail: boolean;
  message: string | null | undefined;
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
