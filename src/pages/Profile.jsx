import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import HeaderProfile from '../components/HeaderProfile';
import ListButtonProfile from '../components/ListButtonProfile';
import Gap from '../components/Gap';
import {getData, removeValue} from '../utils/localstorage';
import axios from 'axios';
import {API} from '../config';
import showMessage from '../utils/showMessage';
import {useFocusEffect} from '@react-navigation/native';

const Profile = ({navigation}) => {
  const [user, setUser] = useState({});

  useFocusEffect(
    useCallback(() => {
      getData('userProfile').then(res => {
        setUser(res.user);
      });
      // getData('token').then(res => {
      //   // setToken(res.token);
      //   axios
      //     .get(`${API.base_url}api/user`, {
      //       headers: {Authorization: res.token},
      //     })
      //     .then(result => {
      //       setUser(result.data.data);
      //     })
      //     .catch(err => {
      //       showMessage({
      //         message: err.message,
      //       });
      //     });
      // });
    }, []),
  );

  const signOut = () => {
    getData('token').then(token => {
      axios
        .post(
          `${API.base_url}api/logout`,
          {},
          {headers: {Authorization: token.token}},
        )
        .then(res => {
          removeValue('userProfile');
          removeValue('token');
          showMessage({message: res.data.meta.message, type: 'success'});
          setTimeout(() => {
            navigation.replace('SignIn');
          }, 2000);
        })
        .catch(err => {
          showMessage({message: err.message});
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
      <HeaderProfile
        title={user.name}
        desc={`@${user.username}`}
        onPress={signOut}
      />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Account</Text>
            <ListButtonProfile
              title="Edit Profile"
              onPress={() => navigation.navigate('EditProfile')}
            />
            <ListButtonProfile title="Your Orders" />
            <ListButtonProfile title="Help" />
          </View>
          <Gap height={30} />
          <View>
            <Text style={styles.text}>General</Text>
            <ListButtonProfile title="Privacy & Policy" />
            <ListButtonProfile title="Term of Service" />
            <ListButtonProfile title="Rate App" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  container: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#242231',
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#F1F0F2',
    marginBottom: 16,
  },
});
