import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest } from "../../lib/auth/auth";
import { authModalOn } from "../../store/auth/authModal";
import { loggedIn, loggedOut } from "../../store/auth/loginOut";
import { RootState } from "../../store/store";

const Nav = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const loginUser = useSelector((state: RootState) => state.loginOut.uid);

  useEffect(() => {
    const sessionKey = Object.keys(sessionStorage)[0];

    if (sessionStorage[sessionKey]) {
      const sessionContent = JSON.parse(sessionStorage[sessionKey]);
      const sessionId = sessionContent.uid;
      dispatch(loggedIn(sessionId));
    }
  }, []);

  const authModalOpen = () => dispatch(authModalOn());

  const logout = async () => {
    dispatch(loggedOut());
    logoutRequest();
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
