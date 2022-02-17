import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const TextInputUnderline = ({value, onChangeText, placeholder, label}) => {
  const [isFocus, setIsFocus] = useState('#999');
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999999"
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, {borderBottomColor: isFocus}]}
        onFocus={() => setIsFocus('#F1F0F2')}
        onBlur={() => setIsFocus('#999')}
      />
    </View>
  );
};

export default TextInputUnderline;

const styles = StyleSheet.create({
  title: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#999',
    marginBottom: 4,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 4,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#F1F0F2',
  },
});
