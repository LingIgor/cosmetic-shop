import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      return (state = [...state, action.payload]);
    },
    removeFromCart(state, action) {
      return (state = state.filter(product => product !== action.payload));
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;