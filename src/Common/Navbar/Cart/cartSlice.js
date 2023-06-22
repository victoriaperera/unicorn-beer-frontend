import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [], totalAmount: 0, totalQuantity: 0 },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload.totalAmount;
    },
    setTotalQuantity: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
    },
    addToCart: (state, action) => {
      const { product, counter } = action.payload;

      const itemInCart = state.products.find((item) => item._id === product.id);
      counter === 1
        ? itemInCart
          ? itemInCart.quantity++
          : state.products.push({ ...product, quantity: 1 })
        : itemInCart
        ? (itemInCart.quantity += counter)
        : state.products.push({ ...product, quantity: counter });
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item._id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item._id === action.payload);
      item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
    },
    removeItem: (state, action) => {
      const removeItem = state.products.filter((item) => item._id !== action.payload);
      state.products = removeItem;
    },
    clearCart: (state) => {
      state.products = [];
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
  setTotalAmount,
  setTotalQuantity,
} = actions;

export default reducer;
