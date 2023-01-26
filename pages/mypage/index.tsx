import React, { useState } from "react";
import AuthResultNotification from "../../components/auth/formComponents/AuthResult";
import CartProducts from "../../components/myPage/CartProducts";
import { auth } from "../../lib/auth/auth";
import PersonalInfoChange from "../../components/myPage/PersonalInfo";
import { getCarts } from "../../lib/cart/getCarts";

const Mypage = (props: any) => {
  const user = auth.currentUser;

  const [recheckPasswordResult, setRecheckPasswordResult] = useState();

  return (
    <>
      {user ? (
        <div className="p-10">
          <div>
            <span className="text-lg font-bold">장바구니</span>
            <div className="flex justify-center items-center">
              <div className="my-5">
                <CartProducts user={user.uid} />
              </div>
            </div>
          </div>
          <PersonalInfoChange
            user={user}
            setRecheckPasswordResult={setRecheckPasswordResult}
          />
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
