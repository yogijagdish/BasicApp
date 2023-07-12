import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {apiHandle} from '../services/apiHandle';
import userDataReducer from '../features/userDataSlice';
import cartSlice from '../features/cartSlice';
import dataSlice from '../features/dataSlice';

export default configureStore({
  reducer: {
    data: userDataReducer,
    addToCart: cartSlice,
    loadMoreData: dataSlice,
    [apiHandle.reducerPath]: apiHandle.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiHandle.middleware),
});

setupListeners(configureStore.dispatch);
