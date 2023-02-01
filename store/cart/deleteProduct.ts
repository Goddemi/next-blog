import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface DeleteProductId {
  id: string | undefined;
}

const initialState: DeleteProductId = {
  id: "",
};

const deleteProductSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setDeleteProductId: (state, action: PayloadAction<any>) => {
      state.id = action.payload;
    },
  },
});

export const { setDeleteProductId } = deleteProductSlice.actions;

export default deleteProductSlice.reducer;
