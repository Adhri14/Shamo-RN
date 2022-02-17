import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderBack from '../components/HeaderBack';
import ItemListCart from '../components/ItemListCart';
import {IconAddress, IconLine, IconLocation} from '../assets';
import Gap from '../components/Gap';
import Button from '../components/Button';

const CheckoutDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <HeaderBack
        title="Checkout Details"
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Text style={styles.title}>List Items</Text>
          <View>
            <ItemListCart
              type="checkout-detail"
              title="Terrex Urban Low"
              price="$143,98"
              totalItem={2}
            />
          </View>
          <Gap height={10} />
          <View>
            <View style={styles.content}>
              <Text style={styles.title}>Address Detail</Text>
              <View>
                <View style={styles.rowPin}>
                  <View style={styles.circle}>
                    <IconAddress />
                  </View>
                  <View>
                    <Text style={styles.titlePin}>Store Location</Text>
                    <Text style={styles.subtitlePin}>Adidas Core</Text>
                  </View>
                </View>
                <IconLine style={styles.line} />
                <View style={styles.rowPin}>
                  <View style={styles.circle}>
                    <IconLocation />
                  </View>
                  <View>
                    <Text style={styles.titlePin}>Your Addres</Text>
                    <Text style={styles.subtitlePin}>Jl. Bau Baharuddin</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Gap height={30} />
          <View>
            <View style={styles.content}>
              <Text style={styles.title}>Payment Summary</Text>

              <View style={styles.rowItem}>
                <Text style={styles.key}>Product Quantity</Text>
                <Text style={styles.value}>2 Items</Text>
              </View>
              <View style={styles.rowItem}>
                <Text style={styles.key}>Product Price</Text>
                <Text style={styles.value}>$575.96</Text>
              </View>
              <View style={styles.rowItem}>
                <Text style={styles.key}>Shipping</Text>
                <Text style={styles.value}>Free</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.rowItemTotal}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>$575.96</Text>
              </View>
            </View>
          </View>
          <Gap height={30} />
          <View style={styles.line} />
          <Gap height={30} />
          <Button
            title="Checkout Now"
            onPress={() => navigation.replace('CheckoutSuccess')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckoutDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#242231',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#F1F0F2',
    marginBottom: 12,
  },
  content: {
    borderRadius: 12,
    padding: 20,
    backgroundColor: '#252836',
  },
  rowPin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#2F3344',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  line: {
    left: 20,
  },
  titlePin: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    color: '#999',
  },
  subtitlePin: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#F1F0F2',
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  rowItemTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  key: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#999',
  },
  value: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#F1F0F2',
  },
  line: {
    height: 1,
    backgroundColor: '#2E3141',
  },
  total: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#2C96F1',
  },
});
