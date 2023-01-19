import { app } from "../../ config/firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const auth = getAuth(app);

export const loginRequest = async (emailRef: any, passwordRef: any) => {
  const email = await emailRef.current?.value;
  const password = await passwordRef.current?.value;

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const { uid } = user;
    const result = { uid, message: "로그인 성공" };
    return result;
  } catch (error: any) {
    const errorCode = await error.code;
    return errorCode;
  }
};

export const signupRequest = async (
  emailRef: any,
  passwordRef: any,
  passwordCheckRef: any
) => {
  const email = await emailRef.current?.value;
  const password = await passwordRef.current?.value;
  const passwordCheck = await passwordCheckRef.current?.value;

  if (password !== passwordCheck) {
    return "password check error";
  }

  try {
    await setPersistence(auth, browserSessionPersistence);
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { uid } = user;
    return "회원가입 성공";
  } catch (error: any) {
    const errorCode = await error.code;
    return errorCode;
  }
};
