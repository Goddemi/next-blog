import { app } from "../../ config/firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  deleteUser,
} from "firebase/auth";

export const auth = getAuth(app);

export const loginRequest = async (email: any, password: any) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const { uid } = user;
    const result = { uid, message: "로그인 성공" };
    return result;
  } catch (error: any) {
    const result = { uid: null, message: error.code };
    return result;
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
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
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

export const findPasswordRequest = async (key: any) => {
  try {
    //로그인 창 비밀번호 찾기에서 그냥 이메일로 바로 오는 경우
    if (typeof key === "string") {
      const response = await sendPasswordResetEmail(auth, key);
      return "성공";
    }

    //로그인 되어있는 상태에서 마이페이지 비밀번호 찾기 하는 경우.
    const email = key.email as any;
    const response = await sendPasswordResetEmail(auth, email);
    return "성공";
  } catch (error: any) {
    const errorCode = await error.code;
    return errorCode;
  }
};

export const passwordRecheckRequest = async (
  user: any,
  userProvidedPassword: any
) => {
  try {
    const email = user.email as any;
    const credential = EmailAuthProvider.credential(
      email,
      userProvidedPassword
    );
    const response = await reauthenticateWithCredential(user, credential);
    return "성공";
  } catch (error: any) {
    const errorCode = await error.code;
    return errorCode;
  }
};

export const withdrawal = async (user: any) => {
  try {
    await deleteUser(user);
    return "삭제 성공";
  } catch (error: any) {
    const errorCode = await error.code;
    return errorCode;
  }
};
