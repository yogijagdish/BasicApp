import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//   data: 'no data',
// };

const initialData = {
  username: 'no username set',
  title: 'no title set',
  email: 'no email set',
  mobile: 'no mobile no set',
  twitter: 'no twitter set',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcU50X1UOeDaphmUyD6T8ROKs-HjeirpOoapiWbC9cLAqewFy1gthrgUTB9E7nKjRwOVk&usqp=CAU',
};

const userDataSlice = createSlice({
  name: 'data',
  initialState: initialData,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setMobile(state, action) {
      state.mobile = action.payload;
    },
    setTwitter(state, action) {
      state.twitter = action.payload;
    },
    setImage(state, action) {
      state.image = action.payload;
    },
  },
});

export const {
  setUsername,
  setTitle,
  setEmail,
  setMobile,
  setTwitter,
  setImage,
} = userDataSlice.actions;

export default userDataSlice.reducer;
