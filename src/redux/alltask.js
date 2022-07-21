import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const allTask = createSlice({
  name: "alltask",
  initialState,
  reducers: {
    setallTask(state, action) {
      state.data = action.payload;
    },
  },
});
export const { setallTask } = allTask.actions;
export default allTask.reducer;
