import axios from "../../utils/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { userInitialState } from "./initialState";
import { setUserRecipies } from "../recipies/slice";

import errorHandling from "../../utils/errorHandling";
import { toast } from "react-toastify";

export const register = createAsyncThunk(
  "user/register",
  async (data: {}, { rejectWithValue }) => {
    try {
      const response = await axios.post("users", data);

      return response.data;
    } catch (e) {
      const { status, data } = e.response;
      return rejectWithValue({ status, data });
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (data: {}, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("token", data);

      const { recipies, favorites } = response.data;
      dispatch(setUserRecipies({ recipies, favorites }));

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
      const response = await axios.post("users/forgot_password", data);

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
      const response = await axios.put(`users/reset_password/${data.token}`, {
        password: data.password,
      });

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
      const response = await axios("users");

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
      state.isLoading = true;
    },
    [register.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      userSlice.caseReducers.setUserData(state, action);
    },
    [register.rejected.type]: (state, action) => {
      state.isLoading = false;
      errorHandling(action.payload);
    },
    [login.pending.type]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      userSlice.caseReducers.setUserData(state, action);
    },
    [login.rejected.type]: (state, action) => {
      state.isLoading = false;
      errorHandling(action.payload);
    },
    [forgotPassword.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [forgotPassword.fulfilled.type]: (state, action) => {
      const { message } = action.payload;
      toast.success(message);
      state.isLoading = false;
    },
    [forgotPassword.rejected.type]: (state, action) => {
      state.isLoading = false;
      return errorHandling(action.payload);
    },
    [resetPassword.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [resetPassword.fulfilled.type]: (state, action) => {
      const { message } = action.payload;
      toast.success(message);
      state.isLoading = false;
    },
    [resetPassword.rejected.type]: (state, action) => {
      state.isLoading = false;
      return errorHandling(action.payload);
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
