import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { locationInitialState } from "./initialState";

export const locationSlice = createSlice({
  name: "location",
  initialState: locationInitialState,
  reducers: {
    setPath: (state, action: PayloadAction<string>) => {
      state.prevPath = action.payload;
    },
  },
});

export const { setPath } = locationSlice.actions;

export default locationSlice.reducer;
