import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconFavorite, Shoes1, Shoes4} from '../assets';

const ItemListWhislist = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={Shoes4} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Predator 20.3 Firm Ground Boots</Text>
          <Text style={styles.price}>$68,47</Text>
        </View>
      </View>
      <IconFavorite />
    </View>
  );
};

export default ItemListWhislist;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#252836',
    borderRadius: 12,
    padding: 12,
  },
  image: {
    width: 60,
    height: 60,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    width: 180,
    marginLeft: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#F1F0F2',
  },
  price: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#2C96F1',
  },
});
