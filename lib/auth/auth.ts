import { app } from "../../ config/firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

const auth = getAuth(app);

export const loginRequest = async (email: any, password: any) => {
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
  email: any,
  password: any,
  passwordCheck: any
) => {
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
    // const { uid } = user;
    return "회원가입 성공";
  } catch (error: any) {
    const errorCode = await error.code;
    return errorCode;
  }
};

export const logoutRequest = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    alert("로그아웃 실패");
  }
};

export const passwordChange = async () => {
  const user = auth.currentUser;

  try {
    if (user && user.email) {
      sendPasswordResetEmail(auth, user.email);
    }
  } catch (error) {
    alert("로그인이 필요합니다 !");
  }
};
