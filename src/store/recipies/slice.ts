import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { recipiesInitialState } from "./initialState";

export const fetchRecipies = createAsyncThunk(
  "recipies/fetchRecipies",
  async ({ page, limit }: { page: number; limit: number }) => {
    try {
      const response = await axios(
        `http://localhost:3001/recipies/${page}/${limit}`
      );

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
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [fetchRecipies.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRecipies.fulfilled.type]: (state, action) => {
      const { recipies, count } = action.payload;
      console.log(recipies);
      state.recipies = recipies;
      state.count = count;
      state.isLoading = false;
    },
    [fetchRecipies.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setCurrentPage } = recipiesSlice.actions;

export default recipiesSlice.reducer;
