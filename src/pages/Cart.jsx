import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import HeaderBack from '../components/HeaderBack';
import {IconCartEmpty, IconNext} from '../assets';
import Gap from '../components/Gap';
import Button from '../components/Button';
import ItemListCart from '../components/ItemListCart';
import {useSelector} from 'react-redux';

const EmptyState = ({onPress}) => {
  return (
    <View style={styles.content}>
      <IconCartEmpty />
      <Gap height={20} />
      <Text style={styles.title}>Opss! Your Cart is Empty</Text>
      <Gap height={12} />
      <Text style={styles.text}>Let's find your favorite shoes</Text>
      <Gap height={20} />
      <View style={{width: 152}}>
        <Button type="btn-sm" title="Explore Store" onPress={onPress} />
      </View>
    </View>
  );
};

const Cart = ({navigation}) => {
  let {cartReducer} = useSelector(state => state);

  console.log('data : ', cartReducer);

  const quantity = (index, item) => {
    let _quantity = [...cartReducer.cart];
    return (_quantity[index].quantity = item.quantity);
  };

  const onPressAdd = item => {
    item.quantity += 1;
  };

  return (
    <View style={styles.page}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <HeaderBack title="Cart" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        {/* <EmptyState /> */}
        {cartReducer.cart.length > 0 ? (
          <>
            <View style={{flex: 1}}>
              <Gap height={33} />
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1}}>
                {cartReducer.cart?.map((item, index) => (
                  <ItemListCart
                    key={`${item.id}->${index}`}
                    title={item.title}
                    price={`${item.price}`}
                    img={{uri: item.image}}
                    qty={`${quantity(index, item)}`}
                    onPressAdd={() => onPressAdd(item)}
                    onPressMin={() => onPressMin(item)}
                  />
                ))}
              </ScrollView>
            </View>
            <View>
              <View style={styles.row}>
                <Text style={styles.title}>Subtotal</Text>
                <Text style={styles.total}>$287,96</Text>
              </View>
              <View style={styles.wrapperButton}>
                <Pressable
                  onPress={() => navigation.navigate('CheckoutDetail')}
                  style={styles.buttonNext}>
                  <Text style={styles.textButton}>Continue to Checkout</Text>
                  <IconNext />
                </Pressable>
              </View>
            </View>
          </>
        ) : (
          <EmptyState onPress={() => navigation.replace('MainApp')} />
        )}
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  container: {
    flex: 1,
    backgroundColor: '#242231',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
  },
  content: {
    flex: 1,
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
  position: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#F1F0F2',
  },
  total: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#2C96F1',
  },
  wrapperButton: {
    paddingVertical: 30,
    borderTopWidth: 0.5,
    borderTopColor: '#2B2938',
  },
  buttonNext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#6C5ECF',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  textButton: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#F1F0F2',
  },
});
