import {configureStore} from '@reduxjs/toolkit';

import userDataReducer from '../features/userDataSlice';

export default configureStore({
  reducer: {
    data: userDataReducer,
  },
});
