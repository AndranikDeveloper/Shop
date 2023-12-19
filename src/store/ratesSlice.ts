import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRatesSliceIS } from "../types/rates-types";
import { ICategoryData } from "../types/categories-types";

const initialState: IRatesSliceIS = {
  rates: [],
};

const ratesSlice = createSlice({
  name: "ratesSlice",
  initialState,
  reducers: {
    setMyRates(state, action: PayloadAction<ICategoryData>) {
      const isSame = state.rates.find(
        (rate) => rate.title === action.payload.title
      );
      if (!isSame) {
        state.rates = [...state.rates, action.payload];
      }
    },
  },
});

export default ratesSlice.reducer;
export const { setMyRates } = ratesSlice.actions;
