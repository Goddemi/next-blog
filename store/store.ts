import { configureStore } from "@reduxjs/toolkit";
import authModalReducer from "./auth/authModal";
import loginOutReducer from "./auth/loginOut";

export const store = configureStore({
  reducer: {
    auth: authModalReducer,
    loginOut: loginOutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
