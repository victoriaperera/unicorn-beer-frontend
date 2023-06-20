import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    productList: [],
    usersList: [],
  },
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setUserList: (state, action) => {
      state.usersList = action.payload;
    },
  },
});

export const { setProductList, setUserList } = adminSlice.actions;
export default adminSlice.reducer;
