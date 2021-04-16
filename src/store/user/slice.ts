import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { userInitialState } from "./initialState";

export const register = createAsyncThunk("user/register", async (data: {}) => {
  try {
    const response = await axios.post("http://localhost:3001/users", data);

    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const login = createAsyncThunk("user/login", async (data: {}) => {
  try {
    const response = await axios.post("http://localhost:3001/token", data);

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
      const { _id, email, username, token } = action.payload;

      state.isLogged = true;
      state.userId = _id;
      state.userEmail = email;
      state.userName = username;
      state.userToken = token;

      axios.defaults.headers.authorization = `Bearer ${token}`;
    },
    [register.rejected.type]: (state, action) => {
      console.log("Rejected");
    },
    [login.pending.type]: (state) => {
      console.log("Pending");
    },
    [login.fulfilled.type]: (state, action) => {
      const { _id, email, username, token } = action.payload;

      state.isLogged = true;
      state.userId = _id;
      state.userEmail = email;
      state.userName = username;
      state.userToken = token;

      axios.defaults.headers.authorization = `Bearer ${token}`;
      console.log(state);
    },
    [login.rejected.type]: (state, action) => {
      console.log("Rejected");
    },
  },
});

export default userSlice.reducer;
