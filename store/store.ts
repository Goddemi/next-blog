import { configureStore } from "@reduxjs/toolkit";
import authModalReducer from "./auth-slice";

export const store = configureStore({
  reducer: {
    auth: authModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
