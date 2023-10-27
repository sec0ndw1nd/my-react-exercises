import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  isShowing: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    decrease(state, action) {
      state.counter -= action.payload;
    },
    toggle(state) {
      state.isShowing = !state.isShowing;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
