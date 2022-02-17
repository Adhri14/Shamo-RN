import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Shoes1} from '../assets';

const ItemProduct = ({onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <View style={styles.content}>
        <Image source={Shoes1} style={styles.image} />
      </View>
      <View>
        <Text style={styles.category}>Football</Text>
        <Text style={styles.title}>Predator 20.3 Firm Ground</Text>
        <Text style={styles.price}>$68,47</Text>
      </View>
    </Pressable>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 321,
  },
  content: {
    width: 120,
    height: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECEDEF',
    overflow: 'hidden',
    marginRight: 12,
  },
  image: {
    width: 100,
    height: 60,
  },
  category: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#999',
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#F1F0F2',
    marginRight: 110,
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#2C96F1',
  },
});
