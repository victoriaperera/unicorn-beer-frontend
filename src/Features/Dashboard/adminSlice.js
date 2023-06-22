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
  },
});

export const { setAdminToken, clearAdminToken, setData } = adminSlice.actions;
export default adminSlice.reducer;
