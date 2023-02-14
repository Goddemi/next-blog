import { auth } from "../../lib/auth/auth";
import CartProducts from "../../components/myPage/CartProducts";
import PersonalInfoChange from "../../components/myPage/PersonalInfo";

const Mypage = () => {
  const user = auth.currentUser;

  return (
    <>
      {user ? (
        <div className="p-10">
          <div>
            <span className="text-lg font-bold">장바구니</span>
            <div className="flex justify-center items-center">
              <CartProducts user={user.uid} />
            </div>
          </div>
          <PersonalInfoChange user={user} />
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
