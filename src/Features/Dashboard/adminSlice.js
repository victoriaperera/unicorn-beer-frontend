import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    data: [],
  },
  reducers: {
    setAdminToken(state, action) {
      return action.payload;
    },
    clearAdminToken: (state) => {
      return null;
    },

    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAdminToken, clearAdminToken, setdata } = adminSlice.actions;
export default adminSlice.reducer;
