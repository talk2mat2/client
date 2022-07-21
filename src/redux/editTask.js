import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit: false,
  editContent: {},
};

const editTask = createSlice({
  name: "editTask",
  initialState,
  reducers: {
    startEdit(state, action) {
      state.edit = true;
      state.editContent = action.payload;
    },
    stoptEdit(state, action) {
      state.edit = false;
      state.editContent = {};
    },
  },
});
export const { startEdit, stoptEdit } = editTask.actions;
export default editTask.reducer;
