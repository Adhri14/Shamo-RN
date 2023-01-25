import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TextInputCustom from '../components/TextInput';
import Header from '../components/Header';
import Gap from '../components/Gap';
import {IconEmail, IconPassword} from '../assets';
import Button from '../components/Button';
import Users from '../model/User.json';
import showMessage from '../utils/showMessage';
import axios from 'axios';
import {API} from '../config/index';
import {storeData} from '../utils/localstorage';

const initialData = {
  email: '',
  password: '',
};

const SignIn = ({navigation}) => {
  const [form, setForm] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    if (form.email === '') {
      setLoading(false);
      showMessage({
        message: 'Email is required',
      });
    } else if (form.password === '') {
      setLoading(false);
      showMessage({
        message: 'Password is required',
      });
    } else {
      axios
        .post(`${API.base_url}api/login`, form)
        .then(res => {
          setLoading(false);
          storeData('userProfile', {user: res.data.data.user});
          showMessage({
            message: res.data?.meta?.message,
            type: 'success',
          });
          setForm(initialData);
          const type_token = res.data.data.token_type;
          const access_token = res.data.data.access_token;
          storeData('token', {token: `${type_token} ${access_token}`});
          setTimeout(() => {
            navigation.replace('MainApp');
          }, 2000);
        })
        .catch(err => {
          setLoading(false);
          showMessage({
            message: err.message,
          });
        });
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar barStyle="light-content" backgroundColor="#1F1D2B" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Header title="Login" desc="Sign In to Countinue" />
          <Gap height={70} />
          <TextInputCustom
            placeholder="Your Email Address"
            value={form.email}
            onChangeText={val => setForm({...form, email: val})}
            label="Email Address"
            keyboardType="email-address">
            <IconEmail />
          </TextInputCustom>
          <Gap height={20} />
          <TextInputCustom
            placeholder="Your Password"
            label="Password"
            value={form.password}
            onChangeText={val => setForm({...form, password: val})}
            isPassword>
            <IconPassword />
          </TextInputCustom>
          <Gap height={30} />
          <Button
            disable={loading ? true : false}
            title="Sign In"
            onPress={onSubmit}
          />
          <Text style={styles.link}>
            Don't have an account?{' '}
            <Text
              onPress={() => navigation.navigate('SignUp')}
              style={styles.action}>
              Sign up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

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
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
  },
  action: {
    fontFamily: 'Poppins-Medium',
    color: '#6C5ECF',
  },
  alert: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ff6e92',
    marginBottom: 20,
  },
  textAlert: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
  buttonClose: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
});
