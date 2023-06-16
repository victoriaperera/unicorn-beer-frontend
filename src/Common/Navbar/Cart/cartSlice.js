import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
    addToCart: (state, action) => {
      const itemInCart = state.find((item) => item.id === action.payload.id);
      itemInCart ? itemInCart.quantity++ : state.push({ ...action.payload, quantity: 1 });
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
    clearCart: (state) => {
      return [];
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem, clearCart } = actions;
export default reducer;
