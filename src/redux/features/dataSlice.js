import {createSlice} from '@reduxjs/toolkit';

const initalDataLoad = {
  number: 20,
};

const dataSlice = createSlice({
  name: 'loadMoreData',
  initialState: initalDataLoad,
  reducers: {
    setDataLoad(state) {
      state.number += 10;
    },
    unSetDataLoad(state) {
      state.number -= 10;
    },
  },
});

export const {setDataLoad, unSetDataLoad} = dataSlice.actions;

export default dataSlice.reducer;
