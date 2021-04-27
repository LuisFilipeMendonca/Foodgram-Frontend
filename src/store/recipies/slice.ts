import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { recipiesInitialState } from "./initialState";
import { userInitialState } from "../user/initialState";
import { IRecipie } from "../../interfaces/Recipies";
import errorHandling from "../../utils/errorHandling";
import { logoutUser } from "../user/slice";

export const fetchRecipies = createAsyncThunk(
  "recipies/fetchRecipies",
  async (_, { getState }) => {
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

export const addRecipie = createAsyncThunk(
  "recipies/addRecipie",
  async (data: FormData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/recipies",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      return response.data;
    } catch (e) {
      const { status, data } = e.response;

      if (status === 401) {
        dispatch(logoutUser());
      }

      return rejectWithValue({ status, data });
    }
  }
);

export const editRecipie = createAsyncThunk(
  "recipies/editRecipie",
  async (
    data: { formData: FormData; id: string },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const { formData, id } = data;

      const response = await axios.put(
        `http://localhost:3001/recipies/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      return response.data;
    } catch (e) {
      const { status, data } = e.response;

      if (status === 401) {
        dispatch(logoutUser());
      }

      return rejectWithValue({ status, data });
    }
  }
);

export const deleteRecipie = createAsyncThunk(
  "recipies/deleteRecipie",
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`http://localhost:3001/recipies/${id}`);

      return { id };
    } catch (e) {
      const { status, data } = e.response;

      if (status === 401) {
        dispatch(logoutUser());
      }

      return rejectWithValue({ status, data });
    }
  }
);

export const addFavorites = createAsyncThunk(
  "recipies/addFavorite",
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/recipies/add_favorites/${id}`
      );

      return { ...response.data, id };
    } catch (e) {
      const { status, data } = e.response;
      if (status === 401) {
        dispatch(logoutUser());
      }
      return rejectWithValue({ status, data });
    }
  }
);

export const removeFavorites = createAsyncThunk(
  "recipies/removeFavorites",
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/recipies/delete_favorites/${id}`
      );

      return { ...response.data, id };
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
    setUserRecipies: (
      state,
      action: PayloadAction<{ recipies: IRecipie[]; favorites: IRecipie[] }>
    ) => {
      const { recipies, favorites } = action.payload;
      console.log(recipies);
      state.userRecipies = recipies;
      state.userFavorites = favorites;
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
    [deleteRecipie.fulfilled.type]: (state, action) => {
      const { id } = action.payload;
      const recipies = state.userRecipies.filter(
        (recipie) => recipie._id !== id
      );
      state.userRecipies = recipies;
    },
    [deleteRecipie.rejected.type]: (state, action) => {
      errorHandling(action.payload);
    },
    [addRecipie.fulfilled.type]: (state, action) => {
      state.userRecipies.unshift(action.payload);
    },
    [addRecipie.rejected.type]: (state, action) => {
      return errorHandling(action.payload);
    },
    [editRecipie.fulfilled.type]: (state, action) => {
      const { _id } = action.payload;

      const recipieIdx = state.userRecipies.findIndex(
        (recipie) => recipie._id === _id
      );
      state.userRecipies[recipieIdx] = action.payload;
    },
    [editRecipie.rejected.type]: (state, action) => {
      return errorHandling(action.payload);
    },
    [addFavorites.fulfilled.type]: (state, action) => {
      const { id } = action.payload;

      const recipie = state.recipies.find((recipie) => recipie._id === id);
      state.userFavorites.unshift(recipie!);
    },
    [addFavorites.rejected.type]: (state, action) => {
      return errorHandling(action.payload);
    },
    [removeFavorites.fulfilled.type]: (state, action) => {
      const { id } = action.payload;

      state.userFavorites = state.userFavorites.filter(
        (recipie) => recipie._id !== id
      );
    },
    [removeFavorites.rejected.type]: (state, action) => {
      return errorHandling(action.payload);
    },
  },
});

export const {
  setCurrentPage,
  setItemsPerPage,
  setItemsOrder,
  setRecipieName,
  setUserRecipies,
} = recipiesSlice.actions;

export default recipiesSlice.reducer;
