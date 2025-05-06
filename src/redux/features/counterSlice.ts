import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    add: (state, actions) => {
      state.count = state.count + 1;
    },
    subtract: (state, actions) => {
      state.count = state.count - 1;
    },
  },
});

export const { add, subtract } = counterSlice.actions;
export default counterSlice.reducer;
