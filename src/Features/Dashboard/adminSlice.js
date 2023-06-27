// adminSlice.js
import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    token: null,
    orders: [],
    products: [],
    users: [],
    styles: [],
    toggleCreateStyle: false,
    toggleDeleteStyle: false,
    toggleCreateProduct: false,
    toggleDeleteProduct: false,
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
      const deletedUser = action.payload;
      state.users = state.users.filter((user) => user.id !== deletedUser);
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    createProduct: (state, action) => {
      const newProduct = action.payload;
      console.log(action.payload);
      state.products.push(newProduct);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const updatedProduct = action.payload;
      const product = state.products.find((product) => product.id === updatedProduct.id);
      if (product) {
        product.status = updatedProduct.status;
        const productIndex = state.products.indexOf(product);
        state.products[productIndex] = product;
      }
    },
    setStyles: (state, action) => {
      state.styles = action.payload;
    },
    createStyle: (state, action) => {
      state.styles.push(action.payload);
    },
    updateStyle: (state, action) => {
      const updatedStyle = action.payload;
      const style = state.styles.find((style) => style.id === updatedStyle.id);
      if (style) {
        style.status = updatedStyle.status;
        const styleIndex = state.styles.indexOf(style);
        state.styles[styleIndex] = style;
      }
    },
    deleteStyle: (state, action) => {
      state.styles = state.styles.filter((style) => style.id !== action.payload);
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
  clearAdminToken,
  setOrders,
  setUsers,
  deleteUser,
  setProducts,
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
