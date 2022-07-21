import usersDrop from "./assignSlice";
import allTask from "./alltask";
import editTask from "./editTask";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    usersDrop,
    allTask,
    editTask,
  },
});
