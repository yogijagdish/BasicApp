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
  },
});

export const {setItemToCart} = cartSlice.actions;

export default cartSlice.reducer;
