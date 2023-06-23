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
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    createProduct: (state, action) => {},
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    editProduct: (state, action) => {},
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setStyles: (state, action) => {
      state.styles = action.payload;
    },
    createStyle: (state, action) => {},
    deleteStyle: (state, action) => {
      state.styles = state.styles.filter((style) => style.id !== action.payload);
    },
    editStyle: (state, action) => {},
  },
});

export const {
  setAdminToken,
  clearAdminToken,
  setOrders,
  setProducts,
  setUsers,
  setStyles,
  createStyle,
  deleteStyle,
  createProduct,
  deleteProduct,
  editProduct,
} = adminSlice.actions;
export default adminSlice.reducer;
