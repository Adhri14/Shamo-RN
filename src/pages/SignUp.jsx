import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Gap from '../components/Gap';
import TextInputCustom from '../components/TextInput';
import Button from '../components/Button';
import {
  IconEmail,
  IconFullName,
  IconPassword,
  IconPhone,
  IconUsername,
} from '../assets';
import axios from 'axios';
import {API} from '../config';
import showMessage from '../utils/showMessage';
import {storeData} from '../utils/localstorage';

const initialData = {
  name: '',
  email: '',
  username: '',
  password: '',
  phone: '',
};

const SignUp = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialData);

  const onSubmit = () => {
    // navigation.replace('MainApp');
    setLoading(true);
    if (form.name === '') {
      setLoading(false);
      showMessage({
        message: 'Name is required',
      });
    } else if (form.username === '') {
      setLoading(false);
      showMessage({
        message: 'Username is required',
      });
    } else if (form.email === '') {
      setLoading(false);
      showMessage({
        message: 'Email is required',
      });
    } else if (form.phone === '') {
      setLoading(false);
      showMessage({
        message: 'Phone number is required',
      });
    } else if (form.password === '') {
      setLoading(false);
      showMessage({
        message: 'Password is required',
      });
    } else {
      axios
        .post(`${API.base_url}api/register`, form)
        .then(res => {
          console.log(res.data.data);
          setLoading(false);
          setForm(initialData);
          showMessage({
            message: res.data?.meta?.message,
            type: 'success',
          });
          const type_token = res.data.data.token_type;
          const access_token = res.data.data.access_token;
          storeData('userProfile', {user: res.data.data.user});
          storeData('token', {token: `${type_token} ${access_token}`});
          setTimeout(() => {
            navigation.replace('MainApp');
          }, 2000);
        })
        .catch(err => {
          setForm(initialData);
          setLoading(false);
          showMessage({
            message: err.message,
            type: 'success',
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
          <Header title="Sign Up" desc="Register and Happy Shoping" />
          <Gap height={70} />
          <TextInputCustom
            placeholder="Your Full Name"
            label="Full Name"
            autoCapitalize="words"
            value={form.name}
            onChangeText={val => setForm({...form, name: val})}
            keyboardType="default">
            <IconFullName />
          </TextInputCustom>
          <Gap height={20} />
          <TextInputCustom
            placeholder="Your Username"
            label="Username"
            value={form.username}
            onChangeText={val => setForm({...form, username: val})}
            keyboardType="default">
            <IconUsername />
          </TextInputCustom>
          <Gap height={20} />
          <TextInputCustom
            placeholder="Your Email Address"
            label="Email Address"
            value={form.email}
            onChangeText={val => setForm({...form, email: val})}
            keyboardType="email-address">
            <IconEmail />
          </TextInputCustom>
          <Gap height={20} />
          <TextInputCustom
            placeholder="Your Phone Number"
            label="Phone Number"
            value={form.phone}
            onChangeText={val => setForm({...form, phone: val})}
            keyboardType="phone-pad">
            <IconPhone />
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
            title="Sign Up"
            onPress={onSubmit}
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
