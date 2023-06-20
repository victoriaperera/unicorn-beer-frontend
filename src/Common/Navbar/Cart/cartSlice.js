import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [], totalAmount: 0 },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },

    setTotal: (state, action) => {
      state.totalAmount = action.payload.totalAmount;
    },

    addToCart: (state, action) => {
      const itemInCart = state.products.find((item) => item.id === action.payload.id);
      itemInCart ? itemInCart.quantity++ : state.products.push({ ...action.payload, quantity: 1 });
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
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
  setProducts,
  setTotal,
} = actions;
export default reducer;
