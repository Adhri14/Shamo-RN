import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButtonBack} from '../assets/icons';

const HeaderBack = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      {onPress ? (
        <Pressable style={styles.button} onPress={onPress}>
          <IconButtonBack />
        </Pressable>
      ) : (
        <View style={{width: 30, height: 30}} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={{width: 30, height: 30}} />
    </View>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1F1D2B',
    padding: 30,
    paddingTop: 50,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#F1F0F2',
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
