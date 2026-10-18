import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../fetures/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
