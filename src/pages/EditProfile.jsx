import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderBack from '../components/HeaderBack';
import TextInputUnderline from '../components/TextInputUnderline';
import {DmProfile, IconChecklist, IconClose, ProfileDefault} from '../assets';
import Gap from '../components/Gap';

const EditProfile = ({navigation}) => {
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
        <TouchableOpacity style={styles.button}>
          <IconChecklist />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={ProfileDefault} style={styles.profile} />
        </View>
        <Gap height={30} />
        <TextInputUnderline label="Name" placeholder="Adhri" />
        <Gap height={24} />
        <TextInputUnderline label="Username" placeholder="@daemon" />
        <Gap height={24} />
        <TextInputUnderline
          label="Email Address"
          placeholder="adhri.adly@gmail.com"
        />
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
  },
  profile: {
    width: 100,
    height: 100,
  },
});
