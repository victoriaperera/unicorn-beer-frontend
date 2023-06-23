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
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setStyles: (state, action) => {
      state.styles = action.payload;
    },
    createProduct: (state, action) => {
      console.log(action.payload);
      //state.products = [...state.products, action.payload]
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action) => {},
  },
});

export const {
  setAdminToken,
  clearAdminToken,
  setOrders,
  setProducts,
  setUsers,
  setStyles,
  createProduct,
  deleteProduct,
  updateProduct,
} = adminSlice.actions;
export default adminSlice.reducer;
