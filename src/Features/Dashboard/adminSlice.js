import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    token: null,
    orders: [],
    products: [],
    users: [],
    styles: [],
  },
  reducers: {
    setAdminToken(state, action) {
      state.token = action.payload;
    },
    clearAdminToken: (state) => {
      state.token = null;
      state.orders = [];
      state.products = [];
      state.users = [];
      state.styles = [];
      state.containers = [];
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    createProduct: (state, action) => {
      console.log(action.payload);
      //state.products = [...state.products, action.payload]
    },
    updateProduct: (state, action) => {},
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },

    setStyles: (state, action) => {
      state.styles = action.payload;
    },
    createStyle: (state, action) => {},
    updateStyle: (state, action) => {},
    deleteStyle: (state, action) => {
      state.styles = state.styles.filter((style) => style.id !== action.payload);
    },
  },
});

export const {
  setAdminToken,
  clearAdminToken,
  setOrders,
  setUsers,
  setProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  setStyles,
  createStyle,
  updateStyle,
  deleteStyle,
} = adminSlice.actions;
export default adminSlice.reducer;
