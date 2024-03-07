import { configureStore } from "@reduxjs/toolkit";
import HSCounterReducer from "./hsCounter/slice";

export const appStore = configureStore({
  reducer: {
    hsCounter: HSCounterReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
