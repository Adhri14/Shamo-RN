import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../pages/SplashScreen';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Message from '../pages/Message';
import Cart from '../pages/Cart';
import Whislist from '../pages/Whislist';
import Profile from '../pages/Profile';
import BottomNavigation from '../components/BottomNavigation';
import CheckoutDetail from '../pages/CheckoutDetail';
import CheckoutSuccess from '../pages/CheckoutSuccess';
import EditProfile from '../pages/EditProfile';
import DetailProduct from '../pages/DetailProduct';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{header: () => null}} />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{header: () => null, tabBarVisible: false}}
      />
      <Tab.Screen
        name="Whislist"
        component={Whislist}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{header: () => null}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CheckoutDetail"
        component={CheckoutDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CheckoutSuccess"
        component={CheckoutSuccess}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailProduct"
        component={DetailProduct}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
