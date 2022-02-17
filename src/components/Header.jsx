import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({children, title, desc}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#F1F0F2',
    width: 250,
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#504F5E',
    marginTop: 2,
  },
});
