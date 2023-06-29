import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    products: [],
    filter: "all",
    fromCheckOut: false,
    toggleToastAdd: false,
    toggleToastRemove: false,
  },
  reducers: {
    setProductList(state, action) {
      state.products = action.payload.products;
    },
    setFilter(state, action) {
      state.filter = action.payload.filter;
    },
    fromCheckOut(state, action) {
      state.fromCheckOut = action.payload;
    },
    clearFilter(state, action) {
      state.filter = "all";
    },
    setToggleToastAdd(state, action) {
      const productName = action.payload;
      toast.success(`${productName} added to cart`, {
        icon: "🛒",
      });
    },
    setToggleToastRemove(state, action) {
      const productName = action.payload;
      toast.error(`${productName} removed from cart`, {
        icon: "❌",
      });
    },
  },
});

const { actions, reducer } = shopSlice;
export const {
  setProductList,
  setFilter,
  clearFilter,
  fromCheckOut,
  setToggleToastAdd,
  setToggleToastRemove,
} = actions;
export default reducer;
