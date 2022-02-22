import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import Router from './src/router';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage
        position="bottom"
        style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
      />
    </NavigationContainer>
  );
}
