import React from 'react';
import {View, Text} from 'react-native';
import SplashScreen from './src/pages/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
