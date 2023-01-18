import React from "react";
import { useDispatch } from "react-redux";
import { authModalOff } from "../../../store/auth-slice";

const ExitButton = () => {
  const dispatch = useDispatch();
  return (
    <span
      className="absolute -right-1 -top-2 text-gray-400 cursor-pointer"
      onClick={() => dispatch(authModalOff())}
    >
      ✕
    </span>
  );
};

export default ExitButton;
