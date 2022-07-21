import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const usersDrop = createSlice({
  name: "assign",
  initialState,
  reducers: {
    setUsersDrop(state, action) {
      state.data = action.payload;
    },
  },
});
export const { setUsersDrop } = usersDrop.actions;
export default usersDrop.reducer;
