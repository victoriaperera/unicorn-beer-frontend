import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: { products: [], filter: null },
  reducers: {
    setProductList(state, action) {
      return action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    clearFilter(state, action) {
      state.filter = null;
    },
  },
});

const { actions, reducer } = shopSlice;
export const { setProductList, setFilter, clearFilter } = actions;
export default reducer;
