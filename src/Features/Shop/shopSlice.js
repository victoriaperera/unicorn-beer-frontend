import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: { products: [], filter: "all", fromCheckOut: false },
  reducers: {
    setProductList(state, action) {
      state.products = action.payload.products;
    },
    setFilter(state, action) {
      state.filter = action.payload.filter;
    },
    fromCheckOut(state, action) {
      state.fromCheckOut = true;
    },
    clearFilter(state, action) {
      state.filter = "all";
    },
  },
});

const { actions, reducer } = shopSlice;
export const { setProductList, setFilter, clearFilter, fromCheckOut } = actions;
export default reducer;
