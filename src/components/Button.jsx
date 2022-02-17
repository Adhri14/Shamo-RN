import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({onPress, title, type}) => {
  if (type === 'btn-sm') {
    <Pressable
      style={[styles.button, {paddingHorizontal: 24}]}
      onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </Pressable>;
  }
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6C5ECF',
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 10,
  },
  textButton: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#F1F0F2',
  },
});
