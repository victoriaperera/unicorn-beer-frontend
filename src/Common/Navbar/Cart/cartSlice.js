import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: null,
  reducers: {
    setToken(state, action) {
      return action.payload;
    },
    clearToken: (state) => {
      return null;
    },
  },
});

const { actions, reducer } = cartSlice;
export const { setToken, clearToken } = actions;
export default reducer;
