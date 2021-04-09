import { configureStore } from "@reduxjs/toolkit";

import recipiesReducer from "./recipies/slice";
import locationReducer from "./location/slice";

export const store = configureStore({
  reducer: {
    recipies: recipiesReducer,
    location: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
