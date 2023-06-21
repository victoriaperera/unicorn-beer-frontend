import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [], totalAmount: 0 },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products; //TODO: ver de borrar o usar
    },

    setTotal: (state, action) => {
      state.totalAmount = action.payload.totalAmount;
    },

    addToCart: (state, action) => {
      const itemInCart = state.products.find((item) => item.id === action.payload.id);
      itemInCart
        ? itemInCart.productQuantity++
        : state.products.push({ product: action.payload, productQuantity: 1 });
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.product.id === action.payload);
      item.productQuantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.product.id === action.payload);
      item.productQuantity === 1 ? (item.productQuantity = 1) : item.productQuantity--;
    },
    removeItem: (state, action) => {
      const removeItem = state.products.filter((item) => item.product.id !== action.payload);
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
  setTotal,
} = actions;

export default reducer;
