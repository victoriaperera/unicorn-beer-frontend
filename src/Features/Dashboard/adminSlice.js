import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: [],
  reducers: {
    setProductList(state, action) {
      return action.payload;
    },
  },
});

export const { setProductList } = adminSlice.actions;
export default adminSlice.reducer;
