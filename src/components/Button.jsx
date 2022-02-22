import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

const Button = ({onPress, title, type, disable}) => {
  if (type === 'btn-sm') {
    <Pressable
      style={[styles.button, {paddingHorizontal: 24}]}
      onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </Pressable>;
  }
  if (disable) {
    return (
      <View style={styles.buttonLoading} onPress={onPress}>
        <ActivityIndicator size={20} color="#fff" />
        <Text style={[styles.textButton, {marginLeft: 10}]}>Loading</Text>
      </View>
    );
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
  buttonLoading: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6C5ECF',
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#F1F0F2',
  },
});
