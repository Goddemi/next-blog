import React, { useState } from "react";
import FindPassword from "./FindPassword";
import ExitButton from "./formComponents/ExitButton";
import GoBackButton from "./formComponents/GoBackButton";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthForm = () => {
  const [formChanger, setFormChanger] = useState({
    loginForm: true,
    signupForm: false,
    findPasswordForm: false,
  });

  const { loginForm, signupForm, findPasswordForm } = formChanger;

  const goToLogin = () => {
    setFormChanger({
      loginForm: true,
      signupForm: false,
      findPasswordForm: false,
    });
  };

  const goToSignup = () => {
    setFormChanger({
      loginForm: false,
      signupForm: true,
      findPasswordForm: false,
    });
  };

  const goToFindpassword = () => {
    setFormChanger({
      loginForm: false,
      signupForm: false,
      findPasswordForm: true,
    });
  };

  return (
    <div className="relative p-11 bg-white text-black">
      <div>
        {loginForm || <GoBackButton goToLogin={goToLogin} />}
        <ExitButton />
      </div>
      <div className="">
        {loginForm && (
          <LoginForm
            goToSignup={goToSignup}
            goToFindpassword={goToFindpassword}
          />
        )}
        {signupForm && <SignupForm goToLogin={goToLogin} />}
        {findPasswordForm && <FindPassword />}
      </div>
    </div>
  );
};

export default AuthForm;
