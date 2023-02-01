import { configureStore } from "@reduxjs/toolkit";
import authModalReducer from "./auth/authModal";
import loginOutReducer from "./auth/loginOut";
import deleteProductIdReducer from "./cart/deleteProduct";

export const store = configureStore({
  reducer: {
    auth: authModalReducer,
    loginOut: loginOutReducer,
    deleteId: deleteProductIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
