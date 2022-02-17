import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderBack from '../components/HeaderBack';
import {IconHeadset} from '../assets';
import Gap from '../components/Gap';
import Button from '../components/Button';
import ItemListMessage from '../components/ItemListMessage';

const EmptyState = ({onPress}) => {
  return (
    <View style={styles.emptyState}>
      <IconHeadset />
      <Gap height={20} />
      <Text style={styles.title}>Opss no message yet?</Text>
      <Gap height={12} />
      <Text style={styles.text}>You have never done a transaction</Text>
      <Gap height={20} />
      <View style={{width: 152}}>
        <Button type="btn-sm" title="Explore Store" onPress={onPress} />
      </View>
    </View>
  );
};

const Message = () => {
  return (
    <View style={styles.page}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <HeaderBack title="Message Support" />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <EmptyState />
          {/* <View>
            <Gap height={33} />
            <ItemListMessage />
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Message;

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
