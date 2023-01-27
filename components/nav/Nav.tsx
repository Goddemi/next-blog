import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest } from "../../lib/auth/auth";
import { authModalOn } from "../../store/auth/authModal";
import { loggedOut } from "../../store/auth/loginOut";
import { RootState } from "../../store/store";

const Nav = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const loginUser = useSelector((state: RootState) => state.loginOut.uid);

  const authModalOpen = () => dispatch(authModalOn());

  const logout = () => {
    logoutRequest();
    dispatch(loggedOut());
    router.push("/");
  };

  return (
    <div className="flex justify-between p-8 text-lg">
      <div className="cursor-pointer">
        <Link href={"/"}>Planet shop</Link>
      </div>
      <ul className="flex">
        <li className="px-10 cursor-pointer">
          <Link href={"/products"}>all products</Link>
        </li>
        <li className="px-10 cursor-pointer">
          <Link href={"/contact"}>contact</Link>
        </li>

        {loginUser ? (
          <>
            <li className="px-10 cursor-pointer">
              <Link href={"/mypage"}>mypage</Link>
            </li>
            <li className="pl-10 cursor-pointer" onClick={logout}>
              <span>logout</span>
            </li>
          </>
        ) : (
          <li className="cursor-pointer" onClick={authModalOpen}>
            login
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
