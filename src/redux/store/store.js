import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {apiHandle} from '../services/apiHandle';
import userDataReducer from '../features/userDataSlice';

export default configureStore({
  reducer: {
    data: userDataReducer,
    [apiHandle.reducerPath]: apiHandle.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiHandle.middleware),
});

setupListeners(configureStore.dispatch);
