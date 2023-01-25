import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Router from './src/router';
  
const MainApp = () => {
  return (
    <Provider store={store}>
      <Router />
        <FlashMessage
          position="bottom"
          style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
        />
    </Provider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  );
}
