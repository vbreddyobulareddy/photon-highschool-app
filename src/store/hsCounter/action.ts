import { createAsyncThunk } from "@reduxjs/toolkit";
import { HSRecord } from "./types";
import { setHSCounterData } from "./slice";

export const getHSCounterData = createAsyncThunk(
  "hsCounter/setHSCounterData",
  async (_input, option) => {
    const response = await fetch(
      "https://data.cityofnewyork.us/resource/s3k6-pzi2.json"
    );
    const hsRecords: HSRecord[] = await response.json();
    console.log("--==hsRecords@Action ", hsRecords);
    option.dispatch(
      setHSCounterData({ data: hsRecords, total: hsRecords.length })
    );
  }
);
