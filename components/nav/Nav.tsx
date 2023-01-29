import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, logoutRequest } from "../../lib/auth/auth";
import { getSession, useSession } from "../../lib/auth/getSession";
import { authModalOn } from "../../store/auth/authModal";
import { loggedIn, loggedOut } from "../../store/auth/loginOut";
import { RootState } from "../../store/store";

const Nav = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const loginUser = useSelector((state: any) => state.loginOut.uid);

  useEffect(() => {
    const sessionKey = Object.keys(sessionStorage)[0];

    if (sessionStorage[sessionKey]) {
      const sessionContent = JSON.parse(sessionStorage[sessionKey]);
      const sessionId = sessionContent.uid;
      dispatch(loggedIn(sessionId));
    }
  }, [loginUser]);

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

export default React.memo(Nav);
