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

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (data: {}) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/users/forgot_password",
        data
      );

      console.log(response.data);

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (data: { password: string; token: string }) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/users/reset_password/${data.token}`,
        { password: data.password }
      );

      console.log("sucess");

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUserData: (state, { payload }) => {
      const { _id, email, username, token } = payload;

      state.isLogged = true;
      state.userId = _id;
      state.userEmail = email;
      state.userName = username;
      state.userToken = token;

      axios.defaults.headers.authorization = `Bearer ${token}`;
    },
  },
  extraReducers: {
    [register.pending.type]: (state) => {
      console.log("Pending");
    },
    [register.fulfilled.type]: (state, action) => {
      userSlice.caseReducers.setUserData(state, action);
    },
    [register.rejected.type]: (state, action) => {
      console.log("Rejected");
    },
    [login.pending.type]: (state) => {
      console.log("Pending");
    },
    [login.fulfilled.type]: (state, action) => {
      userSlice.caseReducers.setUserData(state, action);
    },
    [login.rejected.type]: (state, action) => {
      console.log("Rejected");
    },
    [forgotPassword.pending.type]: (state) => {
      console.log("Pending");
    },
    [forgotPassword.fulfilled.type]: (state, action) => {
      console.log(action.payload);
      console.log(userSlice);
    },
    [forgotPassword.rejected.type]: (state, action) => {
      console.log("Rejected");
    },
  },
});

export default userSlice.reducer;
