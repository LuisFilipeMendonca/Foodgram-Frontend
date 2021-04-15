import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { userInitialState } from "./initialState";

export const register = createAsyncThunk("user/register", async (data: {}) => {
  try {
    const response = await axios.post("http://localhost:3001/users", data);

    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {},
  extraReducers: {
    [register.pending.type]: (state) => {
      console.log("Pending");
    },
    [register.fulfilled.type]: (state, action) => {
      console.log("Fulfilled");
      console.log(action);
    },
    [register.rejected.type]: (state, action) => {
      console.log("Rejected");
    },
  },
});

export default userSlice.reducer;
