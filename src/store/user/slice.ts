import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { userInitialState } from "./initialState";
import { setUserRecipies } from "../recipies/slice";

import errorHandling from "../../utils/errorHandling";

export const register = createAsyncThunk(
  "user/register",
  async (data: {}, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3001/users", data);

      return response.data;
    } catch (e) {
      const { status, data } = e.response;
      return rejectWithValue({ status, data });
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (data: {}, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3001/token", data);

      return response.data;
    } catch (e) {
      const { status, data } = e.response;
      return rejectWithValue({ status, data });
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (data: {}, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/users/forgot_password",
        data
      );

      return response.data;
    } catch (e) {
      const { status, data } = e.response;
      return rejectWithValue({ status, data });
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (data: { password: string; token: string }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/users/reset_password/${data.token}`,
        { password: data.password }
      );

      return response.data;
    } catch (e) {
      const { status, data } = e.response;
      return rejectWithValue({ status, data });
    }
  }
);

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (token: string, { rejectWithValue, getState, dispatch }) => {
    const { user } = getState() as { user: typeof userInitialState };
    try {
      axios.defaults.headers.authorization = `Bearer ${token}`;
      const response = await axios("http://localhost:3001/users");

      const { recipies, favorites } = response.data;

      dispatch(setUserRecipies({ recipies, favorites }));

      return { ...response.data, token };
    } catch (e) {
      const { status, data } = e.response;
      return rejectWithValue({ status, data, user });
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUserData: (state, { payload }) => {
      const { _id, email, username, token, recipies, favorites } = payload;

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
    logoutUser: (state) => {
      state.isLogged = false;
      state.userId = null;
      state.userEmail = null;
      state.userName = null;
      state.userToken = null;
      state.isAppLoading = false;
      delete axios.defaults.headers.authorization;
      localStorage.removeItem("foodgram");
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
      errorHandling(action.payload);
    },
    [login.pending.type]: (state) => {
      console.log("Pending");
    },
    [login.fulfilled.type]: (state, action) => {
      userSlice.caseReducers.setUserData(state, action);
    },
    [login.rejected.type]: (state, action) => {
      errorHandling(action.payload);
    },
    [forgotPassword.pending.type]: (state) => {
      console.log("Pending");
    },
    [forgotPassword.fulfilled.type]: (state, action) => {
      console.log(action.payload);
      console.log(userSlice);
    },
    [forgotPassword.rejected.type]: (state, action) => {
      errorHandling(action.payload);
    },
    [getUserData.fulfilled.type]: (state, action) => {
      userSlice.caseReducers.setUserData(state, action);
    },
    [getUserData.rejected.type]: (state, action) => {
      if (action.payload.status === 401) {
        userSlice.caseReducers.logoutUser(state);
      }
      errorHandling(action.payload);
    },
  },
});

export const { userNotLogged, logoutUser } = userSlice.actions;

export default userSlice.reducer;
