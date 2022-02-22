import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {IconShamo} from '../assets';
import {getData} from '../utils/localstorage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        if (res) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <StatusBar barStyle="light-content" backgroundColor="#1F1D2B" />
      <IconShamo />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1F1D2B',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
