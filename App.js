import React from 'react';

import Main from './Main';

import {enableLatestRenderer} from 'react-native-maps';
enableLatestRenderer();
import {Provider} from 'react-redux';
import store from './src/redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
