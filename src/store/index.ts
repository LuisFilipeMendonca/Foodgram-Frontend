import { configureStore } from "@reduxjs/toolkit";

import recipiesReducer from "./recipies/slice";
import locationReducer from "./location/slice";
import userReducer from "./user/slice";

export const store = configureStore({
  reducer: {
    recipies: recipiesReducer,
    location: locationReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
