import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DmProfile} from '../assets';

const ItemListMessage = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <DmProfile />
          <View style={{marginLeft: 16, width: 200}}>
            <Text style={styles.title}>Shamo Chat Shop</Text>
            <Text style={styles.message} numberOfLines={1}>
              Halo apakah barang ini ready?
            </Text>
          </View>
        </View>
        <Text style={styles.time}>Now</Text>
      </View>
      <View style={styles.line} />
    </>
  );
};

export default ItemListMessage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#F1F0F2',
  },
  message: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#999999',
    marginTop: 2,
  },
  time: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#999999',
  },
  line: {
    height: 0.5,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#2B2939',
    marginTop: 12,
    marginBottom: 10,
  },
});
