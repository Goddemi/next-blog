import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authModalOff } from "../../store/auth/authModal";
import AuthForm from "./AuthForm";

const AuthModal = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center fixed inset-0 z-10">
      <div
        className="fixed inset-0 bg-zinc-200/50"
        onClick={() => dispatch(authModalOff())}
      ></div>
      <AuthForm />
    </div>
  );
};

export default AuthModal;
