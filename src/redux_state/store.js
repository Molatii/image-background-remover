import { configureStore } from "@reduxjs/toolkit";
import backgroundRemoverSlice from "./slices/backgroundRemoverSlice";

export const store = configureStore({
  reducer: {
    backgroundRemover: backgroundRemoverSlice,
  },
});
