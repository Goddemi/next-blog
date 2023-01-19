import React from "react";
import { useRef } from "react";
import InputForm from "../../components/auth/formComponents/inputForm";
import { passwordChange } from "../../lib/auth/auth";

const Mypage = () => {
  //api Route로 get 요청.

  return (
    <div>
      <div>장바구니</div>

      <div className="flex">
        <div className="p-20 bg-amber-300">
          <button onClick={passwordChange}>비밀번호 변경</button>
        </div>
        <div className="p-20 bg-cyan-500">회원탈퇴</div>
      </div>
    </div>
  );
};

export default Mypage;
