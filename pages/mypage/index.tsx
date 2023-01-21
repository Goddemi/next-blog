import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import AuthResultNotification from "../../components/auth/formComponents/authResult";
import InputForm from "../../components/auth/formComponents/inputForm";
import { auth, withdrawal } from "../../lib/auth/auth";
import { loggedOut } from "../../store/auth/loginOut";

const Mypage = () => {
  //api Route로 get 요청.

  const user = auth.currentUser;
  const dispatch = useDispatch();

  const recheckPasswordRef = useRef<HTMLInputElement>(null);

  const [recheckPasswordResult, setRecheckPasswordResult] = useState();

  const recheckPasswordHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const recheckPassword = recheckPasswordRef.current?.value;

    const response = await withdrawal(recheckPassword);

    setRecheckPasswordResult(response);

    if (response === "확인 성공") {
      setRecheckPasswordResult(undefined);
      dispatch(loggedOut());
    }
  };

  return (
    <>
      {user ? (
        <div>
          <div>장바구니</div>

          <form className="flex justify-center items-center">
            <div className="flex items-center bg-white text-black">
              <InputForm
                label={"비밀번호"}
                id={"password"}
                ref={recheckPasswordRef}
              />
            </div>

            <button
              className="m-5 p-3 bg-cyan-500"
              onClick={recheckPasswordHandler}
            >
              회원탈퇴
            </button>
          </form>
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
