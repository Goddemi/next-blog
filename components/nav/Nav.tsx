import Link from "next/link";
import React from "react";

import { useDispatch } from "react-redux";
import { authModalOn } from "../../store/auth-slice";

const Nav = () => {
  const dispatch = useDispatch();

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
        <li className="px-10 cursor-pointer">
          <span onClick={() => dispatch(authModalOn())}>login</span>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
