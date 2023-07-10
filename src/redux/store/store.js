import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {apiHandle} from '../services/apiHandle';
import userDataReducer from '../features/userDataSlice';
import cartSlice from '../features/cartSlice';

export default configureStore({
  reducer: {
    data: userDataReducer,
    addToCart: cartSlice,
    [apiHandle.reducerPath]: apiHandle.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiHandle.middleware),
});

setupListeners(configureStore.dispatch);
