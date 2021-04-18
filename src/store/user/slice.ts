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

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (token: string) => {
    try {
      axios.defaults.headers.authorization = `Bearer ${token}`;
      const response = await axios("http://localhost:3001/users");

      return { ...response.data, token };
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

      if (!axios.defaults.headers.authorization) {
        axios.defaults.headers.authorization = `Bearer ${token}`;
      }

      if (state.isAppLoading) {
        state.isAppLoading = false;
      }

      localStorage.setItem("foodgram", token);
    },
    userNotLogged: (state) => {
      state.isAppLoading = false;
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
    [getUserData.pending.type]: (state) => {
      console.log("Pending");
    },
    [getUserData.fulfilled.type]: (state, action) => {
      userSlice.caseReducers.setUserData(state, action);
    },
    [getUserData.rejected.type]: (state, action) => {
      console.log("Rejected");
    },
  },
});

export const { userNotLogged } = userSlice.actions;

export default userSlice.reducer;
