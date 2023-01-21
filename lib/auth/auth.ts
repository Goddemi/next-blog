import { app } from "../../ config/firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
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

export const findPasswordRequest = async (email: any) => {
  try {
    const response = await sendPasswordResetEmail(auth, email);
    return "변경 성공";
  } catch (error: any) {
    const errorCode = await error.code;
    return errorCode;
  }
};

export const withdrawal = async (userProvidedPassword: any) => {
  try {
    const user = auth.currentUser;

    if (user) {
      const email = user.email as any;
      const credential = EmailAuthProvider.credential(
        email,
        userProvidedPassword
      );
      const response = await reauthenticateWithCredential(user, credential);
      await deleteUser(user);
      //로그인 해제를 시켜야함.
      return "확인 성공";
    }
  } catch (error: any) {
    const errorCode = await error.code;
    return errorCode;
  }
};

//
