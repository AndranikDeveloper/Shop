import { combineReducers, configureStore } from "@reduxjs/toolkit";

import categorySlice from "./categorySlice";
import ratesSlice from "./ratesSlice";
import changedProductSlice from "./changedProductSlice";

const rootReducer = combineReducers({
  categorySlice,
  ratesSlice,
  changedProductSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
