import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    token: null,
    data: [],
  },
  reducers: {
    setAdminToken(state, action) {
      state.admin = action.payload;
    },
    clearAdminToken: (state) => {
      state.admin = null;
      state.data = [];
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    deleteProduct: (state, action) => {

    },
    editProduct: (state, action) => {

    },
    createProduct: (state, action) => {

    }
  },
});

export const { setAdminToken, clearAdminToken, setData, deleteProduct, editProduct, createProduct } = adminSlice.actions;
export default adminSlice.reducer;
