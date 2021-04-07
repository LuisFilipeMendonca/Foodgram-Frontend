import { configureStore } from "@reduxjs/toolkit";

import recipiesReducer from "./recipies/slice";

export const store = configureStore({
  reducer: {
    recipies: recipiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
