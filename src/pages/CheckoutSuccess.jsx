import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconCartEmpty} from '../assets';
import HeaderBack from '../components/HeaderBack';
import Button from '../components/Button';
import Gap from '../components/Gap';

const CheckoutSuccess = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderBack title="Checkout Success" />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <IconCartEmpty />
        <Gap height={20} />
        <Text style={styles.title}>You made a transaction</Text>
        <Gap height={12} />
        <Text style={styles.text}>Stay at home while we</Text>
        <Text style={styles.text}>prepare your dream shoes</Text>
        <Gap height={20} />
        <View style={{width: 196}}>
          <Button
            onPress={() => navigation.replace('MainApp')}
            type="btn-sm"
            title="Order Other Shoes"
          />
        </View>
        <Gap height={12} />
        <View style={{width: 196}}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.replace('MainApp', {screen: 'Cart'})}>
            <Text style={styles.textButton}>View My Order</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CheckoutSuccess;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  container: {
    flex: 1,
    backgroundColor: '#242231',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#F1F0F2',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#999',
    textAlign: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39374B',
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 10,
  },
  textButton: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#B7B6BF',
  },
});
