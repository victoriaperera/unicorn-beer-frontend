import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: { products: [], filter: "all" },
  reducers: {
    setProductList(state, action) {
      state.products = action.payload.products;
    },
    setFilter(state, action) {
      state.filter = action.payload.filter;
    },
    clearFilter(state, action) {
      state.filter = "all";
    },
  },
});

const { actions, reducer } = shopSlice;
export const { setProductList, setFilter, clearFilter } = actions;
export default reducer;
