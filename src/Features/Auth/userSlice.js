import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setToken: (state, action) => action.payload,
    clearToken: (state) => null,
    updateUserData: (state, action) => action.payload,
  },
});

const { actions, reducer } = userSlice;
export const { setToken, clearToken, updateUserData } = actions;
export default reducer;
