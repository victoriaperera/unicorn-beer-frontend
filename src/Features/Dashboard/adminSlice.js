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
      state.data = [];
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
    deleteProduct: (state, action) => {},
    editProduct: (state, action) => {},
    createProduct: (state, action) => {},
  },
});

export const {
  setAdminToken,
  clearAdminToken,
  setOrders,
  setProducts,
  setUsers,
  setStyles,
  deleteProduct,
  editProduct,
  createProduct,
} = adminSlice.actions;
export default adminSlice.reducer;
