import { useEffect } from "react";

export const useSession = (loginUser: any) => {
  useEffect(() => {
    const sessionKey = Object.keys(sessionStorage)[0];
    if (sessionStorage[sessionKey]) {
      const sessionContent = JSON.parse(sessionStorage[sessionKey]);
      const sessionId = sessionContent.uid;
      return sessionId;
    }
  }, [loginUser]);
};

export const getSession = () => {
  if (typeof window !== "undefined") {
    const sessionKey = Object.keys(sessionStorage)[0];
    if (sessionStorage[sessionKey]) {
      const sessionContent = JSON.parse(sessionStorage[sessionKey]);
      const sessionId = sessionContent.uid;
      return sessionId;
    }
  }
};
