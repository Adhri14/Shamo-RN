import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
} from 'react-native';
import {BaseNavigation, IconCart} from '../assets';
import TabItem from './TabItem';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

export default function BottomNavigation({state, descriptors, navigation}) {
  const navigationNative = useNavigation();
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <ImageBackground
      source={BaseNavigation}
      style={{
        width,
        height: 80,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: 30,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem

		key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            label={label}
          />
        );
      })}
      {/* <Pressable
        onPress={() => navigationNative.navigate('Cart')}
        style={{
          backgroundColor: '#38ABBE',
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          alignSelf: 'center',
          right: '42.2%',
          bottom: 50,
          borderRadius: 100,
          zIndex: 999,
        }}>
        <IconCart />
      </Pressable> */}
    </ImageBackground>
  );
}
