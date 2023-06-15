import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: null,
  reducers: {
    setOrder(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = orderSlice;
export const {} = actions;
export default reducer;
