import { createSlice } from '@reduxjs/toolkit';

export const flowSlice = createSlice({
  name: 'flow',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = flowSlice.actions;

export default flowSlice.reducer;
