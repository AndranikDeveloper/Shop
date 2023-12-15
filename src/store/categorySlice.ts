import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICategoryAction,
  ICategoryData,
  ICategoryInitialState,
} from "../types/categories-types";

const initialState: ICategoryInitialState = {
  categoryData: [],
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategoryData(state, action: PayloadAction<ICategoryAction>) {
      const { category, key, type } = action.payload;
      const newKey = key as keyof ICategoryData;
      state.categoryData =
        type === "asc"
          ? category.sort((a, b) => +a[newKey] - +b[newKey])
          : category.sort((a, b) => +b[newKey] - +a[newKey]);
    },
  },
});

export default categorySlice.reducer;
export const { setCategoryData } = categorySlice.actions;
