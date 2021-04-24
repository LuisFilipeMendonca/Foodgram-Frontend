import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { recipiesInitialState } from "./initialState";
import { userInitialState } from "../user/initialState";
import errorHandling from "../../utils/errorHandling";
import { logoutUser } from "../user/slice";

export const fetchRecipies = createAsyncThunk(
  "recipies/fetchRecipies",
  async (_, { getState, dispatch }) => {
    try {
      const { recipies } = getState() as {
        recipies: typeof recipiesInitialState;
      };
      const {
        itemsPerPage,
        itemsOrderValue,
        currentPage,
        recipieName,
      } = recipies;

      const { user } = getState() as { user: typeof userInitialState };
      const { userId } = user;
      let response: any;

      if (!recipieName) {
        response = await axios(
          `http://localhost:3001/recipies/${currentPage}/${itemsPerPage}${
            userId ? `/${userId}` : ""
          }?order=${itemsOrderValue}`
        );
      } else {
        response = await axios(
          `http://localhost:3001/recipies/by_name/${currentPage}/${itemsPerPage}/${recipieName}${
            userId ? `/${userId}` : ""
          }?order=${itemsOrderValue}`
        );
      }

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const addRating = createAsyncThunk(
  "recipies/addRating",
  async (
    data: { value: number; recipieId: string },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await axios.post(`http://localhost:3001/ratings`, {
        ...data,
      });

      return { ...data, _id: response.data._id };
    } catch (e) {
      const { status, data } = e.response;

      if (status === 401) {
        dispatch(logoutUser());
      }

      return rejectWithValue({ status, data });
    }
  }
);

export const deleteRating = createAsyncThunk(
  "recipies/deleteRating",
  async (
    data: { value: number; rateId: string; recipieId: string },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const { value, rateId, recipieId } = data;

      await axios.delete(`http://localhost:3001/ratings/${rateId}`);

      return { value, recipieId };
    } catch (e) {
      const { status, data } = e.response;
      if (status === 401) {
        dispatch(logoutUser());
      }
      return rejectWithValue({ status, data });
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
    setItemsPerPage: (state, action: PayloadAction<string>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1;
    },
    setItemsOrder: (state, action: PayloadAction<string>) => {
      state.itemsOrderValue = action.payload;
      state.currentPage = 1;
    },
    setRecipieName: (state, action: PayloadAction<string>) => {
      state.recipieName = action.payload;
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
    [fetchRecipies.rejected.type]: (state, action) => {
      state.isLoading = false;
      errorHandling(action.payload);
    },
    [addRating.fulfilled.type]: (state, action) => {
      const { value, recipieId, _id } = action.payload;
      const recipieIdx = state.recipies.findIndex(
        (recipie) => recipie._id === recipieId
      );

      state.recipies[recipieIdx].votes += value;
      state.recipies[recipieIdx].votesCount += 1;
      state.recipies[recipieIdx].ratings.push({ _id, value });
    },
    [addRating.rejected.type]: (state, action) => {
      errorHandling(action.payload);
    },
    [deleteRating.fulfilled.type]: (state, action) => {
      const { value, recipieId } = action.payload;
      const recipieIdx = state.recipies.findIndex(
        (recipie) => recipie._id === recipieId
      );

      state.recipies[recipieIdx].votes -= value;
      state.recipies[recipieIdx].votesCount -= 1;
      state.recipies[recipieIdx].ratings.length = 0;
    },
    [deleteRating.rejected.type]: (state, action) => {
      errorHandling(action.payload);
    },
  },
});

export const {
  setCurrentPage,
  setItemsPerPage,
  setItemsOrder,
  setRecipieName,
} = recipiesSlice.actions;

export default recipiesSlice.reducer;
