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
      state.containers = [];
    },
    setToggleStyle(state, action) {
      state.toggleCreateStyle = action.payload;
    },
    setToggleProduct(state, action) {
      state.toggleCreateProduct = action.payload;
    },
    setToggleDelete(state, action) {
      console.log(action.payload);
      state.toggleDeleteProduct = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== user.payload);
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    createProduct: (state, action) => {
      const newProduct = action.payload;
      state.products.push(newProduct);
    },
    updateProduct: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.productId
          ? { ...product, price: action.payload.price, stock: action.payload.stock }
          : product,
      );
    },
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
} = adminSlice.actions;
export default adminSlice.reducer;
