import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authModalOn } from "../../store/auth/authModal";
import { RootState } from "../../store/store";

const Nav = () => {
  const loginUser = useSelector((state: RootState) => state.loginOut.uid);
  const dispatch = useDispatch();

  const authModalOpen = () => dispatch(authModalOn());

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
              <span>mypage</span>
            </li>
            <li className="pl-10 cursor-pointer">
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
