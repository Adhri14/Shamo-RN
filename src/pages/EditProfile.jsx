import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import HeaderBack from '../components/HeaderBack';
import TextInputUnderline from '../components/TextInputUnderline';
import {DmProfile, IconChecklist, IconClose, ProfileDefault} from '../assets';
import Gap from '../components/Gap';
import {getData, removeValue, storeData} from '../utils/localstorage';
import axios from 'axios';
import {API} from '../config';
import showMessage from '../utils/showMessage';
import {useFocusEffect} from '@react-navigation/native';

const EditProfile = ({navigation}) => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  useFocusEffect(
    useCallback(() => {
      getData('userProfile').then(res => {
        setUser(res.user);
      });
      getData('token').then(res => {
        setToken(res.token);
        // axios
        //   .get(`${API.base_url}api/user`, {headers: {Authorization: res.token}})
        //   .then(result => {
        //     setUser(result.data.data);
        //   })
        //   .catch(err => {
        //     showMessage({
        //       message: err.message,
        //     });
        //   });
      });
    }, []),
  );

  const changeText = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const onUpdate = () => {
    const body = {
      name: user.name,
      username: user.username,
    };
    axios
      .post(`${API.base_url}api/user`, body, {headers: {Authorization: token}})
      .then(res => {
        console.log(res.data.data);
        removeValue('userProfile');
        storeData('userProfile', {user: res.data.data});
        navigation.push('MainApp', {screen: 'Home'});
      })
      .catch(err => {
        showMessage({
          message: err.message,
        });
      });
  };

  return (
    <View style={styles.page}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}>
          <IconClose />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
        <TouchableOpacity style={styles.button} onPress={onUpdate}>
          <IconChecklist />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={{uri: user.profile_photo_url}}
            style={styles.profile}
          />
        </View>
        <Gap height={30} />
        <TextInputUnderline
          label="Name"
          placeholder="Enter your Name"
          value={user.name}
          onChangeText={val => changeText('name', val)}
        />
        <Gap height={24} />
        <TextInputUnderline
          label="Username"
          placeholder="Enter your Username"
          value={user.username}
          onChangeText={val => changeText('username', val)}
        />
        <Gap height={24} />
        <TextInputUnderline label="Email Address" value={user.email} disable />
      </View>
    </View>
  );
};

export default EditProfile;

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
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#F1F0F2',
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  profile: {
    width: 100,
    height: 100,
  },
});
