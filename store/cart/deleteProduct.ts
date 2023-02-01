import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface DeleteProductState {
  isSuccess: boolean;
}

const initialState: DeleteProductState = {
  isSuccess: false,
};

const deleteProductSlice = createSlice({
  name: "deleteProduct",
  initialState,
  reducers: {
    setDeleteProductState: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
    },
  },
});

export const { setDeleteProductState } = deleteProductSlice.actions;

export default deleteProductSlice.reducer;
