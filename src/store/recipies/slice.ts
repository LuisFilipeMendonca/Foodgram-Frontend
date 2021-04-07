import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { recipiesInitialState } from "./initialState";

export const recipiesSlice = createSlice({
  name: "recipies",
  initialState: recipiesInitialState,
  reducers: {
    fetchRecipies: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
    },
  },
});

export const { fetchRecipies } = recipiesSlice.actions;

export default recipiesSlice.reducer;
