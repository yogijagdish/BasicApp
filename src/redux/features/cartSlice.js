import {createSlice} from '@reduxjs/toolkit';

const initialItemCart = {
  id: [],
};

const cartSlice = createSlice({
  name: 'addToCart',
  initialState: initialItemCart,
  reducers: {
    setItemToCart(state, action) {
      state.id.push(action.payload);
    },
    unSetItemToCart(state, action) {
      state.id.splice(action.payload, 1);
    },
  },
});

export const {setItemToCart, unSetItemToCart} = cartSlice.actions;

export default cartSlice.reducer;
