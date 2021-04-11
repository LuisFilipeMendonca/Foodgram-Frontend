import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { recipiesInitialState } from "./initialState";

export const fetchRecipies = createAsyncThunk(
  "recipies/fetchRecipies",
  async (page: number, { getState }) => {
    try {
      const { recipies } = getState() as {
        recipies: typeof recipiesInitialState;
      };
      const { itemsPerPage, itemsOrderQuery } = recipies;

      const response = await axios(
        `http://localhost:3001/recipies/${page}/${itemsPerPage}/${itemsOrderQuery}`
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
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1;
    },
    setItemsOrderQuery: (state, action: PayloadAction<string>) => {
      state.itemsOrderQuery = action.payload;
      state.currentPage = 1;
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

export const {
  setCurrentPage,
  setItemsPerPage,
  setItemsOrderQuery,
} = recipiesSlice.actions;

export default recipiesSlice.reducer;
