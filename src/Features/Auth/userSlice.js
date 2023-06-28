import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setToken(state, action) {
      return action.payload;
    },
    clearToken: (state) => {
      return null;
    },
    updateUserData(state, action) {
      const user = action.payload.user;
      state.shippingAddress = user.shippingAddress;
      state.address = user.address;
      state.phone = user.phone;
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, clearToken, updateUserData } = actions;
export default reducer;
