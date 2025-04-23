import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/routes';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
};
