import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    productList: [],
    usersList: [],
  },
  reducers: {
    setAdminToken(state, action) {
      return action.payload;
    },
    clearAdminToken: (state) => {
      return null;
    },
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setUserList: (state, action) => {
      state.usersList = action.payload;
    },
  },
});

export const { setAdminToken, clearAdminToken, setProductList, setUserList } = adminSlice.actions;
export default adminSlice.reducer;
