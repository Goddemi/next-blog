import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import AuthResultNotification from "../../components/auth/formComponents/AuthResult";
import InputForm from "../../components/auth/formComponents/InputForm";
import {
  auth,
  findPasswordRequest,
  passwordRecheckRequest,
  withdrawal,
} from "../../lib/auth/auth";
import { loggedOut } from "../../store/auth/loginOut";

const Mypage = () => {
  //api Route로 get 요청.

  const user = auth.currentUser;

  const dispatch = useDispatch();

  const recheckPasswordRef = useRef<HTMLInputElement>(null);

  const [recheckPasswordResult, setRecheckPasswordResult] = useState();

  const recheckPasswordHandler = async () => {
    const recheckPassword = recheckPasswordRef.current?.value;
    const response = await passwordRecheckRequest(user, recheckPassword);

    setRecheckPasswordResult(response);

    return response;
  };

  const userDeleteHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (confirm("정말 삭제하시겠습니까?") === true) {
      const response = await recheckPasswordHandler();

      if (response === "확인 성공") {
        withdrawal(user);
        dispatch(loggedOut());
      }
    }
  };

  const passwordChangeHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const response = await recheckPasswordHandler();

    if (response === "확인 성공") {
      findPasswordRequest(user);
    }
  };

  return (
    <>
      {user ? (
        <div className="p-10">
          <div>
            <span className="text-lg font-bold">장바구니</span>
            <div className="flex justify-center items-center">
              <div className="my-5">물건들 ~ </div>
            </div>
          </div>

          <div className="my-10">
            <span className="text-lg font-bold">개인정보 </span>
            <form className="flex justify-center items-center my-5">
              <div className="flex items-center p-2 bg-white text-black">
                <InputForm
                  label={"비밀번호 재확인"}
                  id={"password"}
                  ref={recheckPasswordRef}
                />
              </div>

              <button
                className="ml-5 p-5 bg-orange-500"
                onClick={passwordChangeHandler}
              >
                비밀번호 변경
              </button>

              <button
                className="ml-5 p-5 bg-cyan-500"
                onClick={userDeleteHandler}
              >
                회원탈퇴
              </button>
            </form>
          </div>

          {recheckPasswordResult && (
            <AuthResultNotification
              id="recheckPassword"
              result={recheckPasswordResult}
            />
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-10">
          다시 로그인 해주세요 !{" "}
        </div>
      )}
    </>
  );
};

export default Mypage;
