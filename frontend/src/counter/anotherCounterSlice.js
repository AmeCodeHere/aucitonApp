import { createSlice } from "@reduxjs/toolkit";

export const anotherCounterSlice = createSlice({
  name: "anotherCounter",
  initialState: {
    value: 10, // Different initial value
  },
  reducers: {
    addFive: (state) => {
      state.value += 5;
    },
    reset: (state) => {
      state.value = 10;
    },
  },
});

export const { addFive, reset } = anotherCounterSlice.actions;

export default anotherCounterSlice.reducer;
