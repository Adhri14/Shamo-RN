import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Gap from '../components/Gap';
import TextInputCustom from '../components/TextInput';
import Button from '../components/Button';
import {IconEmail, IconFullName, IconPassword, IconUsername} from '../assets';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar barStyle="light-content" backgroundColor="#1F1D2B" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Header title="Sign Up" desc="Register and Happy Shoping" />
          <Gap height={70} />
          <TextInputCustom
            placeholder="Your Full Name"
            label="Full Name"
            autoCapitalize="words"
            keyboardType="default">
            <IconFullName />
          </TextInputCustom>
          <Gap height={20} />
          <TextInputCustom
            placeholder="Your Username"
            label="Username"
            keyboardType="default">
            <IconUsername />
          </TextInputCustom>
          <Gap height={20} />
          <TextInputCustom
            placeholder="Your Email Address"
            label="Email Address"
            keyboardType="email-address">
            <IconEmail />
          </TextInputCustom>
          <Gap height={20} />
          <TextInputCustom
            placeholder="Your Password"
            label="Password"
            isPassword>
            <IconPassword />
          </TextInputCustom>
          <Gap height={30} />
          <Button
            title="Sign Up"
            onPress={() => navigation.replace('MainApp')}
          />
          <Text style={styles.link}>
            Already have an account?{' '}
            <Text
              onPress={() => navigation.navigate('SignIn')}
              style={styles.action}>
              Sign in
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  container: {
    padding: 30,
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  link: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#504F5E',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 30,
    // position: 'absolute',
    // bottom: 30,
  },
  action: {
    fontFamily: 'Poppins-Medium',
    color: '#6C5ECF',
  },
});
