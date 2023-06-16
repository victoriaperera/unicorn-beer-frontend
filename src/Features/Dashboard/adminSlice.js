import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: true,
  reducers: {
    toggleNavs(state, action) {
      return (state = !state);
    },
  },
});

const { actions, reducer } = adminSlice;
export const { toggleNavs } = actions;
export default reducer;
