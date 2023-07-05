import {configureStore} from '@reduxjs/toolkit';
import messageReducer from '../features/slice/messageSlice';

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});
