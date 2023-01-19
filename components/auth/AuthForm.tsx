import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthForm = () => {
  const [loginSignupChange, setLoginSignupChange] = useState(true);
  return (
    <div className="p-5 z-10 bg-white text-black">
      {loginSignupChange ? (
        <LoginForm setLoginSignupChange={setLoginSignupChange} />
      ) : (
        <SignupForm setLoginSignupChange={setLoginSignupChange} />
      )}
    </div>
  );
};

export default AuthForm;
