import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaG5Mo5nBEPlpdhS-ZM4vKP16aKOY-E7o",
  authDomain: "youneedverse-e9492.firebaseapp.com",
  databaseURL:
    "https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "youneedverse-e9492",
  storageBucket: "youneedverse-e9492.appspot.com",
  messagingSenderId: "462007948289",
  appId: "1:462007948289:web:cf433fabbd796f8eed5c00",
  measurementId: "G-7CSDDGHMYW",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const signupEmail = async (emailRef: any, passwordRef: any) => {
  const email = await emailRef.current?.value;
  const password = await passwordRef.current?.value;

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { uid } = user;
    return "회원가입 성공";
  } catch (error) {
    const { code } = await error;
    return { code };
  }
};
