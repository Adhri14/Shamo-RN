import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DmProfile, IconLogout} from '../assets';

const HeaderProfile = ({onPress, title, desc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* <Image source={DmProfile} */}
        <DmProfile />
        <View style={{marginLeft: 16}}>
          <Text style={styles.title}>Halo, {title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
      <View>
        <Pressable onPress={onPress}>
          {/* <Icon */}
          <IconLogout />
        </Pressable>
      </View>
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1F1D2B',
    padding: 30,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#F1F0F2',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#504F5E',
    marginTop: 2,
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
