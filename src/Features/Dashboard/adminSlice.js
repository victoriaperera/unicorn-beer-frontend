// adminSlice.js
import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    token: null,
    orders: [],
    products: [],
    product: null,
    users: [],
    styles: [],
    admins: [],
    toggleCreateStyle: false,
    toggleDeleteStyle: false,
    toggleCreateProduct: false,
    toggleDeleteProduct: false,
  },
  reducers: {
    setAdminToken(state, action) {
      state.token = action.payload;
    },
    setAdmins(state, action) {
      state.admins = action.payload;
    },
    createAdmin(state, action) {
      state.admins.push(action.payload);
    },
    deleteAdmin(state, action) {
      state.admins = state.admins.filter((admin) => admin.id !== action.payload);
    },
    updateAdmin(state, action) {
      state.admins = state.admins.map((admin) =>
        admin.id === action.payload.id ? { ...action.payload } : admin,
      );
    },
    clearAdminToken: (state) => {
      state.token = null;
      state.orders = [];
      state.products = [];
      state.users = [];
      state.styles = [];
    },
    setToggleStyle(state, action) {
      state.toggleCreateStyle = action.payload;
    },
    setToggleDeleteStyle(state, action) {
      state.toggleDeleteStyle = action.payload;
    },
    setToggleProduct(state, action) {
      state.toggleCreateProduct = action.payload;
    },
    setToggleDelete(state, action) {
      state.toggleDeleteProduct = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user._id !== action.payload);
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },

    createProduct: (state, action) => {
      const newProduct = action.payload;

      state.products.push(newProduct);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const product = state.products.find((product) => product.id === action.payload.id);
      const productIndex = state.products.indexOf(product);
      state.products[productIndex].stock = action.payload.stock;
    },
    setStyles: (state, action) => {
      state.styles = action.payload;
    },
    createStyle: (state, action) => {
      state.styles.push(action.payload);
    },
    updateStyle: (state, action) => {
      const style = state.styles.find((style) => style.id === action.payload.id);

      const styleIndex = state.styles.indexOf(style);
      state.styles[styleIndex] = action.payload;
    },
    deleteStyle: (state, action) => {
      state.styles = state.styles.filter((style) => style._id !== action.payload);
    },
    updateOrderStatus: (state, action) => {
      const newOrder = action.payload;
      const order = state.orders.find((order) => order.id === newOrder.id);
      if (order) {
        order.status = newOrder.status;
        const orderIndex = state.orders.indexOf(order);
        state.orders[orderIndex] = order;
      }
    },
  },
});

export const {
  setAdminToken,
  setAdmins,
  createAdmin,
  deleteAdmin,
  updateAdmin,
  clearAdminToken,
  setOrders,
  setUsers,
  deleteUser,
  setProducts,
  setProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  setStyles,
  createStyle,
  updateStyle,
  deleteStyle,
  updateOrderStatus,
  setToggleStyle,
  setToggleProduct,
  setToggleDelete,
  setToggleDeleteStyle,
} = adminSlice.actions;
export default adminSlice.reducer;
