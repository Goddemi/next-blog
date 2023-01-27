import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface LoginInfo {
  uid: string | undefined;
}

const initialState: LoginInfo = {
  uid: "",
};

const loginOutSlice = createSlice({
  name: "loginOut",
  initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<string>) => {
      state.uid = action.payload;
    },
    loggedOut: (state) => {
      state.uid = "";
    },
  },
});

export const { loggedIn, loggedOut } = loginOutSlice.actions;

export default loginOutSlice.reducer;
