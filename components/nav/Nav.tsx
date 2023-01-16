import Link from "next/link";
import React from "react";

const Nav = () => {
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
          <Link href={"/login"}>login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
