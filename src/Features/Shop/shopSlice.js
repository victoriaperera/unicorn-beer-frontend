import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: [],
  reducers: {
    setProductList(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = shopSlice;
export const { setProductList } = actions;
export default reducer;
