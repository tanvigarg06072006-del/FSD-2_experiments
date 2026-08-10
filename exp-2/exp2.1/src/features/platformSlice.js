import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  platforms: [
    "Facebook",
    "Twitter",
    "LinkedIn",
    "Instagram",
  ],
};

const platformSlice = createSlice({
  name: "platforms",
  initialState,
  reducers: {},
});

export default platformSlice.reducer;