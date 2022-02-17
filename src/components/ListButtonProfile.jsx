import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconArrow} from '../assets';

const ListButtonProfile = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <IconArrow />
      </View>
    </Pressable>
  );
};

export default ListButtonProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#999',
  },
});
