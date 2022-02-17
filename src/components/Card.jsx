import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Shoes1} from '../assets';

const Card = ({img, category, title, price, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View>
        <Image source={img} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F0F2',
    width: 215,
    height: 278,
    borderRadius: 20,
    paddingTop: 30,
    paddingBottom: 20,
    marginRight: 30,
  },
  image: {
    width: 215,
    height: 120,
  },
  content: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  category: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#999',
    marginBottom: 6,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#2E2E2E',
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#2C96F1',
  },
});
