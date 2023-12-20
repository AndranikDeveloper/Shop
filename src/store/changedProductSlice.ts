import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChangedProductIS } from "../types/changed-product-types";
import { ICategoryData } from "../types/categories-types";

const initialState: IChangedProductIS = {
  newProduct: null,
};

const changedProductSlice = createSlice({
  name: "changedProductSlice",
  initialState,
  reducers: {
    setNewProduct(state, action: PayloadAction<ICategoryData>) {
      state.newProduct = action.payload;
    },
  },
});
export default changedProductSlice.reducer;
export const { setNewProduct } = changedProductSlice.actions;
