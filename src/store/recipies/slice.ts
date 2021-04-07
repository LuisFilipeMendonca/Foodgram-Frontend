import axios from "axios";

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { recipiesInitialState } from "./initialState";

export const fetchRecipies = createAsyncThunk(
  "recipies/fetchRecipies",
  async () => {
    try {
      const response = await axios("http://localhost:3001/recipies/1/10");

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const recipiesSlice = createSlice({
  name: "recipies",
  initialState: recipiesInitialState,
  reducers: {
    setRecipies: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
    },
  },
  extraReducers: {
    [fetchRecipies.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRecipies.fulfilled.type]: (state, action) => {
      const { recipies, count } = action.payload;
      state.recipies = recipies;
      state.count = count;
      state.isLoading = false;
    },
    [fetchRecipies.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setRecipies } = recipiesSlice.actions;

export default recipiesSlice.reducer;
