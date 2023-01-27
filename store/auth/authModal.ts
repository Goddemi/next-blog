import { createSlice } from "@reduxjs/toolkit";
export interface AuthModal {
  isOpen: boolean;
}

const initialState: AuthModal = {
  isOpen: false,
};

const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    authModalOn: (state) => {
      state.isOpen = true;
    },
    authModalOff: (state) => {
      state.isOpen = false;
    },
  },
});

export const { authModalOn, authModalOff } = authModalSlice.actions;

export default authModalSlice.reducer;
