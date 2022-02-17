import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconLove} from '../assets';
import HeaderBack from '../components/HeaderBack';
import Gap from '../components/Gap';
import Button from '../components/Button';
import ItemListWhislist from '../components/ItemListWhislist';

const EmptyState = () => {
  return (
    <View style={styles.emptyState}>
      <IconLove />
      <Gap height={20} />
      <Text style={styles.title}> You don't have dream shoes?</Text>
      <Gap height={12} />
      <Text style={styles.text}>Let's find your favorite shoes</Text>
      <Gap height={20} />
      <View style={{width: 152}}>
        <Button type="btn-sm" title="Explore Store" />
      </View>
    </View>
  );
};

const Whislist = () => {
  return (
    <View style={styles.page}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <HeaderBack title="Whislist" />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* <EmptyState /> */}
          <View>
            <Gap height={33} />
            <ItemListWhislist />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Whislist;

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
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#F1F0F2',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#999',
  },
});
