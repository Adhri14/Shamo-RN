import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {
  IconCart,
  IconChatOff,
  IconChatOn,
  IconHomeOff,
  IconHomeOn,
  IconProfileOff,
  IconProfileOn,
  IconWhislistOff,
  IconWhislistOn,
} from '../assets';

const TabItem = ({label, isFocused, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeOn /> : <IconHomeOff />;
    }
    if (label === 'Message') {
      return isFocused ? <IconChatOn /> : <IconChatOff />;
    }
    if (label === 'Whislist') {
      return isFocused ? <IconWhislistOn /> : <IconWhislistOff />;
    }
    if (label === 'Profile') {
      return isFocused ? <IconProfileOn /> : <IconProfileOff />;
    }
    return <IconHomeOn />;
  };

  if (label === 'Cart') {
    return (
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={{
          backgroundColor: '#38ABBE',
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          // position: 'absolute',
          // alignSelf: 'center',
          // right: '42.2%',
          bottom: 43,
          borderRadius: 100,
          zIndex: 999,
        }}>
        <IconCart />
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={{
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'yellow',
        // marginRight: label === 'Chat' ? 90 : 0,
        // marginLeft: label === 'Whislist' ? 90 : 0,
        height: 80,
        justifyContent: 'center',
      }}>
      <Icon />
    </Pressable>
  );
};

export default TabItem;

const styles = StyleSheet.create({});
