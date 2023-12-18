import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICategoryAction,
  ICategoryData,
  ICategoryInitialState,
} from "../types/categories-types";

const initialState: ICategoryInitialState = {
  categoryData: [],
  defaultCategory: [],
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategoryData(state, action: PayloadAction<ICategoryAction>) {
      const { key, type } = action.payload;
      const newKey = key as keyof ICategoryData;
      if (key === "default") {
        state.categoryData = state.defaultCategory;
      }
      state.categoryData =
        type === "asc"
          ? state?.categoryData.sort((a, b) => {
              return key === "rate" || key === "count"
                ? +a["rating"][key] - +b["rating"][key]
                : +a[newKey] - +b[newKey];
            })
          : state?.categoryData.sort((a, b) => {
              return key === "rate" || key === "count"
                ? +b["rating"][key] - +a["rating"][key]
                : +a[newKey] - +b[newKey];
            });
    },
    createCategory(state, action) {
      state.categoryData = action.payload;
      state.defaultCategory = action.payload;
    },
  },
});

export default categorySlice.reducer;
export const { setCategoryData, createCategory } = categorySlice.actions;
