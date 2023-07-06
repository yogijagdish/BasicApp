import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: 'no data',
};

const initialData = {
  username: '',
  title: '',
  email: '',
  mobile: '',
  twitter: '',
};

const userDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const {setData} = userDataSlice.actions;

export default userDataSlice.reducer;
