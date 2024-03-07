import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { HSCounterState } from "./types";

const initialState: HSCounterState = {
  data: [],
  total: 0,
};

export const HSCounter = createSlice({
  name: "hsCounter",
  initialState,
  reducers: {
    setHSCounterData: (state, action: PayloadAction<HSCounterState>) => {
      console.log("--==hsRecords@Slice ", action);
      state.data = action.payload.data;
      state.total = action.payload.total;
    },
  },
});

export const { setHSCounterData } = HSCounter.actions;

export default HSCounter.reducer;
