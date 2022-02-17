import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {IconEmail} from '../assets';

const TextInputCustom = ({
  value,
  onChangeText,
  isPassword,
  placeholder,
  children,
  label,
  autoCapitalize = 'none',
  keyboardType,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {children}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#504F5E"
          value={value}
          onChangeText={onChangeText}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          // keyboardType=''
          secureTextEntry={isPassword}
        />
      </View>
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#F1F0F2',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B2937',
    paddingVertical: 15,
    paddingHorizontal: 17,
    borderRadius: 12,
    marginTop: 12,
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: 16,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#F1F0F2',
    padding: 0,
    // backgroundColor: 'yellow',
    // width: '88%',
  },
});
