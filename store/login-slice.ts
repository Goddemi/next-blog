import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  active: boolean;
}

const initialState: LoginState = {
  active: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    change: (state) => {
      state.active = !state.active;
    },
  },
});

export const { change } = loginSlice.actions;
export default loginSlice.reducer;
