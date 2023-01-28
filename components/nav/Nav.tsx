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

  //useEffect를 써서 초기값을 다시 넣어줘야함 .

  const loginUser = useSelector((state: any) => state.loginOut.uid);

  useEffect(() => {
    const sessionKey = Object.keys(sessionStorage)[0];

    if (sessionStorage[sessionKey]) {
      const sessionContent = JSON.parse(sessionStorage[sessionKey]);
      const sessionId = sessionContent.uid;
      dispatch(loggedIn(sessionId));
    }
  }, [loginUser]);

  console.log("로그인 스테이트 이 값을 redux에 넣을 것", loginUser);

  console.log(loginUser);

  // 왜 새로고침하면 state가 0가 되는가.
  //새로고침해도 loginUser값이 session값을 참조할 수 있도록.
  // 첫 값 자체를 세션값으로 하고, login햇을 때 변경하는 값도 세션값으로 넣기.

  const authModalOpen = () => dispatch(authModalOn());

  //로그인 로그아웃 때 재 렌더링만 시켜.

  //1. 로그인 한 다음에, 모달창 꺼지고 새로고침이 안됨? logout 이걸로 안바뀜.

  //제일 정상적인 방법은 세션에서 가져오는 것.
  // 그래야 세션이 유지됨에 따라 왔다갔다.
  //근데 재 렌더링이 안되는 것.
  // 이 컴포넌트를 재 렌더링 되게 하려면,

  //이 컴포넌트가 재 렌더링 되었을 때 loginUser값을 어떻게 줄거야. 어떻게 어떻게.
  //새로고침하면 재 렌더링이 된다. 값이 {} 으로 바뀐다. 새로고침했을 때 재 렌더링 되지 않게 그 값이.
  // 디펜던시로 준 값이 변화할때만 값이 변하게.
  // 그 디펜던시로는 어떤 값을 줄래.
  // sessionStorage 에서 가져온 값이나, 아니면 auth에서 가져온 값.
  // auth는 왜 초기화 되는거지.
  // 새로고침하면 auth.currentUser가 {} 값이 되는 이유.

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
