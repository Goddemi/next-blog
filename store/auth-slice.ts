import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthModalState {
  active: boolean;
}

const initialState: AuthModalState = {
  active: false,
};

const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    authModalOn: (state) => {
      state.active = true;
    },
    authModalOff: (state) => {
      state.active = false;
    },
    authModalToggle: (state) => {
      state.active = !state.active;
    },
  },
});

export const { authModalOn, authModalOff, authModalToggle } =
  authModalSlice.actions;
export default authModalSlice.reducer;
