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

export const deleteRecipie = createAsyncThunk(
  "user/deleteRecipie",
  async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/recipies/${id}`);

      return { id };
    } catch (e) {
      console.log(e);
    }
  }
);

export const addRecipie = createAsyncThunk(
  "recipies/addRecipie",
  async (data: FormData) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/recipies",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const editRecipie = createAsyncThunk(
  "recipies/editRecipie",
  async (data: { formData: FormData; id: string }) => {
    try {
      const { formData, id } = data;

      console.log("ola");

      const response = await axios.put(
        `http://localhost:3001/recipies/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
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
      const { _id, email, username, token, recipies } = payload;

      state.isLogged = true;
      state.userId = _id;
      state.userEmail = email;
      state.userName = username;
      state.userToken = token;
      state.userRecipies = recipies;

      if (!axios.defaults.headers.authorization) {
        axios.defaults.headers.authorization = `Bearer ${token}`;
      }

      if (state.isAppLoading) {
        state.isAppLoading = false;
      }

      localStorage.setItem("foodgram", token);
    },
    userNotLogged: (state) => {
      console.log("ola");
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
    [deleteRecipie.fulfilled.type]: (state, action) => {
      const { id } = action.payload;
      const recipies = state.userRecipies.filter(
        (recipie) => recipie._id !== id
      );
      state.userRecipies = recipies;
    },
    [deleteRecipie.rejected.type]: (state, action) => {
      console.log("Rejected");
    },
    [addRecipie.fulfilled.type]: (state, action) => {
      state.userRecipies.unshift(action.payload);
    },
    [addRecipie.rejected.type]: (state) => {},
    [editRecipie.fulfilled.type]: (state, action) => {
      const { _id } = action.payload;

      const recipieIdx = state.userRecipies.findIndex(
        (recipie) => recipie._id === _id
      );
      state.userRecipies[recipieIdx] = action.payload;
    },
    [editRecipie.rejected.type]: (state) => {},
  },
});

export const { userNotLogged } = userSlice.actions;

export default userSlice.reducer;
