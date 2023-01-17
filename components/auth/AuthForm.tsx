import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthForm = () => {
  const [loginSignup, setLoginSignup] = useState(true);
  return (
    <div className="p-5 z-10 bg-white text-black">
      {/* {loginSignup ? (
        <LoginForm setLoginSignup={setLoginSignup} />
      ) : ( */}
      <SignupForm />
      {/* )} */}
    </div>
  );
};

export default AuthForm;
