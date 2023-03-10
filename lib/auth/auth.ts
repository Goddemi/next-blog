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
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

export const auth = getAuth(app);

export const loginRequest = async (email: any, password: any) => {
  try {
    await setPersistence(auth, browserSessionPersistence);
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
    //로그인 모달창 안에 있는 비밀번호 찾기 기능. 이메일 별도 직접 입력.
    if (typeof key === "string") {
      const response = await sendPasswordResetEmail(auth, key);
      return "성공";
    }

    //로그인 되어있는 상태에서 마이페이지에서의 비밀번호 찾기. 기존 로그인한 이메일로 전송.
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
