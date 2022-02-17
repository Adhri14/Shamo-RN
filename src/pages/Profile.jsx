import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderProfile from '../components/HeaderProfile';
import ListButtonProfile from '../components/ListButtonProfile';
import Gap from '../components/Gap';

const Profile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <HeaderProfile
        title="Adhri"
        desc="@daemon_adr"
        onPress={() => navigation.replace('SignIn')}
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
