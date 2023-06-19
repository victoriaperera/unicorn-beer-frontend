import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProductList(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = productSlice;
export const { setProductList } = actions;
export default reducer;
