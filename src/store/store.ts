import { combineReducers, configureStore } from "@reduxjs/toolkit";

import categorySlice from "./categorySlice";

const rootReducer = combineReducers({
  categorySlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
